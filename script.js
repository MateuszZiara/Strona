let mode = 'learn';

function changeMode(selectedMode) {
    mode = selectedMode;
    document.getElementById('output').innerText = '';
}

function handleClick(dot, correctText) {
    if (mode === 'learn') {
        showString(correctText);
    } else if (mode === 'test') {
        const userAnswer = prompt('Podaj nazwę:');
        checkAnswer(userAnswer, correctText);
    }
}

function showString(text) {
    document.getElementById('output').innerText = text;
}

function checkAnswer(userAnswer, correctText) {
    if (userAnswer.toLowerCase() === correctText.toLowerCase()) {
        document.getElementById('output').innerText = 'Dobrze!';
    } else {
        document.getElementById('output').innerText = 'Źle. Poprawna odpowiedź to: ' + correctText;
    }
}
