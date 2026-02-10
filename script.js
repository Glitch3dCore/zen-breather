const circle = document.getElementById('circle');
const text = document.getElementById('text');
const btn = document.getElementById('toggleBtn');

let isRunning = false;
let interval;

const totalTime = 8000; 
const breatheTime = 3200
const holdTime = 1600;

function breatheAnimation() {
    if (!isRunning) return;

    text.innerText = 'Einatmen...';

    
    setTimeout(() => {
        if (!isRunning) return;
        text.innerText = 'Halten';

        setTimeout(() => {
            if (!isRunning) return;
            text.innerText = 'Ausatmen...';
        }, holdTime);
        
    }, breatheTime);
}

btn.addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        btn.innerText = "Stop Session";
        circle.classList.add('grow');
        
        breatheAnimation();
        interval = setInterval(breatheAnimation, totalTime);
    } else {
        isRunning = false;
        btn.innerText = "Start Session";
        circle.classList.remove('grow');
        clearInterval(interval);
        text.innerText = "Bereit?";
    }
});