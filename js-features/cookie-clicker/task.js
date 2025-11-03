const counter = document.getElementById('clicker__counter');
const image = document.getElementById('cookie');
const speed = document.getElementById('speed__counter');

const originalWidth = image.width;
const originalHeight = image.height;

let clickerCounter = 0;
let clickTime = Date.now();

function onClick() {
    const currentTime = Date.now();

    const timeBetweenClicks = (currentTime - clickTime) / 1000;

    let clickPerSecond = 0;
    if (timeBetweenClicks > 0) {
        clickPerSecond = (1 / timeBetweenClicks).toFixed(2);
    }

    clickerCounter++;
    speed.textContent = clickPerSecond;
    counter.textContent = clickerCounter;

    clickTime = currentTime;

    image.width = originalWidth * 1.3;
    image.height = originalHeight * 1.3;

    setTimeout(() => {
        image.width = originalWidth;
        image.height = originalHeight;
    }, 100);
}

image.onclick = onClick;