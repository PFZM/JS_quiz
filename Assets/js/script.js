// queryselectors
const readyStatement = document.querySelector("#readyStatement");
const questionsField = document.querySelector(".questionsField");
const questionStatement = document.querySelector("#question");
const disQuestions = document.querySelector("#displayQuestions");
const timerDiv = document.querySelector(".timer");
const timeLeft = document.querySelector("#timeLeft");
const fnQuizdiv = document.querySelector(".finishQuiz");
const personalScore = document.querySelector("#personalScore");
const initialsForm = document.querySelector("#initials-name");
const submitButton = document.querySelector("#submit-button");
const results = document.querySelector(".results");
const startButton = document.querySelector("#startButton");
const resultButton = document.querySelector("#resultsButton");
const resetButton = document.querySelector("#resetButton");
const displayResults = document.querySelector("#displayResults");

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

const question4 = {
  question:
    "Wich of the following function of String object combines the text of two strings and returns a new string?",
  choices: [
    {
      ans1: "add()",
      isTrue: false,
    },
    {
      ans2: "merge()",
      isTrue: false,
    },
    {
      ans3: "concat()",
      isTrue: true,
    },
    {
      ans4: "append",
      isTrue: false,
    },
  ],
};

// Declare variables
let timerCount;
let score = 0;
let displayScores;
const questions = [question1, question2, question3, question4];
let numOfQuestion = 0;

// event listeners
startButton.addEventListener("click", startQuiz);
submitButton.addEventListener("click", submitScore);
resultButton.addEventListener("click", showResults);
resetButton.addEventListener("click", resetResults);

// function to start the quiz
function startQuiz() {
  timerCount = 60;
  score = 0;
  startTimer();
  displayQuestions();
}

// function to start the timer once the user click the start button
function startTimer() {
  const timer = setInterval(function () {
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
  disQuestions.style.display = "block";

  //   display questions
  const disQuestion = questions[numOfQuestion];
  questionStatement.textContent = disQuestion.question;

  displayOfChoices(disQuestion);
}

// // display list choices  of possible answers
function displayOfChoices(disQuestion) {
  for (let i = 0; i < disQuestion.choices.length; i++) {
    const listChoices = disQuestion.choices[i];
    const listQuestions = listChoices[Object.keys(listChoices)[0]];
    const li = document.createElement("li");
    if (listChoices[Object.keys(listChoices)[1]]) {
      li.setAttribute("data-true", "yes");
    }
    li.textContent = listQuestions;

    disQuestions.appendChild(li);
  }
}
// check answer
disQuestions.addEventListener("click", function (event) {
  const element = event.target;
  if (element.matches("li") === true) {
    const selection = element.getAttribute("data-true");

    if (selection === "yes") {
      element.setAttribute("data-correct", "correct");
      element.textContent = " Correct!";
      score++;
    } else {
      element.setAttribute("data-correct", "wrong");
      element.textContent = " Wrong!";
      timerCount = timerCount - 5;
    }
  }

  // Set time out for 0.5 sec, so it will show if the answer is correct or wrong
  setTimeout(function () {
    numOfQuestion++;
    disQuestions.innerHTML = "";
    if (numOfQuestion < questions.length) {
      displayQuestions();
    } else {
      finishQuiz();
    }
  }, 500);
});

// function to display the form once the time is over or the user had answer all the questions
function finishQuiz() {
  questionsField.style.display = "none";
  timerDiv.style.display = "none";
  fnQuizdiv.style.display = "block";

  personalScore.textContent =
    "Thanks for taking this quiz!\n Your score is: " + score;
}

// function to store the score and initials of the user in local storage
function submitScore() {
  if (initialsForm.value === "") {
    return window.alert("Plese add your initials");
  }
  let listOfScores = JSON.parse(localStorage.getItem("Score")) || [];
  listOfScores.push({
    initials: initialsForm.value.trim(),
    finalScore: score,
  });
  localStorage.setItem("Score", JSON.stringify(listOfScores));
  window.alert("Thanks! Your score has been submitted");
}

// function to show the scores storaged in local storage
function showResults() {
  const highScores = JSON.parse(localStorage.getItem("Score")) || [];
  if (highScores === null) {
    window.alert("No scores submitted at this stage");
    return;
  }
  resultButton.disabled = true;
  for (let i = 0; i < highScores.length; i++) {
    console.log(highScores.length);
    const li = document.createElement("li");
    li.textContent =
      "Person: " +
      highScores[i]["initials"] +
      " / Score: " +
      highScores[i]["finalScore"];
    displayResults.appendChild(li);
  }
}

function resetResults() {
  displayResults.innerHTML = "";
  resultButton.disabled = false;
  window.localStorage.clear();
}
