//dom hooks to connect to index.html
var highscores = document.getElementById("highscores-page");
var timer = document.getElementById("timer");
var place1 = document.getElementById("place1");
var place2 = document.getElementById("place2");
var place3 = document.getElementById("place3");
var place4 = document.getElementById("place4");
var page = 0;
timer = 100;

// will use later for another html page for highscores
var scores;
var homepage = 0; // set page equal to selected page to change

// console.log("script load");
// highscores.addEventListener("click", startTimer());

var quesitons = 
[
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
    },
    {
        title: "what is html",
        choices: ["html","null","null","null"],
        correctAnswer: "html"
    },
]

function start()
{
    startTimer;
    quizStart;

}

function startTimer()
{
    console.log("start timer ");
    setInterval(timerCallback, 1000);
}

function timerCallback()
{
    console.log(timer);
    timer--;
}

function quizStart()
{
    
}

function getQuestion()
{
    //on submit
}