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

//DOM hooks for highscore final page
var saveQuestion = document.getElementById("saveQuestion");
var HighscoreDisplay = document.getElementById("Highscores-page");

var time = 200; //in seconds formated by setInterval
var currentQuestion = 0; //used as a index to interate through list of n number of questions in question array
var timerObj; //holds return of setInerval to save and stop timer

console.log("script load");
startButton.addEventListener("click", start); //self explanitory
submit.addEventListener("click", checkAnswer); 

var questions = 
[
    {
        title: "what is html",
        choices: ["1","2","3","4"],
        correctAnswer: "1"
    },
    {
        title: "q2",
        choices: ["a1","a2","a3","a4"],
        correctAnswer: "a2"
    },
    {
        title: "idk3",
        choices: ["idk3","1","2","3"],
        correctAnswer: "3"
    },
    {
        title: "00",
        choices: ["01","02","03","04"],
        correctAnswer: "01"
    }
]

function start()
{
    console.log("started");
    questionPage.style.display = 'block';
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
        //why am i saving the score here? shouldnt i do a fail, or check for zero for fail?
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

    if (questions[currentQuestion] === undefined)
    {
        console.log("returned false");
        return false;
    }

    var currentQuestionLocal = questions[currentQuestion];
    question.innerHTML = currentQuestionLocal.title;
    place1Label.innerHTML = currentQuestionLocal.choices[0];
    place2Label.innerHTML = currentQuestionLocal.choices[1];
    place3Label.innerHTML = currentQuestionLocal.choices[2];
    place4Label.innerHTML = currentQuestionLocal.choices[3];

    console.log("got to end of qetQuestion");
    return true;
}

function saveScore() // get this from time
{
    // hide everything
    questionPage.style.display = 'none';
    var score = time;

    //generate html
    //question for initials
    //saves to local storage
    //update highscores??
    //displays play again button
}

function checkAnswer()
{
    var userChoice;

    if (place1.checked)
    {
        userChoice = place1Label;
        place1.checked = false; //clean up
    } 
    else if (place2.checked)
    {
        userChoice = place2Label;
        place2.checked = false; //clean up
    }
    else if (place3.checked)
    {
        userChoice = place3Label;
        place3.checked = false; //clean up
    }
    else if (place4.checked)
    {
        userChoice = place4Label;
        place4.checked = false; //clean up
    }
    else
    {
        //please select before hitting submit
        //count as wrong
    }

    if (userChoice.innerHTML == questions[currentQuestion].correctAnswer)
    {
        //correct
        console.log("correct");
    }
    else
    {
        //spit message
        console.log("wrong");
        time -= 20;
    }

    
    currentQuestion++; //bumps it up when we are done with it

    if(!getQuestion())
    {
        saveQuestion.style.display = true;
        // meant to be a question here!
        //if true save, capture user input how?
        //button, reuse submit??

        if(result == true)
        {
            saveScore();
        }
        else
        {
            //just print the score to the screen
        }
    }
}