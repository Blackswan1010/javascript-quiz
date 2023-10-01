//  /variable declaritions
//timeRemaining
//querySelectors
//function to start the game
//listen for button start
//start timer in intervals of 1000 ms
//first question displays and corresponding answers
//carousel-box like array to keep track of what question you are on
//use eventlisteners on buttons check for answers
//compare clicked button to what we have as correct answer
//if wrong display WRONG!!! and decrement an amount of time from timer
//if correct display CORRECT!!!
//in either case move onto next question
//if end of questions end game
//repeat until timer hits 0 or run out of questions
//when our array of questions returns undefined or length-1 for index
//end game
//Display of time remaining as score
//end game
//stop timer
//prompt for their initials
//save score into high score
//clear timer

var title = document.getElementById("title");
var timer = document.getElementById("timer");
var startButton = document.getElementById("startButton");
var answers = document.getElementById("answers");
var questions = document.getElementById("question");

var lis = answers.getElementsByTagName('li');
var score;
var questionNumber = 0;

var userSelect;


title.textContent = "Javscript Coding Quiz";

var test = [
    {
        question: "What is the correct way to comment out a single line of code in JavaScript?",
        answer: ["A) // This is a comment", "B) /* This is a comment */", "C) <!-- This is a comment -->", "D) 'This is a comment'"],
        hiddenstate: ["true", "wrong", "wrong", "wrong"]
    },
    {
        question: "Which of the following is NOT a valid JavaScript variable name?",
        answer: ["A) myVariable", "B) 123Variable", "C) _variableName", "D) $variableName"],
        hiddenstate: ["wrong", "true", "wrong", "wrong"]
    },
    {
        question: "What method is used to add a new item to the end of an array in JavaScript?3",
        answer: ["A) append()", "B) push()", "C) add()", "D) insert()"],
        hiddenstate: ["wrong", "true", "wrong", "wrong"]
    },
    {
        question: "Which of the following JavaScript data types is not primitive?",
        answer: ["A) number", "B) string", "C) boolean", "D) object"],
        hiddenstate: ["wrong", "wrong", "wrong", "true"]
    },
    {
        question: "What is the purpose of the parseInt() function in JavaScript?",
        answer: ["A) To round a floating-point number to the nearest integer", "B) To convert a string to a floating-point number", "C) To convert a string to an integer", "D) To remove decimal places from a number"],
        hiddenstate: ["wrong", "wrong", "true", "wrong"]
    }
];



startButton.addEventListener("click", startGame);

function startGame() {
    startTime();
    setupQuestions();

}

function setupQuestions() {

    questions.textContent = test[questionNumber].question; 
    for (var i = 0; i < 4; i++) {
        lis[i].textContent = test[questionNumber].answer[i];
        lis[i].setAttribute("data-state", test[questionNumber].hiddenstate[i]);
    }
}

function startTime() {
    var timeLeft = 60;

    var timeInterval = setInterval(function () {
        timeLeft--;
        timer.textContent = timeLeft;
    }, 1000);
}

function displayAQ() {

}

function nextQuestion() {
    questionNumber++;
}

function isCorrect(event) {

}

function saveScore() {

}
