//const username = document.getElementById('username');
//const saveScoreBtn = document.getElementById('saveScoreBtn');
//const finalScore = document.getElementById('finalScore');
//const mostRecentScore = localStorage.getItem('mostRecentScore');
//const highScores = JSON.parse(localStorage.getItem('highScores')) || [];  // if JSON.parse(...) is undefined, it will return en empty array to work with

//const MAX_HIGH_SCORES = 5;

//finalScore.innerText = mostRecentScore;   // Displays the most recent score in the final score element

//username.addEventListener('keyup', () => {
//    saveScoreBtn.disabled = !username.value; 
//});     //  Enables or disables the 'Save' button based on whether the username field has a value
//        // If the input field has a value (username.value is not empty), the 'Save' button is enabled (disabled = false).

//saveHighScore = (e) => {    // Declares a function 'saveHighScore' that will be triggered when the form is submitted.
//    e.preventDefault();     // Just the procedure preventing the page from refreshing

//    const score = {                
//        score: mostRecentScore,    // Creates a 'score' object and assigns the most recent score to the 'score' property.
//        name: username.value,      // Assigns the value of the 'username' input field to the 'name' property of the 'score' object.
//    };
//    highScores.push(score);
//    highScores.sort((a, b) => b.score - a.score);  // sort built in function which helps to display higher score above 
//    highScores.splice(5);    // Trim the "highScores" array from 5th to below 

//    localStorage.setItem('highScores', JSON.stringify(highScores)); 
//    // Converts the 'highScores' array into a JSON string using JSON.stringify and stores it in the browser's localStorage under the key 'highScores'.
    
//    window.location.assign('/'); //redirect to the main page
//};