/*
let submitGuess = document.getElementById("submitGuess"); 
let correctNum = Math.floor(Math.random() * 100) + 1;
function guessGame() {
    let result = document.getElementById("result");  
    let number = document.getElementById("numberGuess").value;
    
    console.log(correctNum);
    let submitGuess = document.getElementById("submitGuess"); 
    if (number == correctNum){
        //numberGuess();
       result.innerHTML = "You guessed the correct number!";
    } if (number < correctNum){
       // numberGuess();
        result.innerHTML = "Your guess was too low!";
    }
    if (number > correctNum){
       // numberGuess();
        result.innerHTML = "Your guess was too high!";
    }
};
*/

let submitGuess = document.getElementById("submitGuess"); 
let correctNum = Math.floor(Math.random() * 100) + 1;
let gameOver =document.getElementById("gameOver");
let guessCount = 1;
function guessGame() {
    let result = document.getElementById("result");  
    let number = document.getElementById("numberGuess").value;
    
    console.log(correctNum);
    let submitGuess = document.getElementById("submitGuess"); 
    if (number == correctNum){
        
       result.innerHTML = "You guessed the correct number!";
    } else if(guessCount === 3){
        gameOver.innerHTML = `You've used up all your guesses! The correct number was ${correctNum}`;
    } if (number < correctNum){
        result.innerHTML = "Your guess was too low!";
    } if (number > correctNum) {
        result.innerHTML = "Your Guess was too high!";
    }
    guessCount++
}
     
    
       




