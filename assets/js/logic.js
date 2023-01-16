
//PSEUDOCODE
//A start button that when clicked a timer starts and the first question appears.


//Questions contain buttons for each answer.

// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score

// creating variables

var scores = document.querySelector(".scores");
var wrapper = document.querySelector(".wrapper");
var timer = document.querySelector("#start");
var questions = document.querySelector("#questions");
var choices = document.querySelector(".choices");
var endScreen = document.querySelector("#end-screen");
var title = document.querySelector("#question-title");
var time = document.querySelector("#time");
var feedback = document.querySelector("#feedback");
var finalScore = document.querySelector("#final-score");

var scores = 0;
var currentQuestion = 0;
var secondsLeft = 60;
// Holds interval time
var holdInterval = 0;
// Holds penalty time
var penalty = 10;
var intervalId;

// functions and pseudocodes for timer and buttons for answers

timer.addEventListener("click", function () {
  // We are checking zero because its originally set to zero
  if (holdInterval === 0) {
      holdInterval = setInterval(function () {
          secondsLeft--;
          time.textContent = + secondsLeft;

          if (secondsLeft <= 0) {
              clearInterval(holdInterval);
              endQuiz();
              time.textContent = "Time's up!";
          }
      }, 1000);
  }
  displayQuestion();
});

function displayQuestion() {
 start.setAttribute("class","hide");
 var p = document.querySelector('p');
 var h1el = document.querySelector('h1');
 h1el.setAttribute("class", "hide");
 p.setAttribute("class", "hide");
 choices.innerHTML = "";
 questions.setAttribute("class","start");
 title.innerHTML = arrayQuestions[currentQuestion].title
  for (let i = 0; i < arrayQuestions[currentQuestion].choices.length; i++) {
    let choiceBtn = document.createElement("button");
    choiceBtn.innerHTML = arrayQuestions[currentQuestion].choices[i];
    choiceBtn.setAttribute("value", arrayQuestions[currentQuestion].choices[i]);
    choiceBtn.onclick = checkAnswer;
    choices.appendChild(choiceBtn);
  }
}

function checkAnswer() {
  feedback.setAttribute("class", "show");
  let userChoice = this.value;
  if (userChoice === arrayQuestions[currentQuestion].correctAnswer) {
    feedback.textContent = "Correct!";
    scores++;
  } else {
    feedback.textContent = "Wrong! The correct answer is: " + arrayQuestions[currentQuestion].correctAnswer;
    secondsLeft = secondsLeft - penalty;
  }
  currentQuestion++;
  if (currentQuestion === arrayQuestions.length) {
    endQuiz();
  } else {
    displayQuestion()
  }
};

function endQuiz() {
  clearInterval(intervalId);  
  finalScore.textContent = scores;
  questions.setAttribute("class","hide");
  endScreen.setAttribute("class","start");
}

//add listener to the submit button then...
  // add score and name to the localstorage  
  // call score window


start.addEventListener("click", displayQuestion,);


