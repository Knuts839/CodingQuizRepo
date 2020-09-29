// Start button is displaying default
var startButton = document.querySelector("#StartQuiz")

startButton.addEventListener("click", StartQuiz)

var countDownTime = 75 + 1;
var finalCountdown = 0;
var testComplete = false;

function timePenalty() {
    countDownTime -= 10;
}

function StartQuiz() {
    Countdown();
    document.getElementById("CodingQuizStart").style.display = "none";
    document.getElementById("Q1").style.display = "initial";
}

function Countdown() {
    // Set the number of seconds we're counting down from.
    // Adding one to timer so it does not look to the user that they are being short changed. Rube Golberg


    // Update the count down every 1 second
    var x = setInterval(function() {

        countDownTime -= 1;

        // Display the result in the element with id="OlTimer"
        document.getElementById("OlTimer").innerHTML = countDownTime + "s ";

        // If the count down is finished, we're done.
        if (countDownTime <= 0 || testComplete) {
            finalCountdown = countDownTime;
            clearInterval(x);
            document.getElementById("OlTimer").innerHTML = "You are done.";

            // Hide questions and show Quiz Done.
            document.getElementById("Q1").style.display = "none";
            document.getElementById("Q2").style.display = "none";
            document.getElementById("Q3").style.display = "none";
            document.getElementById("Q4").style.display = "none";
            document.getElementById("Q5").style.display = "none";
            document.getElementById("Quizdone").style.display = "initial";
            document.getElementById("Quizdone").innerHTML = "Your Final Score is: " + finalCountdown.toString();
        }
    }, 1000);

}

/////////////////////////////////////////////////////////////
// Q1 displays to none and Q2 sets display to initial
var Q1B1 = document.querySelector("#Q1B1");
var Q1B2 = document.querySelector("#Q1B2");
var Q1B3 = document.querySelector("#Q1B3");
var Q1B4 = document.querySelector("#Q1B4");


Q1B1.addEventListener("click", Q1a);
Q1B2.addEventListener("click", Q1b);
Q1B3.addEventListener("click", Q1c);
Q1B4.addEventListener("click", Q1d);


function Q1a() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q1b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q1c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "initial";
    document.getElementById("IncorrectAnswer").style.display = "none";
    document.getElementById("CorrectAnswer").style.display = "initial";
}

function Q1d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

/////////////////////////////////////////////////////
// Q2 displays to none and Q3 sets display to initial
var Q2B1 = document.querySelector("#Q2B1");
var Q2B2 = document.querySelector("#Q2B2");
var Q2B3 = document.querySelector("#Q2B3");
var Q2B4 = document.querySelector("#Q2B4");


Q2B1.addEventListener("click", Q2a);
Q2B2.addEventListener("click", Q2b);
Q2B3.addEventListener("click", Q2c);
Q2B4.addEventListener("click", Q2d);


function Q2a() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q2b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "initial";
    document.getElementById("IncorrectAnswer").style.display = "none";
    document.getElementById("CorrectAnswer").style.display = "initial";
}

function Q2c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q2d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

//////////////////////////////////////////////////////
// Q3 displays to none and Q4 sets display to initial
var Q3B1 = document.querySelector("#Q3B1");
var Q3B2 = document.querySelector("#Q3B2");
var Q3B3 = document.querySelector("#Q3B3");
var Q3B4 = document.querySelector("#Q3B4");


Q3B1.addEventListener("click", Q3a);
Q3B2.addEventListener("click", Q3b);
Q3B3.addEventListener("click", Q3c);
Q3B4.addEventListener("click", Q3d);


function Q3a() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q3b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q3c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q3d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "initial";
    document.getElementById("IncorrectAnswer").style.display = "none";
    document.getElementById("CorrectAnswer").style.display = "initial";
}

//////////////////////////////////////////////////////
// Q4 displays to none and Q5 sets display to initial
var Q4B1 = document.querySelector("#Q4B1");
var Q4B2 = document.querySelector("#Q4B2");
var Q4B3 = document.querySelector("#Q4B3");
var Q4B4 = document.querySelector("#Q4B4");


Q4B1.addEventListener("click", Q4a);
Q4B2.addEventListener("click", Q4b);
Q4B3.addEventListener("click", Q4c);
Q4B4.addEventListener("click", Q4d);


function Q4a() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q4b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "initial";
    document.getElementById("IncorrectAnswer").style.display = "none";
    document.getElementById("CorrectAnswer").style.display = "initial";
}

function Q4c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

function Q4d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
}

//////////////////////////////////////////////////////
// Q5 displays all done
var Q5B1 = document.querySelector("#Q5B1");
var Q5B2 = document.querySelector("#Q5B2");
var Q5B3 = document.querySelector("#Q5B3");
var Q5B4 = document.querySelector("#Q5B4");


Q5B1.addEventListener("click", Q5a);
Q5B2.addEventListener("click", Q5b);
Q5B3.addEventListener("click", Q5c);
Q5B4.addEventListener("click", Q5d);


function Q5a() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
    testComplete = true;
}

function Q5b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
    testComplete = true;
}

function Q5c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("IncorrectAnswer").style.display = "none";
    document.getElementById("CorrectAnswer").style.display = "initial";
    testComplete = true;
}

function Q5d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
    timePenalty();
    testComplete = true;
}