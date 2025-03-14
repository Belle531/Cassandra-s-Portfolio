function playSound() {
    const audio = document.getElementById('clickSound');
    audio.currentTime = 0;
    audio.play();
}

function appendToDisplay(value) {
    playSound();
    document.getElementById('display').value += value;
}

function clearDisplay() {
    playSound();
    document.getElementById('display').value = '';
}

function deleteLast() {
    playSound();
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    playSound();
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}


const themeToggle = document.getElementById('themeToggle');
const body = document.body;

function enableDarkMode() {
    body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️'; 
}

function disableDarkMode() {
    body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙'; 
}

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark-theme')) {
        disableDarkMode();
    } else {
        enableDarkMode();
    }
});


if (localStorage.getItem('theme') === 'dark') {
    enableDarkMode();
}


const clickButton = document.getElementById("clickButton");
clickButton.addEventListener("click", playSound);