const questions = [
    {
        question: "What is the chemical symbol for water?",
        options: ["H2O2", "CO2", "H2O", "NaCl"],
        answer: 2
    },
    // Add more questions here...
];

const options = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score');
const nextButton = document.getElementById('next-btn');

let currentQuestion = 0;
let score = 0;

// Function to load the next question
function loadQuestion(questionIndex) {
    const questionContainer = document.getElementById('question-container');
    const optionsList = document.getElementById('options');
    questionContainer.textContent = `Question ${questionIndex + 1}: ${questions[questionIndex].question}`;
    optionsList.innerHTML = '';

    questions[questionIndex].options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('option');
        li.addEventListener('click', () => selectAnswer(index));
        optionsList.appendChild(li);
    });

    // Show the "Submit" button for the current question
    const submitButton = document.getElementById('submit-btn');
    submitButton.style.display = 'block';
    submitButton.addEventListener('click', () => checkAnswerAndProceed(questionIndex));
}

// Function to select an answer
function selectAnswer(selectedIndex) {
    resetOptions();
    options[selectedIndex].classList.add('selected');
}

// Function to check the answer and proceed
function checkAnswerAndProceed(questionIndex) {
    const selectedOption = document.querySelector('.option.selected');
    if (selectedOption) {
        const selectedIndex = Array.from(options).indexOf(selectedOption);
        checkAnswer(selectedIndex);
        disableOptions();
        nextButton.style.display = 'block';
    }
}

// Event listener for the "Next" button
nextButton.addEventListener('click', function () {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
        resetOptions();
    } else {
        displayScore();
    }
    nextButton.style.display = 'none';
});

// Function to reset option colors and selected class
function resetOptions() {
    options.forEach(option => {
        option.style.backgroundColor = '#f2f2f2';
        option.classList.remove('selected'); // Remove the 'selected' class
        option.style.pointerEvents = 'auto';
    });
}

// ...
