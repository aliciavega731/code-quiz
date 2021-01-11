// Commas are important to separate the elements in the array
var questionArray = [
  {
    question: "How many people are on Team Avatar?",
    answers: {
      A: "3",
      B: "4",
      C: "5",
      D: "6",
    },
    correctAnswer = "D",
  },
  {
    question: "Who is the firebender?",
    answers: {
      A: "Zuko",
      B: "Aang",
      C: "Sokka",
      D: "Katara",
    },
    correctAnswer = "A",
  },
  {
    question: "Which element does Aang struggle the most with?",
    answers: {
      A: "Air",
      B: "Earth",
      C: "Water",
      D: "Fire",
    },
    correctAnswer = "B",
  },
  {
    question: "Who is Katara's brother?",
    answers: {
      A: "Sokka",
      B: "Jet",
      C: "Zuko",
      D: "Aang",
    },
    correctAnswer = "A",
  },
];

// Declaring variables globally
var questionNumber = -1;
var countdown = 60;
var questionDiv = document.querySelector("#questionDiv")
var choicesDiv = document.querySelector("#choicesDiv")
var messageElement = document.querySelector("#messageElement")
var nextQuestionBtn = document.querySelector("#nextQuestionBtn")
var quizStart = false;

// Timer function - Makes the coundown start
var countdown = setInterval(function(){
  if(quizStart){
  document.querySelector("#timeLeft").textContent = time
  time --
  } 
  if(time === 0){
    endQuiz ();
  }
}, 1000);

// Function that gets everything started
var startFunction = function(){
  document.querySelector("#header1").style.display = "none"
  var startQuiz = document.querySelector("#startQuiz")
  startQuiz.style.visibility = "hidden";
  // Could be written as document.querySelector("#startQuiz").style.visibility = "hidden"
  nextQuestion()
  quizStart = true;
};

document.querySelector("#startQuiz").addEventListener("click", startFunction)

// Move on to the next question
var nextQuestion = function(){
  questionNumber ++;
  messageElement.textContent = "";
  nextQuestionBtn.style.visibility = "hidden";

  /* Grab a question from the questionArray
  Variables can be reassigned outside of the object. 
  Calling out the first question by adding .question */
  var questionString = questionArray[questionNumber].question
  
  var newQuestion = document.createElement("h3")
  newQuestion.textContent = questionString;
  
  // Put in id = questionDiv
  questionDiv.appendChild(newQuestion);

  var A = questionArray[questionNumber].A;
  var B = questionArray[questionNumber].B;
  var C = questionArray[questionNumber].C;
  var D = questionArray[questionNumber].D;

  var buttonA = document.createElement("button")
  buttonA.textContent = A;
  buttonA.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonA)

  var buttonB = document.createElement("button")
  buttonB.textContent = B;
  buttonB.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonB)

  var buttonC = document.createElement("button")
  buttonC.textContent = C;
  buttonC.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonC)

  var buttonD = document.createElement("button")
  buttonD.textContent = D;
  buttonD.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonD)
};

var submitAnswer = function(answerChoice){
  if(answerChoice === questionArray[questionNumber].correctAnswer){ // Correct answer
  // Tildes (`) are great and can use the template literal
    messageElement.textContent = `${answerChoice} is correct!`
  } else {
    messageElement.textContent = `${answerChoice} is wrong!`
  }

  // Clear out question and choices
  questionDiv.innerHTML = ""
  choicesDiv.innerHTML = ""

  if(questionNumber < questionArray.length - 1) {
    nextQuestionBtn.style.visibility = "visible";
  } else {
    endQuiz()
  }
}

var endQuiz = function(){
  clearInterval(countdown)
}

nextQuestionBtn.addEventListener("click", nextQuestion)
nextQuestionBtn.style.visibility = "hidden";