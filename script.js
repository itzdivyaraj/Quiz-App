document.addEventListener("DOMContentLoaded", () => {

    //Selecting all the buttons
    const startBtn = document.getElementById("start-btn");
    const nextBtn = document.getElementById("next-btn");
    const restartBtn = document.getElementById("restart-btn");

    //Selecting all the containers
    const questionContainer = document.getElementById("question-container");
    const questionText = document.getElementById("question-text");
    const choicesList = document.getElementById("choices-list");
    const resultContainer = document.getElementById("result-container");
    const scoreDisplay = document.getElementById("score");

  const questions = [//array of objects
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Mars", "Venus", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "Who wrote 'Hamlet'?",
      choices: [
        "Charles Dickens",
        "Jane Austen",
        "William Shakespeare",
        "Mark Twain",
      ],
      answer: "William Shakespeare",
    },
  ];
    
  let currentQnIdx = 0; //to keep a track of where we are 
  let score = 0; //updates score

  nextBtn.addEventListener('click', () => {
    currentQnIdx++
    if (currentQnIdx < questions.length) {
      showQuestion()
      choicesList.classList.remove('hidden')
    }
    else {
      showResult()
      choicesList.classList.remove('hidden')
    }
  })

  startBtn.addEventListener('click', startQuiz)

  function startQuiz() {
    startBtn.classList.add('hidden')
    resultContainer.classList.add('hidden')
    questionContainer.classList.remove('hidden')
    showQuestion()

  }

  function showQuestion() {
    nextBtn.classList.add('hidden')
    questionText.textContent = questions[currentQnIdx].question
    choicesList.innerHTML = "" //clear previous choices
    questions[currentQnIdx].choices.forEach(choice => {
      const li = document.createElement('li')
      li.textContent = choice
      li.addEventListener('click', () => selectAnswer(choice))
      choicesList.appendChild(li);
    })

  }

  function selectAnswer(choice) {
    const correctAnswer = questions[currentQnIdx].answer;
    if (choice === correctAnswer) {
      score++
      questionText.textContent = `Correct!!`
      choicesList.classList.add('hidden')
    }
    else {
      questionText.textContent = `Wrong!!`;
      choicesList.classList.add("hidden");
    }
    nextBtn.classList.remove('hidden')
  }

  function showResult() {
    questionContainer.classList.add('hidden')
    resultContainer.classList.remove('hidden')
    scoreDisplay.textContent = `${score} out of ${questions.length}`
  } 

  restartBtn.addEventListener('click', () => {
    score = 0
    currentQnIdx = 0
    startQuiz()
  })
})