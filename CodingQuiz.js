var startButton = document.querySelector("#StartQuiz")

startButton.addEventListener("click", StartQuiz)

function StartQuiz() {
    var CodingQuizStart = document.querySelector("CodingQuizStart");
    document.getElementById("CodingQuizStart").style.display = "none";
    document.getElementById("Q1").style.display = "initial";
}