const startButton = document.getElementById("start-btn");
const containerTextElement = document.getElementById("container-text");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const scoreElement = document.getElementById("score");
const gameoverButton = document.getElementById("gameover-btn");
const score = document.querySelector(".current-score");
const counter = document.querySelector('.counter'); 

let shuffledQuestions,
	currentQuestionIndex,
	points = 0,
	currentCounter = 0;  

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
	currentQuestionIndex++;
	setNextQuestion();
});
gameoverButton.addEventListener("click", gradeScore);

function startGame() {
	startButton.classList.add("hide");
	containerTextElement.classList.add("hide");
	shuffledQuestions = questions.sort(() => Math.random() - 0.5);
	currentQuestionIndex = 0;
	questionContainerElement.classList.remove("hide");
	setNextQuestion();
}

function setNextQuestion() {
	resetState();
	showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
	questionElement.innerText = question.question;
	question.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerText = answer.text;
		button.classList.add("btn");
		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}

		questionContainerElement.classList.remove('pointer-events');
		button.addEventListener("click", selectAnswer);
		answerButtonsElement.appendChild(button);
	});
}

function resetState() {
	clearStatusClass(document.body);
	nextButton.classList.add("hide");
	while (answerButtonsElement.firstChild) {
		answerButtonsElement.removeChild(answerButtonsElement.firstChild);
	}
}

function selectAnswer(e) {
	const selectedButton = e.target;
	const correct = selectedButton.dataset.correct;

	if (correct) {
		points += 10;
		currentCounter++; 

		 
		questionContainerElement.classList.add('pointer-events');
		
		// for score 
		score.textContent = `Score: ${points}`; 

		// for score counter 
		counter.textContent = `Correct answers: ${currentCounter} of ${shuffledQuestions.length}`; 
	} else {
		questionContainerElement.classList.add('pointer-events');  
	}

	setStatusClass(document.body, correct);
	Array.from(answerButtonsElement.children).forEach((button) => {
		setStatusClass(button, button.dataset.correct);
	});
	if (shuffledQuestions.length > currentQuestionIndex + 1) {
		nextButton.classList.remove("hide");
	} else {
		gameoverButton.innerText = "Game-over";
		gameoverButton.classList.remove("hide");
	}
}

function setStatusClass(element, correct) {
	clearStatusClass(element);
	if (correct) {
		element.classList.add("correct");
	} else {
		element.classList.add("wrong");
	}
}

function clearStatusClass(element) {
	element.classList.remove("correct");
	element.classList.remove("wrong");
}

const questions = [
	{
		question: "What is the most commonly used letter in the alphabet?",
		answers: [
			{ text: "E", correct: true },
			{ text: "A", correct: true },
			{ text: "I", correct: true },
			{ text: "Z", correct: true },
		],
	},
	{
		question: "What is the color of lobsters blood?",
		answers: [
			{ text: "Colorless", correct: true },
			{ text: "Red", correct: true },
			{ text: "blue", correct: true },
			{ text: "orange", correct: true },
		],
	},
	{
		question: "85% of plant life can be found where?",
		answers: [
			{ text: "Land", correct: true },
			{ text: "Ocean", correct: true, score: 20 },
			{ text: "River", correct: true },
			{ text: "Space", correct: true },
		],
	},
	{
		question:
			"How many minutes does it take the average person to fall asleep?",
		answers: [
			{ text: "5", correct: true },
			{ text: "7", correct: true, score: 20 },
			{ text: "1", correct: true },
			{ text: "20", correct: true },
		],
	},

	{
		question: "Which month has the highest number of births?",
		answers: [
			{ text: "April", correct: true },
			{ text: "November", correct: true },
			{ text: "July", correct: true },
			{ text: "August", correct: true, score: 20 },
		],
	},
];

function gradeScore() {
	clearStatusClass(document.body);
	nextButton.classList.add("hide");
	questionContainerElement.classList.add("hide");
	scoreElement.classList.remove("hide");
}

