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


// Declaring variables and assigning them to the ids from the html file
var timer = document.getElementById("timer");
var answers = document.getElementById("answers");
var questions = document.getElementById("question");
var correct = document.getElementById("correct");
var score = document.getElementById("highscore");
var timeInterval;


var startButton = document.getElementById("startButton");
var userSelect = document.querySelector(".answerContainer");
var saveButton = document.getElementById("saveButton");


userSelect.style = "display: none";

var lis = answers.getElementsByTagName('li');

var questionNumber = 0;
var timeLeft = 0;

// Declared a variable array of objects
var test = [
    {
        question: "What is the correct way to comment out a single line of code in JavaScript?",
        answer: ["A) // This is a comment", "B) /* This is a comment */", "C) <!-- This is a comment -->", "D) 'This is a comment'"],
        state: ["true", "wrong", "wrong", "wrong"]
    },
    {
        question: "Which of the following is NOT a valid JavaScript variable name?",
        answer: ["A) myVariable", "B) 123Variable", "C) _variableName", "D) $variableName"],
        state: ["wrong", "true", "wrong", "wrong"]
    },
    {
        question: "What method is used to add a new item to the end of an array in JavaScript?3",
        answer: ["A) append()", "B) push()", "C) add()", "D) insert()"],
        state: ["wrong", "true", "wrong", "wrong"]
    },
    {
        question: "Which of the following JavaScript data types is not primitive?",
        answer: ["A) number", "B) string", "C) boolean", "D) object"],
        state: ["wrong", "wrong", "wrong", "true"]
    },
    {
        question: "What is the purpose of the parseInt() function in JavaScript?",
        answer: ["A) To round a floating-point number to the nearest integer", "B) To convert a string to a floating-point number", "C) To convert a string to an integer", "D) To remove decimal places from a number"],
        state: ["wrong", "wrong", "true", "wrong"]
    }
];

// 
function renderScore() {
    score.textContent = parse(localStorage.getItem("highscore")) + ", " + parse(localStorage.getItem("initials"));
}


// Displays the 'test' object with the properties 'question' and 'answer'
function setupQuestions() {
    questions.textContent = test[questionNumber].question;
    for (var i = 0; i < 4; i++) {
        lis[i].textContent = test[questionNumber].answer[i];
        lis[i].setAttribute("data-state", test[questionNumber].state[i]);
    }
}

// Starts the timer
function startTime() {
    timeLeft = 30;

    timeInterval = setInterval(function () {
        score = timeLeft;
        timeLeft--;
        if (timeLeft > 1) {
            timer.textContent = timeLeft + " seconds remaining";
        }
        if (timeLeft === 1) {
            timer.textContent = timeLeft + " second remaining";
        }
        if (timeLeft <= 0) {
            timer.textContent = "";
            questions.textContent = "GAME OVER!";
            questions.style = "font-size: 100px";
            userSelect.style = "display: none";
            correct.textContent = "";
            score = timeLeft;
            clearInterval(timeInterval);
        }


    }, 1000);
}

// Displays the next question in the array of test
function nextQuestion() {
    questionNumber++;
    if (test[questionNumber] !== undefined) {
        questions.textContent = test[questionNumber].question;
        for (var i = 0; i < test[questionNumber].answer.length; i++) {
            lis[i].textContent = test[questionNumber].answer[i];
            lis[i].setAttribute("data-state", test[questionNumber].state[i]);
        }
    } else {
        questions.textContent = "Congratulations, you finished!";
        score = timeLeft;
        userSelect.style = "display: none";
        correct.textContent = "";
        // console.log(score);
        clearInterval(timeInterval);
    }


}

// Starts the game
function startGame() {

    questionNumber = 0;
    userSelect.style = "display: block";
    questions.style = "font-size: auto";

    startTime();
    setupQuestions();
}


// Event trigger for the startButton to start the game
startButton.addEventListener("click", startGame);

// Event trigger for when the user selects the correct or wrong answer and goes to the next question
userSelect.addEventListener("click", function (event) {
    event.preventDefault();
    var element = event.target;

    if (element.matches(".selectButton")) {
        var questionState = element.getAttribute("data-state");

        if (questionState === "true") {
            correct.textContent = "Correct";
            nextQuestion();
        } else {
            correct.textContent = "Wrong!";
            timeLeft = timeLeft - 10;
            score = 0;
            nextQuestion();
        }
    }
});


// saves initials and score to an object
saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    var name = JSON.stringify(document.getElementById("name").value);
    var highscore = score;

    localStorage.setItem("initials", name);
    localStorage.setItem("highscore", highscore);

    var li = document.createElement("li");
    li.textContent = name + ", " + highscore;

    score.appendChild(li);

});
