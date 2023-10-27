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
        li.addEventListener('click', () => checkAnswer(index));
        optionsList.appendChild(li);
    });
}

// Function to check the answer
// Function to check the answer
function checkAnswer(selectedIndex) {
    if (selectedIndex === questions[currentQuestion].answer) {
        score++;
        options[selectedIndex].style.backgroundColor = 'lightgreen';
    } else {
        options[selectedIndex].style.backgroundColor = 'pink';
    }
    options[questions[currentQuestion].answer].style.backgroundColor = 'lightgreen';
    disableOptions();
}


// Function to disable options after answering
function disableOptions() {
    options.forEach(option => {
        option.style.pointerEvents = 'none';
    });
    nextButton.style.display = 'block';
}

// Event listener for the "Next" button
nextButton.addEventListener('click', () => {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
        resetOptions();
    } else {
        displayScore();
    }
    nextButton.style.display = 'none';
});

// Function to reset option colors
function resetOptions() {
    options.forEach(option => {
        option.style.backgroundColor = '#f2f2f2';
        option.style.pointerEvents = 'auto';
    });
}

// Function to display the final score
function displayScore() {
    scoreDisplay.textContent = `${score} / ${questions.length}`;
}

// Initialize the quiz with the first question
loadQuestion(currentQuestion);
