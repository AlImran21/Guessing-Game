let totalAttempts = 5;
let attempts = 0;
let totalWon = 0;
let totalLost = 0;


const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const guessingNumber = form.querySelector('#guessingNumber');
const checkButton = cardBody.querySelector('#check');
const resultText = cardBody.querySelector('.resultText');
const lostWonMessage = document.createElement('p');
const remainingAttempts = cardBody.querySelector('.remainingAttempts');

form.addEventListener('submit', function (event) {
    event.preventDefault();
    attempts++;

    if (attempts === 5) {
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if (attempts < 6) {
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttempts.innerHTML = `Remaining attempts: ${totalAttempts - attempts}`;
    }

    event.target.reset();
});


function checkResult(guessingNumber) {
    const randomNumber = getRandomNumber(5);

    if (guessingNumber === randomNumber) {
        resultText.innerHTML = `You have won`;
        totalWon++;
    }
    else {
        resultText.innerHTML = `You have lost; random number was ${randomNumber} `;
        totalLost++;
    }

    lostWonMessage.innerHTML = `Won: ${totalWon}, Lost: ${totalLost}`;
    lostWonMessage.classList.add('large-text');
    cardBody.appendChild(lostWonMessage);

}


function getRandomNumber(limit) {
    return randomNumber = Math.floor(Math.random() * limit) + 1;
}

