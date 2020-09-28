// Start button is displaying default
var startButton = document.querySelector("#StartQuiz")

startButton.addEventListener("click", StartQuiz)

function StartQuiz() {
    var CodingQuizStart = document.querySelector("CodingQuizStart");
    document.getElementById("CodingQuizStart").style.display = "none";
    document.getElementById("Q1").style.display = "initial";
}
// Q1 displays to none and Q2 sets display to initial
var Q1B1 = document.querySelector("#Q1B1");
var Q1B2 = document.querySelector("#Q1B2");
var Q1B3 = document.querySelector("#Q1B3");
var Q1B4 = document.querySelector("#Q1B4");


Q1B1.addEventListener("click", Q1)
Q1B2.addEventListener("click", Q1)
Q1B3.addEventListener("click", Q1)
Q1B4.addEventListener("click", Q1)


function Q1() {
    var Que1 = document.querySelector("Q1");
    document.getElementById("Q1").style.display = "none";
    document.getElementById("Q2").style.display = "initial";
} // Q2 displays to none and Q3 sets display to initial