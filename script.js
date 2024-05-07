let timerInterval;
let timeLeft = 900; // 15 minutes in seconds
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetButton = document.getElementById('resetButton');

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}

function startTimer() {
    if (!timerInterval) {
        timerInterval = setInterval(() => {
            timeLeft--;
            if (timeLeft >= 0) {
                timerDisplay.textContent = formatTime(timeLeft);
            } else {
                clearInterval(timerInterval);
                timerInterval = null;
                alert('Time\'s up!');
            }
        }, 1000);
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    timerInterval = null;
    timeLeft = 900; // Reset to 15 minutes
    timerDisplay.textContent = formatTime(timeLeft);
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
