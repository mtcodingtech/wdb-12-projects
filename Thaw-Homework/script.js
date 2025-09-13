
(function clockInit(){
    const hhmm = document.getElementById('hhmm');
    const ss = document.getElementById('ss');
    const ampmText = document.getElementById('ampmText');
    const dateEl = document.getElementById('date');
    const btn24 = document.getElementById('toggle24');
    const themeBtn = document.getElementById('themeBtn');
  
    let use24 = false;
  

    btn24.addEventListener('click', () => {
      use24 = !use24;
      btn24.textContent = use24 ? '24h ✓' : '24h';

      render(new Date());
    });

    let bright = false;
    themeBtn.addEventListener('click', () => {
      bright = !bright;
      document.documentElement.style.setProperty('--bg',
        bright ? 'linear-gradient(135deg,#081724 0%, #00233f 100%)' : 'linear-gradient(135deg,#0f172a 0%, #071129 100%)'
      );
    });
  
 
    function two(n){ return n<10 ? '0'+n : ''+n; }
  
    
    function formatDate(d){
      try{
        const opts = { weekday:'short', month:'short', day:'numeric', year:'numeric' };
        return new Intl.DateTimeFormat(navigator.language || 'en-US', opts).format(d);
      }catch(e){
        const wk = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const mo = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        return `${wk[d.getDay()]}, ${mo[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
      }
    }
  
    function render(now){
      const h = now.getHours();
      const m = now.getMinutes();
      const s = now.getSeconds();
  
      let displayH = h;
      let ap = 'AM';
      if(!use24){
        ap = h >= 12 ? 'PM' : 'AM';
        displayH = h % 12;
        if(displayH === 0) displayH = 12;
      }
      hhmm.textContent = `${two(displayH)}:${two(m)}`;
      ss.textContent = two(s);
      ampmText.textContent = ap;
      dateEl.textContent = formatDate(now);
    }
  
    
    function scheduleTick(){
      const now = new Date();
      render(now);
      const msToNextSecond = 1000 - now.getMilliseconds();
      setTimeout(scheduleTick, msToNextSecond + 6);
    }
  
    btn24.textContent = '24h';
    scheduleTick();
  
    
    setInterval(() => {
      dateEl.textContent = formatDate(new Date());
    }, 60*1000);
  
    
    window._niceClock = { set24: (v)=>{ use24=!!v; btn24.textContent = use24 ? '24h ✓' : '24h'; render(new Date()); } };
  })();
  