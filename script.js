
// Commas are important to separate the elements
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
var messageElem = document.querySelector("#messageElem")
var nextQuestionBtn = document.querySelector("#nextQuestionBtn")

var quizStarted = false;

var countdown = setInterval(function(){
  if(quizStarted){
  document.querySelector("#timeLet").textContent = time
  time --
  }
  if (time === 0){
    endQuiz ();
  }
}, 1000);

var startFunction = function(){
  // Hiding the start button and H1
  document.querySelector("#header1").style.display = "none"
  var startBtn = document.querySelector("#startBtn")
  startBtn.style.visibility = "hidden";
  // Could be written as document.querySelector("#startBtn").style.visibility = "hidden"

  // Display questions one at a time. Run the nextQuestion function
  nextQuestion()

  quizStarted = true;
};

document.querySelector("#startBtn").addEventListener("click", startFunction)

var nextQuestion = function(){
  questionNumber ++;
  messageElem.textContent = "";
  nextQuestionBtn.style.visibility = "hidden";

  /* Grab a question from the questionArray
  Variables can be reassigned outside of the object. 
  Calling out the first question by adding .question */
  var questionString = questionArray[questionNumber].question
  
  // H3
  var newQuestion = document.createElement("h3")
  newQuestion.textContent = questionString;
  
  // Put in id = questionDiv
  questionDiv.appendChild(newQuestion);

  var A = questionArray[questionNumber].A;
  var B = questionArray[questionNumber].B;
  var C = questionArray[questionNumber].C;
  var D = questionArray[questionNumber].D;

  var buttonA = document.createElement("button")
  buttonA.textContent = choiceA;
  buttonA.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonA)

  var buttonB = document.createElement("button")
  buttonB.textContent = choiceB;
  buttonB.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonB)

  var buttonC = document.createElement("button")
  buttonC.textContent = choiceC;
  buttonC.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonC)

  var buttonD = document.createElement("button")
  buttonD.textContent = choiceD;
  buttonD.addEventListener("click", submitAnswer)
  choicesDiv.appendChild(buttonD)
};

var submitAnswer = function(answerChoice){
  if(answerChoice === questionArray[questionNumber].correctAnswer){ // Correct answer
  // Tildes (`) are great and can use the template literal
    messageElem.textContent = `${answerChoice} is correct!`
  } else {
    messageElem.textContent = `${answerChoice} is wrong!`
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