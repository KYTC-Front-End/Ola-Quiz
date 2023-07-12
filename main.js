const startBtn = document.querySelector(".start-btn");
const leaderBoard = document.querySelector(".leader-board");
const enterName = document.querySelector(".enter-name");
const exitBtn = document.querySelector(".exit");
const heroSec = document.querySelector(".hero-sec");
const continueBtn = document.querySelector(".continue");
const questionContainer = document.querySelector(".question-container");
const quizSec = document.querySelector(".quiz-sec");
const nextBtn = document.querySelector(".next-button");
const nameInput = document.querySelector("#name-input");
const error = document.querySelector("#error-message");
const resultBox = document.querySelector(".result-box");
const tryAgainBtn = document.querySelector(".tryAgain-btn");
const goHomeBtn = document.querySelector(".goHome-btn");
const container = document.querySelector(".container");
const submitBtn = document.querySelector(".submit-button");
const heroImg = document.querySelector(".hero-image");
const leaderBoarBtn = document.querySelector(".leader-board");
const leaderAlert = document.querySelector(".leader-board-alert");
let questions = [
  {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "A. Hyper Text Markup Language",
    Options: [
      "A. Hyper Text Markup Language",
      "B. Hot Mail",
      "C. How to Make Lasagna",
      "D. Mark Language",
    ],
  },
  {
    numb: 2,
    question: "How many tags are in a regular element?",
    answer: "B. 2",
    Options: ["A. 3", "B. 2", "C. 4", "D. 1"],
  },
  {
    numb: 3,
    question:
      "What is the difference between an opening tag and a closing tag?",
    answer: "C. Closing tag has a / in front",
    Options: [
      "A. opening tag",
      "B. Opening tag has a / in front",
      "C. Closing tag has a / in front",
      "D. There is no difference",
    ],
  },
  {
    numb: 4,
    question: "< br  / > What type of tag is this?",
    answer: "A. Break tag",
    Options: [
      "A. Break tag",
      "B. Closing tag",
      "C. An opening tag",
      "D. A broken one",
    ],
  },
  {
    numb: 5,
    question: "< body > Is this an opening tag or a closing tag?",
    answer: "B. Opening",
    Options: ["A. The second page", "B. Opening", "C. Closing", "D. Tag"],
  },
  {
    numb: 6,
    question: "< / body > Is this an opening tag or a closing tag?",
    answer: "C. Closing",
    Options: ["A. The second page", "B. Opening", "C. Closing", "D. Tag"],
  },
  {
    numb: 7,
    question: "Where is the meta tag only found?",
    answer: "B. The home page",
    Options: [
      "A. The last page",
      "B. The home page",
      "C. The second page",
      "D. The style page",
    ],
  },
  {
    numb: 8,
    question:
      "What is always a welcome page, and explains the purpose or topic of the site?",
    answer: "B. Homepage",
    Options: ["A. Page 4", "B. Homepage", "C. Table of contents", "D. body"],
  },
  {
    numb: 9,
    question: "What is an element that does not have a closing tag called?",
    answer: "B. Empty element",
    Options: ["A. Tag", "B. Empty element", "C. Closed element", "D. Text"],
  },
  {
    numb: 10,
    question: "What should values always be enclosed in?",
    answer: "A. Quotation marks",
    Options: ["A. Quotation marks", "B. Commas", "C. Parenthesis", "D. Div"],
  },
];

startBtn.onclick = () => {
  heroSec.classList.add("active");
  enterName.classList.add("active");
};

exitBtn.onclick = () => {
  heroSec.classList.remove("active");
  enterName.classList.remove("active");
};
continueBtn.onclick = () => {
  if (nameInput.value === "") {
    error.textContent = "Username is required";
  } else {
    playerName = nameInput.value;
    quizSec.classList.add("active");
    heroSec.classList.remove("active");
    enterName.classList.remove("active");
    questionContainer.classList.add("active");
    showQuestions(0);
    questionCounter(1);
    score();
  }
};
goHomeBtn.onclick = () => {
  quizSec.classList.remove("active");
  nextBtn.classList.remove("active");
  resultBox.classList.remove("active");
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
  showQuestions(questionCount);
  questionCounter(questionNumb);
};
submitBtn.onclick = () => {
  /* {
        $('.loadingresult').css('display', 'grid');
    
        setTimeout(function()
        {
            $('.result_page').addClass('result_page_show');
    
        },1000)
    };*/
  heroSec.classList.remove("active");
  nextBtn.remove();
  heroImg.remove();
  resultBox.classList.add("active");
  showResult();
};

//get Q & Answers from array
let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

const answerList = document.querySelector(".answer-sec");
function showQuestions(index) {
  const questionText = document.querySelector(".question-header");
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
  let answerTag = ` <section class="answeres bounce-left"><span>${questions[index].Options[0]}</span></section>
    <section class="answeres bounce-left delay-100"><span>${questions[index].Options[1]}</span></section>
    <section class="answeres bounce-left delay-200"><span>${questions[index].Options[2]}</span></section>
    <section class="answeres bounce-left delay-300"><span>${questions[index].Options[3]}</span></section`;
  answerList.innerHTML = answerTag;
  const answeres = document.querySelectorAll(".answeres");
  for (let i = 0; i < answeres.length; i++) {
    answeres[i].setAttribute("onclick", "answerSelected(this)");
  }
}

//correct Answer
function answerSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = answerList.children.length;

  if (userAnswer == correctAnswer) {
    answer.classList.add("Correct");
    userScore += 1;
    score();
  } else {
    answer.classList.add("inCorrect");
  }
  //if user selected, disabled all option
  for (let i = 0; i < allOptions; i++) {
    answerList.children[i].classList.add("disabled");
  }
  nextBtn.classList.add("active");
}

//change Q
nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);
    //nextBtn.classList.remove('active');
  } else {
    submitBtn.style.display = "bloke";
    submitBtn.classList.add("active");
    showResult();
    heroImg.style.display = "none";
  }
};
//counter
function questionCounter(index) {
  const questionTotal = document.querySelector(".question-total");
  questionTotal.textContent = `${index} of ${questions.length} Questions`;
}
function score() {
  const scoreText = document.querySelector(".score-text");
  scoreText.textContent = `Score ${userScore} / ${questions.length}`;
}

function showResult() {
  resultBox.style.display = "block";
  quizSec.style.display = "none";
  let result = document.getElementsByClassName("score-text");
  result.textContent = `${
    "Your Score: " + userScore + " out of " + questions.length
  }`;
  const progressValue = document.querySelector(".Progress-value");
  progressValue.textContent = `${(userScore / questions.length) * 100}%`;
}
