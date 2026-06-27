document.addEventListener("DOMContentLoaded", function() {
    const d = new Date();
    const times = document.querySelectorAll('time');
    for (let time of times) {
        time.innerText = `${d.toTimeString().slice(0,8)}`;
    }
})
