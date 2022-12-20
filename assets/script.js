var highscores = document.getElementById("highscores-page");
console.log("script load");
highscores.addEventListener("click", startTimer());
// start.addEventListener("click", () => {startTimer});
// startTimer();
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

function startTimer()
{
    console.log("start timer ");
    setInterval(timerCallback, 1000);
}

function getQuestion()
{
    //on submit
}
timer = 100;

function timerCallback()
{
    console.log(timer);
    timer--;
}