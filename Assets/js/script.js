// queryselectors
var readyStatement = document.querySelector("#readyStatement");
var maintContent = document.querySelector(".mainContent");
var timeLeft = document.querySelector("#timeLeft");
var results = document.querySelector(".results");
var startButton = document.querySelector("#startButton");
var resultButton = document.querySelector("#resultsButton");

// Setting variables for questions
const question1 = {
  question: "Inside which HTML element do we put the JavaScript?",
  choices: [
    {
      ans1: "<js>",
      isTrue: false,
    },
    {
      ans2: "<javascript>",
      isTrue: false,
    },
    {
      ans3: "<script>",
      isTrue: true,
    },
    {
      ans4: "<scripting>",
      isTrue: false,
    },
  ],
};

const question2 = {
  question:
    "What is the correct syntax for referring to an external script called xxx.js?",
  choices: [
    {
      ans1: "<script src=”xxx.js>",
      isTrue: true,
    },
    {
      ans2: "<script name=”xxx.js>",
      isTrue: false,
    },
    {
      ans3: "<script href=”xxx.js>",
      isTrue: false,
    },
    {
      ans4: "Other",
      isTrue: false,
    },
  ],
};

const question3 = {
  question: "How does a FOR loop start?",
  choices: [
    {
      ans1: "For i= 1 to 5",
      isTrue: false,
    },
    {
      ans2: "For (i =0; i<5,i++)",
      isTrue: true,
    },
    {
      ans3: "For (I =0; i<=5)",
      isTrue: false,
    },
    {
      ans4: "For )I <= 5, i++",
      isTrue: false,
    },
  ],
};

var timerCount;
var score;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  timerCount = 60;
  score = 0;
  startTimer();
  displayQuestions();
}

function startTimer() {
  timer = setInterval(function () {
    timeLeft.textContent = timerCount;
    timerCount--;

    if (timerCount === 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function displayQuestions() {
  startButton.style.display = "none";
}

function finishQuiz() {
  return;
}
