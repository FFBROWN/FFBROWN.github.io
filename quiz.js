const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const submitButton = document.getElementById('submit-btn');

let score = 0;

options.forEach(option => {
    option.addEventListener('click', () => {
        // Check if the selected option is the correct answer
        const isCorrect = option.getAttribute('data-answer') === 'true';
        if (isCorrect) {
            score++;
        }
        option.style.backgroundColor = isCorrect ? 'lightgreen' : 'pink';
    });
});

submitButton.addEventListener('click', () => {
    // Disable options after submitting
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });

    // Display the final score
    scoreDisplay.textContent = score;
});
