
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
var title = document.querySelector("#question-title")

var score = 0;
var currentQuestion = 0;
var timer = 30; // time in seconds
var intervalId;

// functions and pseudocodes for timer and buttons for answers

function startTimer() {
  intervalId = setInterval(function() {
    timer--;
    
    if (timer === 0) {
      clearInterval(intervalId);
      endQuiz();
    }
  }, 1000);
}

function displayQuestion() {
 start.setAttribute("class","hide");
 choices.innerHTML = "";
 questions.setAttribute("class","start");
 title.innerHTML = arrayQuestions[currentQuestion].title
  for (let i = 0; i < arrayQuestions[currentQuestion].choices.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = arrayQuestions[currentQuestion].choices[i];
    choiceBtn.setAttribute("value", choices[i]);
    choiceBtn.onclick = checkAnswer;
    choices.appendChild(choiceBtn);
  }
}

function checkAnswer() {
  let userChoice = this.value;
  if (userChoice === arrayQuestions[currentQuestion].correctAnswer) {
    alert("Correct!");
    score++;
  } else {
    alert("Wrong! The correct answer is: " + arrayQuestions[currentQuestion].correctAnswer);
  }
  currentQuestion++;
  if (currentQuestion === arrayQuestions.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
}

function endQuiz() {
  clearInterval(intervalId);
  alert("Time's up! Your final score is " + score + "/" + arrayQuestions.length);
}

start.addEventListener("click", displayQuestion, startTimer);


