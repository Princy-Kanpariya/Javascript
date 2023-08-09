// ===================== questions =============== 
var questions = [ // array of object for multiple questions
    {
        question: "Utah Mountains, which were seen in the news for Watermelon Snow, is situated in which country?", //questions
        choices: ["Russia", "Ukraine", "USA", "Indonesia"], // choices for answer
        answer: 2 //answers are shown in index
    },
    {
        question: "Which country announced the ‘In-country’ renewable H-1B visas for India?",
        choices: ["Australia", "USA", "UK", "Germany"],
        answer: 1
    },
    {
        question: "A ‘New Replenishment Mechanism for Flexible Funding’ has been proposed for which organisation?",
        choices: ["WHO", "NSIL", "DRDO", "NITI Aayog"],
        answer: 0
    },
    {
        question: "‘Gateway to the Underworld’ is an artefact belonging to which country?",
        choices: ["India", "Sri Lanka", "Mexico", "Australia"],
        answer: 2
    },
    {
        question: "‘Global Polio Eradication Initiative (GPEI)’ was founded in which year?",
        choices: ["1988", "1998", "2008", "2018"],
        answer: 0
    },
    {
        question: "Which country is known as the 'Land of the Rising Sun'?",
        choices: ["China", "Japan", "Thailand", "India"],
        answer: 1
    },
    {
        question: "Strawberry Moon is the full moon of which month?",
        choices: ["June", "July", "August", "September"],
        answer: 0
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
        answer: 1
    },
    {
        question: "What is the outlay of ‘Exploration of Coal and Lignite Scheme’ from 2021 to 2025?",
        choices: ["Rs 298 crore", "Rs 798 crore", "Rs 2980 crore", "Rs 7980 crore"],
        answer: 2
    },
    {
        question: "Which institution successfully tested the ‘Agni Prime- New Gen Ballistic Missile?",
        choices: ["BEL", "HAL", "ISRO", "DRDO"],
        answer: 3
    }
];

var score = 0; // score variable
var currentQuestion = 0; // currentquestion variable

function displayQuestion() { // to show the question and options
    var questionElement = document.getElementById("question"); // html element to show question
    var choicesElement = document.getElementById("choices"); // html element to show options

    // Display the current question
    questionElement.textContent = questions[currentQuestion].question;

    // Clear the choices container
    choicesElement.innerHTML = "";

    // Iterate over the choices and create buttons for each choice
    for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
        var choice = document.createElement("button");
        choice.textContent = questions[currentQuestion].choices[i];
        choice.setAttribute("onclick", "selectAnswer(" + i + ")");
        choicesElement.appendChild(choice);
    }
}

function selectAnswer(choice) {
    // Check if the selected choice is correct and update the score
    if (choice === questions[currentQuestion].answer) {
        score++;
    }

    // Store the user's answer in local storage
    localStorage.setItem("answer" + currentQuestion, choice);

    
    // Move to the next question or display the result if it's the last question
    currentQuestion++;
    if (currentQuestion === questions.length) {
        displayResult();
    } else {
        displayQuestion();
    }
}

function displayResult() {
    var container = document.querySelector(".container");
    container.innerHTML = "<h1>Test App</h1><div id='score'>Your score: " + score + "/" + questions.length + "</div>";
}

function checkAnswer() {
    var selectedAnswer = document.querySelector("input[name='choice']:checked");
    if (selectedAnswer) {
        var choiceIndex = parseInt(selectedAnswer.value);
        selectAnswer(choiceIndex);
    }
}

// Initial display of the first question
displayQuestion();


// Store the questions in local storage
localStorage.setItem("questions", JSON.stringify(questions));

