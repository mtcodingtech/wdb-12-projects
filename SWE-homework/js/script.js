function updateClock() {
    const now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    document.getElementById("hours").textContent = h.toString().padStart(2, '0');
    document.getElementById("minutes").textContent = m.toString().padStart(2, '0');
    document.getElementById("seconds").textContent = s.toString().padStart(2, '0');

      // Date string
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = [
        "January","February","March","April","May","June",
        "July","August","September","October","November","December"
    ];

    let dayName = days[now.getDay()];
    let day = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    document.getElementById("dateText").textContent =`${dayName} ${day} ${month} ${year}`;

      // Dynamic theme (change background by time of day)
    let timeBox = document.getElementById("timeBox");
    let dateBox = document.getElementById("dateText");
    if (h >= 6 && h < 12) {
        // Morning
        timeBox.style.background = "linear-gradient(135deg, #ff9800, #ffc107)";
        dateBox.style.background = "linear-gradient(135deg, #ffb74d, #ff8a65)";
        document.body.style.background = "#ffe082";
    } else if (h >= 12 && h < 18) {
        // Afternoon
        timeBox.style.background = "linear-gradient(135deg, #4caf50, #81c784)";
        dateBox.style.background = "linear-gradient(135deg, #66bb6a, #43a047)";
        document.body.style.background = "#aed581";
    } else if (h >= 18 && h < 21) {
        // Evening
        timeBox.style.background = "linear-gradient(135deg, #3f51b5, #673ab7)";
        dateBox.style.background = "linear-gradient(135deg, #5c6bc0, #7e57c2)";
        document.body.style.background = "#9575cd";
    } else {
        // Night
        timeBox.style.background = "linear-gradient(135deg, #212121, #424242)";
        dateBox.style.background = "linear-gradient(135deg, #616161, #757575)";
        document.body.style.background = "#000";
    }
}
    setInterval(updateClock, 1000);
    updateClock();