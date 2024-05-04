// Generate random number
const randomNumber = Math.floor(Math.random() * 100) + 1;

// Get elements
const guessField = document.querySelector('.guessField');
const guessSubmit = document.querySelector('.guessSubmit');
const message = document.querySelector('.message');

// Guess function
guessSubmit.addEventListener('click', checkGuess);

function checkGuess() {
    const userGuess = parseInt(guessField.value);
    if (userGuess === randomNumber) {
        message.textContent = 'Selamat! Anda menebak dengan benar!';
        message.style.color = 'green';
        gameOver();
    } else if (userGuess < randomNumber) {
        message.textContent = 'Angka terlalu kecil. Coba lagi!';
        message.style.color = 'red';
    } else if (userGuess > randomNumber) {
        message.textContent = 'Angka terlalu besar. Coba lagi!';
        message.style.color = 'red';
    }
    guessField.value = '';
    guessField.focus();
}

// Game over function
function gameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
}
