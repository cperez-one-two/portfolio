document.addEventListener("DOMContentLoaded", function() {
    const datetime = new Date().toISOString();
    const times = document.querySelectorAll('time');
    for (let time of times) {
       time.innerText = datetime;
    }
})
