function handlechange(){
    console.log("clicky");
      localStorage.setItem(pageKey, 'Finished');
 }
 
 //  create a unique key for this page
   const pageKey = 3;
 
   // Check if the status is already stored in localStorage for this page
   const status = localStorage.getItem(pageKey) || 'Not Started';
 
   // Update the status to 'In Progress' when the page is loaded
   localStorage.setItem(pageKey, 'In Progress');
    
     // console.log(`Page Status for ${pageKey}: ${status}`);


     var ClearHistory=document.querySelector('#History');
     //clear history btn
     ClearHistory.addEventListener('click',function () {
         localStorage.clear();
         location.reload();
       })



//game for page
//arrays of correct word and hints
var words = [
    { word: "write", hint: "A type of html sink." },
    { word: "reflected", hint: "Type of attack delivered to a victim through routes or other interactions with malicious sites" },
    { word: "cookies", hint: "Information on a user to display selected settings and/or targeted content" },
    { word: "alert", hint: "A method to display information to the user" },
    { word: "safescript", hint: "Code that is safe for browsers to execute." }
];
//randomly display a word at start and reset values
var selectedWord = words[Math.floor(Math.random() * words.length)];
var guessedLetters = [];
var maxIncorrectGuesses = 5;
var incorrectGuesses = 0;
//fucntion to display word as _ or correct letter in place
function displayWord() {
    var display = "";
    for (var i = 0; i < selectedWord.word.length; i++) {
        if (guessedLetters.indexOf(selectedWord.word[i]) !== -1) {
            display += selectedWord.word[i];
        } else {
            display += "_";
        }
        if (i < selectedWord.word.length - 1) {
            display += " ";
        }
    }
    document.getElementById("word").innerHTML = display;
    return display;
}
//function to check to see if letter guessed is in the word
function checkGuess() {
    var guess = document.getElementById("inputBox").value.toLowerCase();

    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
        document.getElementById("message").innerHTML = "Please enter a valid single letter.";
        return;
    }

    if (guessedLetters.indexOf(guess) !== -1) {
        document.getElementById("message").innerHTML = "You already guessed that letter.";
        return;
    }

    guessedLetters.push(guess);

    if (selectedWord.word.includes(guess)) {
        document.getElementById("message").innerHTML = "Good guess!";
    } else {
        document.getElementById("message").innerHTML = "Incorrect guess. Try again!";
        incorrectGuesses++;
    }

    document.getElementById("guessedLetters").innerHTML = "Letters Guessed: " + guessedLetters.join(", ");

    var wordDisplay = displayWord();

    if (!wordDisplay.includes("_")) {
        document.getElementById("message").innerHTML = "Congratulations! You guessed the word!";
        document.getElementById("inputBox").setAttribute("disabled", "true");
        document.getElementById("subbtn").setAttribute("disabled", "true");
    }

    if (incorrectGuesses >= maxIncorrectGuesses) {
        document.getElementById("message").innerHTML = "Sorry, you've run out of guesses. The correct word was '" + selectedWord.word + "'.";
        document.getElementById("inputBox").setAttribute("disabled", "true");
        document.getElementById("subbtn").setAttribute("disabled", "true");
    } else if (incorrectGuesses === maxIncorrectGuesses - 1) {
        document.getElementById("message").innerHTML = "Warning! This is your last guess.";
    }
    
    document.getElementById("hint").innerHTML = "Hint: " + selectedWord.hint;
}
//reset game function after game complete or lossed 
function resetGame() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    incorrectGuesses = 0;

    document.getElementById("word").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    document.getElementById("guessedLetters").innerHTML = "";
    document.getElementById("hint").innerHTML = "";
    document.getElementById("inputBox").value = "";
    document.getElementById("subbtn").removeAttribute('disabled');
    document.getElementById("inputBox").removeAttribute("disabled");
    displayWord();
}

displayWord();