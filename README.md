<!DOCTYPE html>
<html>
<head>
  <title>Bible Quiz</title>
</head>
<body>
  <div id="quiz">
    <h2>Bible Quiz</h2>
    <p id="question">Question 1: Who was the first man created in the Bible?</p>
    <label><input type="radio" name="answer" value="A"> A) Adam</label><br>
    <label><input type="radio" name="answer" value="B"> B) Noah</label><br>
    <label><input type="radio" name="answer" value="C"> C) Abraham</label><br>
    <p>Time Left: <span id="time">10</span> seconds</p>
    <button id="submit-button">Submit</button>
  </div>
  <div id="results" style="display:none;">
    <p>Your Score: <span id="score">0</span></p>
  </div>

  <script src="quiz.js"></script>
</body>
</html>
