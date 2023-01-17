// get scores from localstorage
// declared variables scores from storage  and highscores from html
var highscores = document.querySelector("#highscores");
var allScores = localStorage.getItem("allScores");
if (allScores === null) {
    allScores = [];
} else {
    allScores = JSON.parse(allScores);
}

// function for each element of the array from the local storage to show it on the page

allScores.forEach(e => {
    liEl = document.createElement('li');
    liEl.textContent = e.initials + "/" + e.score;    
    highscores.append(liEl);
});

//enabling the button to clear highscores

var clear = document.querySelector("#clear");
