const questions = [
    { question: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is the capital of France?", options: ["London", "Paris", "Rome"], answer: "Paris" },
    { question: "Which language runs in a web browser?", options: ["Java", "Python", "JavaScript"], answer: "JavaScript" }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        document.getElementById("quiz").innerHTML = `<h2>Game Over!</h2>
        <h3>Your Score: ${score}/${questions.length}</h3>`;
        return;
    }

    let q = questions[currentQuestionIndex];
    document.getElementById("question").innerText = q.question;

    let optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = ""; 

    q.options.forEach(option => {
        let btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => checkAnswer(option, q.answer);
        optionsDiv.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    if (selected === correct) score++;
    currentQuestionIndex++;
    loadQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    loadQuestion();
}

loadQuestion();
