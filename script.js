const questions = [
    {
        question: "Qual è la capitale d'Italia?",
        options: ["Roma", "Milano", "Napoli", "Torino"],
        answer: 0
    },
    {
        question: "Qual è il colore del cielo?",
        options: ["Blu", "Verde", "Rosso", "Giallo"],
        answer: 0
    },
    {
        question: "Chi ha scritto 'La Divina Commedia'?",
        options: ["Dante Alighieri", "Petrarca", "Boccaccio", "Manzoni"],
        answer: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('next');
const resultElement = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.classList.add('hidden');
    resultElement.classList.add('hidden');
    questionElement.classList.remove('hidden');
    optionsElement.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.textContent = option;
        button.classList.add('option');
        button.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(button);
    });
}

function selectOption(index) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = optionsElement.getElementsByClassName('option');

    // Rimuovi la classe 'selected' da tutte le opzioni
    for (let button of optionButtons) {
        button.classList.remove('selected');
    }

    // Aggiungi la classe 'selected' all'opzione selezionata
    optionButtons[index].classList.add('selected');

    if (index === currentQuestion.answer) {
        score++;
    }
    nextButton.classList.remove('hidden');
}

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionElement.classList.add('hidden');
    optionsElement.classList.add('hidden');
    nextButton.classList.add('hidden');
    resultElement.classList.remove('hidden');
    scoreElement.textContent = `${score} di ${questions.length}`;
}

restartButton.addEventListener('click', startQuiz);

// Avvia il quiz al caricamento della pagina
startQuiz();
