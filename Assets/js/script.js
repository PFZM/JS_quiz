// queryselectors
var readyStatement = document.querySelector("#readyStatement");
var maintContent = document.querySelector(".mainContent");
var questionsField = document.querySelector(".questionsField");
var questionStatement = document.querySelector("#question");
var disQuestions = document.querySelector("#displayQuestions");
var timeLeft = document.querySelector("#timeLeft");
var results = document.querySelector(".results");
var startButton = document.querySelector("#startButton");
var resultButton = document.querySelector("#resultsButton");

// Declare variables for questions
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

// Declare variables
var timerCount;
var score;
var questions = [question1, question2, question3];

function init() {}

// event listener to star the quiz
startButton.addEventListener("click", startQuiz);

function startQuiz() {
  timerCount = 60;
  score = 0;
  startTimer();
  displayQuestions();
}

function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timeLeft.textContent = timerCount;

    if (timerCount === 0) {
      clearInterval(timer);
      finishQuiz();
    }
  }, 1000);
}

function displayQuestions() {
  startButton.style.display = "none";
  console.log(questions);

  //   display question
  for (var i = 0; i < questions.length; i++) {
    var disQuestion = questions[i];
    console.log(disQuestion);
    questionStatement.textContent = disQuestion.question;
    console.log(disQuestion.choices);

    // display list of choices  of possible answers
    for (var i = 0; i < disQuestion.choices.length; i++) {
      console.log(disQuestion.choices.length);
      var listChoices = disQuestion.choices[i];
      console.log(listChoices);
      var listQuestions = listChoices[Object.keys(listChoices)[0]];
      console.log(listQuestions);
      var li = document.createElement("li");
      if (listChoices[Object.keys(listChoices)[1]]) {
        li.setAttribute("data-true", "yes");
      }
      li.textContent = listQuestions;

      disQuestions.appendChild(li);
    }
    checkAnswer();
  }
}

function checkAnswer() {
  disQuestions.addEventListener("click", function (event) {
    var element = event.target;
    if (element.matches("li") === true) {
      var selection = element.getAttribute("data-true");
      console.log(selection);
    }
    if (selection === "yes") {
      element.setAttribute("data-correct", "correct");
      element.textContent = " Correct!";
      correctAnswer();
    } else {
      element.setAttribute("data-correct", "wrong");
      element.textContent = " Wrong!";
    }
  });
}

function correctAnswer() {
  score++;
}

function finishQuiz() {
  return;
}

init();
