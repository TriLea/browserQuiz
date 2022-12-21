//dom hooks to connect to index.html
var highscores = document.getElementById("highscores-page");
var timer = document.getElementById("timer");
var startButton = document.getElementById("start");
var question = document.getElementById("question");
var place1 = document.getElementById("place1");
var place2 = document.getElementById("place2");
var place3 = document.getElementById("place3");
var place4 = document.getElementById("place4");
var submit = document.getElementById("submit");
var time = 100;
var currentQuestion = 0;
var timerObj;

console.log("script load");
startButton.addEventListener("click", start);

var questions = 
[
    {
        title: "what is html",
        choices: ["1","2","3","4"],
        correctAnswer: "1"
    },
    {
        title: "what is html",
        choices: ["html","null","null","null"],
        correctAnswer: "html"
    },
    {
        title: "what is html",
        choices: ["html","null","null","null"],
        correctAnswer: "html"
    },
    {
        title: "what is html",
        choices: ["html","null","null","null"],
        correctAnswer: "html"
    }
]

function start()
{
    console.log("started");
    startTimer();
    getQuestion();
    
}

function startTimer()
{
    console.log("start timer ");
    timerObj = setInterval(timerCallback, 1000);
}

function timerCallback()
{
    if (time <= 0)
    {
        saveScore();
        clearInterval(timerObj);
    }

    console.log(time);
    timer.innerHTML = time;
    time--;
}

function getQuestion()
{
    console.log("getQuestion");

    if (questions[currentQuestion] == undefined)
    {
        return false;
    }

    var currentQuestion = questions[currentQuestion++]; //uses current value, and then bumps it up
    question.innerHTML = currentQuestion.title;
    place1.innerHTML = currentQuestion.choice[0];
    place2.innerHTML = currentQuestion.choice[1];
    place3.innerHTML = currentQuestion.choice[2];
    place4.innerHTML = currentQuestion.choice[3];

    console.log("go to end of qetQuestion");
    // if()
    // {

    // }
    
    //displays question
    //displays submit button
    //on submit
    //pull next
    //interupt if out of time
    //or out of questions
}

function saveScore()
{
    //gets final time,
    //saves to local storage
    //update highscores??
    //displays play again button
}