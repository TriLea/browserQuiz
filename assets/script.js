//dom hooks for initial display
var questionPage = document.getElementById("questionPage");
var highscores = document.getElementById("highscoresPage");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var question = document.getElementById("Question");

//dom hooks for choices of answers list, holds 4 radio inputs
var place1 = document.getElementById("place1");
var p1Label = document.getElementById("place1Label");
var place2 = document.getElementById("place2");
var p2Label = document.getElementById("place2Label");
var place3 = document.getElementById("place3");
var p3Label = document.getElementById("place3Label");
var place4 = document.getElementById("place4");
var p4Label = document.getElementById("place4Label");
var submit = document.getElementById("submit");

//DOM hooks for saveScore page
var saveQuestion = document.getElementById("saveQuestion");
var initalsInp = document.getElementById("name");
var playAgain = document.getElementById("playAgain");
var HighscoreDisplay = document.getElementById("Highscores-page");
//score list of 3
var score1 = document.getElementById("score1");
var score2 = document.getElementById("score2");
var score3 = document.getElementById("score3");

var questionsList = //self explanitory
    [
        {
            title: "what is CSS?",
            choices: ["Something that makes you sick", "Cascading stylesheets", "A lowlevel language", "A high level language"],
            correctAnswer: "Cascading stylesheets"
        },
        {
            title: "What is html?",
            choices: ["Hyper text markup language", "A thing hackers use", "An IDE", "A low level language"],
            correctAnswer: "Hyper text markup language"
        },
        {
            title: "What is javascript?",
            choices: ["Middle ware", "A video game", "A food", "A scripting language"],
            correctAnswer: "a scripting language"
        },
        {
            title: "what is a css selector?",
            choices: ["A way to select html elements", "A data structure", "A empty page", "Hyper text markup language"],
            correctAnswer: "A way to select html elements"
        }
    ]

//start of logic _____________________________________________________________

//hooking up eventlisteners to their respective functions, this creates the logic flow of the program
startButton.addEventListener("click", start); //self explanitory
submit.addEventListener("click", checkAnswer); //self explanitory
document.getElementById("Submit2").addEventListener("click", saveScore); // save score at end of quiz

//initializes a few things it will need.
var time = 200; //in seconds formated by setInterval
var currentQuestion = 0; //used as a index to interate through list of n number of questions in question array
var timerObj; //holds return of setInerval to save and stop timer

function start() {

    currentQuestion = 0; //reset current question
    HighscoreDisplay.style.display = 'none'; //hide previous test
    saveQuestion.style.display = 'none'; //hide previous test
    questionPage.style.display = 'block'; //show question page
    startTimer();
    getQuestion();
}

function startTimer() {
    timerObj = setInterval(timerCallback, 1000);
}

function timerCallback() {

    if (time <= 0) { //ends timer and displays highscore page, falls through the decrimentor if timer still has time
        testComplete();
    }
    time--;
    timer.innerHTML = time;
}

function getQuestion() //displays next question, can do any amount
{
    if (!questionsList[currentQuestion]) { // !variable is a way of checking if variable is null or undefined
        return false;
    }
    var currentQuestionLocal = questionsList[currentQuestion];
    question.innerHTML = currentQuestionLocal.title; //what is this for?
    
    place1Label.innerHTML = currentQuestionLocal.choices[0];
    place2Label.innerHTML = currentQuestionLocal.choices[1];
    place3Label.innerHTML = currentQuestionLocal.choices[2];
    place4Label.innerHTML = currentQuestionLocal.choices[3];

    return true;
}

function checkAnswer() {
    var userChoice;

    if (place1.checked) {
        userChoice = place1Label;
        place1.checked = false; //clean up
    }
    else if (place2.checked) {
        userChoice = place2Label;
        place2.checked = false; //clean up
    }
    else if (place3.checked) {
        userChoice = place3Label;
        place3.checked = false; //clean up
    }
    else if (place4.checked) {
        userChoice = place4Label;
        place4.checked = false; //clean up
    }
    else {
        alert("Please select an answer");
        time -= 20;
        timer.innerHTML = time;
        return;
    }

    if (userChoice.innerHTML == questionsList[currentQuestion].correctAnswer) {
        console.log("correct");
        time += 20;
        timer.innerHTML = time;
    }
    else {
        console.log("wrong");
        time -= 20;
        timer.innerHTML = time;
    }

    currentQuestion++; //bumps it up when we are done with it

    if (!getQuestion()) {
        testComplete(); //if there are no more questions
    }
}

function testComplete() {

    clearInterval(timerObj);
    questionPage.style.display = 'none';
    saveQuestion.style.display = 'block';
}

function saveScore() // get this from time
{
    console.log("savescore called");

    HighscoreDisplay.style.display = 'block';

    var scores = localStorage.getItem("testScores");
    if (!scores) {
        console.log("no scores");

        var initals = initalsInp.innerHTML;
        //localStorage.getItem("initials"); need to capture input getelement by id enter input field 
        var score = time;
        var empARR = []; 

        var subKudos = {
            score: score,
            initials: initals,
        }
        empARR.push(subKudos);
        console.log(empARR);
        localStorage.setItem("testScores",empARR);
    }

    score1.innerHTML = "test";
    score2.innerHTML = "test";
    score3.innerHTML = "test";
}