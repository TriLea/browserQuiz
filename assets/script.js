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
var saveYes = document.getElementById("Yes");
var saveNo = document.getElementById("No");
var HighscoreDisplay = document.getElementById("Highscores-page");

console.log("script load");
startButton.addEventListener("click", start); //self explanitory
submit.addEventListener("click", checkAnswer);

// uses event to listen for click on any child of the parent element, will use this to check if i need to save or not
document.getElementById("Submit2").addEventListener("click", function (event) {

    console.log(this.previousElementSibling.checked);
    console.log(this.previousElementSibling.previousElementSibling.checked);
    saveScore();
});

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

//initializes a few things it will need.
var time = 200; //in seconds formated by setInterval
var currentQuestion = 0; //used as a index to interate through list of n number of questions in question array
var timerObj; //holds return of setInerval to save and stop timer

function start() {

    questionPage.style.display = 'block'; //forget why i need this?

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
        testComplete();
    }
}

function saveScore() // get this from time
{
    console.log("savescore called");

    //create question to finish scoreObj

    // if () {
    var scores = localStorage.getItem("testScores");
    if (!scores) {
        console.log("no scores");

        var initals = "TL";
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
    else {
        console.log("scores exist");

    }
    // var initals = localStorage.getItem("initials");
    // //             // nothing exist, for first time intialize a storage container
    // var subKudos = {
    //     score: score,
    //     initials: initals,
    // }
    // // }
    // // else {
    // //     // if it exist dont delete or overwrite, just check score to place in
    // // }

    // var container =
    //     [
    //         {
    //             score: 000,
    //             initials: "NA"
    //         },
    //         {
    //             score: 000,
    //             initials: "NA"
    //         },
    //         {
    //             score: 000,
    //             initials: "NA"
    //         },
    //     ];

    // if (!scores) {
    //     var kudos = [
    //         subKudos,
    //     ];
    //     localStorage.setItem("testScores", JSON.stringify(kudos));
    // }
    // else {
    //     var result = JSON.parse(scores); //pulling out data previously made

    //     for (var i = 0; i == 2; i++) {
    //         if (!result[i] || score > result[i].score) //short circuit or
    //         {
    //             result.splice(i, 0, subKudos);
    //             //create new obj and save it to replace it
    //             // localStorage.setItem("testScores", JSON.stringify());
    //         }
    //     }
    // }

    // //generate the key based on user initals
    // scores[
    //     {}
    // ];

    // localStorage.setItem();
    // //generate html no no
    // //question for initials
    // //saves to local storage
    // //update highscores??
    // //displays play again button
}

// function saveYesOrNo()
// {


//     // if (saveYesNo.innerHTML == 'Yes')
//     // {
//     //     console.log("savescore hit");
//     //     saveScore();
//     // }
//     // else
//     // {
//     //     var quickScore = document.getElementById("printScore");
//     //     quickScore.innerHTML = time;
//     //     quickScore.style.display = 'block';
//     // }
// }



function testComplete() {
    // timer.style.display = 'none';
    clearInterval(timerObj);
    questionPage.style.display = 'none';
    saveQuestion.style.display = 'block';
}