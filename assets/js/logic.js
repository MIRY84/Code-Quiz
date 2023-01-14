
//PSEUDOCODE
//A start button that when clicked a timer starts and the first question appears.


//Questions contain buttons for each answer.

// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score

// creating variables

var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var wrapper = document.querySelector(".wrapper");
var start = document.querySelector("#start");
var questions = document.querySelector("#questions");
var choices = document.querySelector(".choices");
var endScreen = document.querySelector("#end-screen");

var score = 0;
var currentQuestion = 0;
var timeLeft = 30; // time in seconds
var intervalId;

// functions and pseudocodes for timer and buttons for answers

function startTimer() {
  intervalId = setInterval(function() {
    timeLeft--;
    
    if (timeLeft === 0) {
      clearInterval(intervalId);
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
 
  for (let i = 0; i < choices.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = choices[i];
    choiceBtn.setAttribute("value", choices[i]);
    choiceBtn.onclick = checkAnswer;
    document.getElementById("choices").appendChild(choiceBtn);
  }
}

function checkAnswer() {
  let userChoice = this.value;
  if (userChoice === questions[currentQuestion].answer) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! The correct answer is: " + questions[currentQuestion].answer);
  }
  currentQuestion++;
  if (currentQuestion === questions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function endQuiz() {
  clearInterval(intervalId);
  alert("Time's up! Your final score is " + score + "/" + questions.length);
}

startTimer();
displayQuestion();


