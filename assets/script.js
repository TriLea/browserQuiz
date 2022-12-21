//dom hooks for initial display
var highscores = document.getElementById("highscores-page");
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

var time = 100; //put into seconds formate from set inteval
var currentQuestion = 0; //used as a index to interate through list of n number of questions in question array
var timerObj; //holds return of setInerval to save and stop timer

console.log("script load");
startButton.addEventListener("click", start); //self explanitory

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
    if (time <= 0) //ends timer
    {
        saveScore();
        clearInterval(timerObj);
    }

    console.log(time);
    timer.innerHTML = time;
    time--;
}

function getQuestion() //displays next question, can do any amount
{
    console.log("getQuestion");

    if (typeof questions[currentQuestion] === undefined)
    {
        console.log("returned false");
        return false;
    }

    var currentQuestionLocal = questions[currentQuestion++]; //uses current value, and then bumps it up
    question.innerHTML = currentQuestionLocal.title;
    place1Label.innerHTML = currentQuestionLocal.choices[0];
    place2Label.innerHTML = currentQuestionLocal.choices[1];
    place3Label.innerHTML = currentQuestionLocal.choices[2];
    place4Label.innerHTML = currentQuestionLocal.choices[3];

    console.log("got to end of qetQuestion");
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

function saveScore() // get this from time
{
    //gets final time,
    //saves to local storage
    //update highscores??
    //displays play again button
}