// Start button is displaying default
var startButton = document.querySelector("#StartQuiz")

startButton.addEventListener("click", StartQuiz)

function StartQuiz() {
    Countdown();
    document.getElementById("CodingQuizStart").style.display = "none";
    document.getElementById("Q1").style.display = "initial";
}

function Countdown() {
    // Set the date we're counting down to
    var countDownDate = 121; // new Date().getTime() + 75000 + 60000; // Rube Golberg

    // Update the count down every 1 second
    var x = setInterval(function() {

        // Get today's date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        countDownDate -= 1;
        var seconds = countDownDate; //Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the element with id="demo"
        document.getElementById("demo").innerHTML = seconds + "s ";

        // If the count down is finished, write some text
        if (countDownDate < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
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
}

function Q1b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
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
}

function Q2d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q2").style.display = "none";
    document.getElementById("Q3").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
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
}

function Q3b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
}

function Q3c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q3").style.display = "none";
    document.getElementById("Q4").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
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
}

function Q4d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q4").style.display = "none";
    document.getElementById("Q5").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
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
}

function Q5b() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
}

function Q5c() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("IncorrectAnswer").style.display = "none";
    document.getElementById("CorrectAnswer").style.display = "initial";
}

function Q5d() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q5").style.display = "none";
    document.getElementById("Quizdone").style.display = "initial";
    document.getElementById("CorrectAnswer").style.display = "none";
    document.getElementById("IncorrectAnswer").style.display = "initial";
}