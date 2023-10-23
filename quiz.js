const questions = [
  {
    question: "Who was the first man created in the Bible?",
    options: ["A) Adam", "B) Noah", "C) Abraham"],
    answer: "A"
  },
  // Add more questions here
];

let currentQuestion = 0;
let score = 0;
let timer;

function displayQuestion() {
  if (currentQuestion < questions.length) {
    const q = questions[currentQuestion];
    document.getElementById("question").textContent = `Question ${currentQuestion + 1}: ${q.question}`;
    const options = document.querySelectorAll('input[type="radio"]');
    for (let i = 0; i < options.length; i++) {
      options[i].nextElementSibling.textContent = q.options[i];
      options[i].checked = false;
    }

    // Start the 10-second timer
    let timeLeft = 10;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("time").textContent = timeLeft;
      if (timeLeft === 0) {
        clearInterval(timer);
        handleAnswer(null);
      }
    }, 1000);
  } else {
    document.getElementById("quiz").style.display = "none";
    document.getElementById("results").style.display = "block";
    document.getElementById("score").textContent = score;
  }
}

function handleAnswer(selectedAnswer) {
  clearInterval(timer);
  const correctAnswer = questions[currentQuestion].answer;
  if (selectedAnswer === correctAnswer) {
    score++;
  }

  currentQuestion++;
  displayQuestion();
}

document.getElementById("submit-button").addEventListener("click", function () {
  const selectedAnswer = document.querySelector('input[name="answer"]:checked');
  if (selectedAnswer) {
    handleAnswer(selectedAnswer.value);
  } else {
    handleAnswer(null); // No answer selected
  }
});

displayQuestion();
