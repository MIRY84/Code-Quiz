
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

