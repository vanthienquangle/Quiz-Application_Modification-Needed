const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const progressText = document.getElementById('progressText');
const scoreText = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarFull');
const loader = document.getElementById('loader');
const game = document.getElementById('game');

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];
let questions = [];

fetch(
    'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple'           // API data source of questions
)
    .then((res) => {
        //
        //
        //
        //
        //
    })
    .then((loadedQuestions) => {          // declaring a new variable within .then()

        //
        //
        //
        //
        //
        //
        startGame();
    })
    .catch((err) => {         // if errors happen, it will be shown in our console
        console.error(err);
    });

// //CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3; // limit the questions down to 3

startGame = () => {
    //
    //
    //
    //    
};

getNewQuestion = () => {
    //
    //
    //
    //
    //
};



// handling events depending on different choice from users
choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        //
        //
        //
        //
        //
        //
        //
        //
    });
});

incrementScore = (num) => {
    score += num;
    scoreText.innerText = score;
};