function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
    var time = hours + ":" + minutes + ":" + seconds;
    document.getElementById("clock").innerText = time;
}
setInterval(showTime, 1000);

function showAlert() {
    alert("Welcome to my website! Enjoy exploring!");
}
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("h1").classList.add("animate");
});
