# Javascript-Quiz

## Technology Used

| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| HTML    | [https://developer.mozilla.org/en-US/docs/Web/HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | 
| CSS     | [https://developer.mozilla.org/en-US/docs/Web/CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)      |   
| Git | [https://git-scm.com/](https://git-scm.com/)     | 
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  |

## Description

Making a coding quiz about Javascript with API!

Deployed Site [https://blackswan1010.github.io/javascript-quiz/](https://blackswan1010.github.io/javascript-quiz/)

## Javscript API Examples

```js
// Declaring variables and assigning them to the ids from the html file
var timer = document.getElementById("timer");
var answers = document.getElementById("answers");
var questions = document.getElementById("question");
var correct = document.getElementById("correct");
var pointscore = document.getElementById("highscore");
var timeInterval;

// User input/event variables
var startButton = document.getElementById("startButton");
var userSelect = document.querySelector(".answerContainer");
var saveButton = document.getElementById("saveButton");
```
Here the variables are declared within the javscript file and then assigned by pulling the document elements/classes by id or class from the html file.


```js
// Displays the 'test' object with the properties 'question' and 'answer'
function setupQuestions() {
    questions.textContent = test[questionNumber].question;
    for (var i = 0; i < test[questionNumber].answer.length; i++) {
        lis[i].textContent = test[questionNumber].answer[i];
        lis[i].setAttribute("data-state", test[questionNumber].state[i]);
    }
}
```
Sets up the first question with its array of answers and data attributes by iterating with a for loop.


```js
// Starts the timer
function startTime() {
    // Gives 30 seconds to the user to answer question
    timeLeft = 30;
    // a time interval function that 
    timeInterval = setInterval(function () {
        // Updates the score with the time left over
        score = timeLeft;
        // Updates the time decrementing
        timeLeft--;
        // Checks how much time is left
        if (timeLeft > 1) {
            timer.textContent = timeLeft + " seconds remaining";
        }
        if (timeLeft === 1) {
            timer.textContent = timeLeft + " second remaining";
        }
        // If time reaches 0 or below then the timer display, user buttons, and alert text disappears and timer stops 
        if (timeLeft <= 0) {
            timer.textContent = "";
            questions.textContent = "GAME OVER!";
            questions.style = "font-size: 100px";
            userSelect.style = "display: none";
            correct.textContent = "";
            clearInterval(timeInterval);
        }

        // Updates every one second
    }, 1000);
}
```
This timer function updates the browser and tells the user how much time is left.


```js
// Saves the score and initials of the player
saveButton.addEventListener("click", function (event) {
    event.preventDefault();

    // Stringifies the user object input into a string value
    var name = JSON.stringify(document.getElementById("name").value);
    var highscore = score;

    // Setting the key-value pair of name and highscore into local storage
    localStorage.setItem("initials", name);
    localStorage.setItem("highscore", highscore);

    // Updates the score with initials
    renderScore();

});
```
This event listener function helps the user interact with the save button when the user clicks to save the score and initials in local storage.


## Learning Points

-Declaring variables and assigning them with the id or classes selected pulled from the html file
<br/>
-Using a timer function to help update the browser
<br/>
-Storing data into local storage for persistent information
<br/>
-Using data-attributes in classes/id to implement styles 
<br/>
-Using event listeners for the user to interact with the browser


## Author Info

#### Anthony Nguyen
```md
* [Github](https://github.com/Blackswan1010)
```

## Credits

Everyone in bootcamp class

## License

N/A