const timer = document.getElementById('timer');

const timeParts = timer.textContent.split(':');
const hours = parseInt(timeParts[0]);
const minutes = parseInt(timeParts[1]);
const seconds = parseInt(timeParts[2]);

let totalSeconds = hours * 3600 + minutes * 60 + seconds;

const intervalId = setInterval(() => {
    if (totalSeconds > 0) {
        totalSeconds--;

        const hoursLeft = Math.floor(totalSeconds / 3600);
        const minutesLeft = Math.floor((totalSeconds % 3600) / 60);
        const secondsLeft = totalSeconds % 60;

        timer.textContent = `${hoursLeft.toString().padStart(2, '0')}:${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
    } else {
        clearInterval(intervalId);
        alert('Вы победили в конкурсе!');

        window.location.href = 'https://httpbin.org/bytes/1048576';
    }
}, 1000);