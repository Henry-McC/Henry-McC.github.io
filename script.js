import { masterList } from "./words.js";
import { WORDS } from "./words.js";
import { shuffled } from "./words.js";
import { resetMe } from "./words.js";
import { nextRound } from "./words.js";
import { answers } from "./words.js";


const NUMBER_OF_GUESSES = 1;
let guessesRemaining = 0;
let currentGuess = [];
let nextLetter = 0;
let maxLength = 6;
let rightGuessString = shuffled.word;
let inProgress = false;
let roundOver = false;
let highScore = 0
let displayWord = (shuffled.word).shuffle()
let tempWord = displayWord
let wordLength = 6
let otherWord = ''
let round = {
  number: 1,
};

export { round }; 

if (localStorage.getItem('highScore') !== null) {
    document.getElementById('high-score').innerHTML = `High Score: ${localStorage.getItem('highScore')`;
}

//localStorage.getItem('highScore')


String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
} 


document.getElementById("second-button").disabled = true;


//let rightGuessString = WORDS[Math.floor(Math.random() * WORDS.length)]
console.log(rightGuessString)

document.getElementById("buttons").addEventListener("click", (e) => {
    const target = e.target
    
    if (target.classList.contains("start-button")) {
      guessesRemaining = 1;
      inProgress = true
      insertDisplayWord(displayWord)
      document.getElementById("shuffled-word").innerHTML = `Good Luck!`;
      //document.getElementById("shuffled-word").style.display = "none";
      document.getElementById("round").innerHTML = `Round: ${round.number}/5`;
      document.getElementById("second-button").disabled = false;
      document.getElementById("first-button").disabled = true;
      startTimer();
      
      //document.getElementById("fix-bug").innerHTML = answers.list[(round.number - 1)]
      return 
    }
    if (target.classList.contains("reset-button")) {
      round.number = 1
      resetMe()
      multiplier = 2
      deleteAll()
      resetBoard()
      resetDisplayWord()
      resetColor()
      userScore = 0
      roundOver = false
      guessesRemaining = 0
      maxLength = 6
      resetTimer();
      document.getElementById("first-button").disabled = false;
      document.getElementById("round").innerHTML = `Round: ${round.number}/5`;
      document.getElementById("shuffled-word").innerHTML = `Ready?`;
      document.getElementById("score").innerHTML = `Score: ${userScore}`;
      document.getElementById("game-title").innerHTML = 'Petal';
      document.getElementById("total-score").innerHTML = ``
      return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

})


function initBoard() {
    let board = document.getElementById("game-board");

    for (let i = 0; i < NUMBER_OF_GUESSES; i++) {
        let row = document.createElement("div")
        row.className = "letter-row"
        row.id = "roww"
        
        for (let j = 0; j < 6; j++) {
            let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }

        board.appendChild(row)
    }
}

initBoard()


// BELOW IS TESTING FOR LONGER WORDS
async function initBoardTwo() {
  let board = document.getElementById("game-board");
    for (let i = 0; i < 1; i++) {
        let trial = document.getElementById("roww")
        trial.remove()
        let row = document.createElement("div")
        row.className = "letter-row"
        row.id = "roww"
 
        for (let j = 0; j < 7; j++) {
           let box = document.createElement("div")
            box.className = "letter-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

async function initBoardThree() {
let board = document.getElementById("game-board");
    for (let i = 0; i < 1; i++) {
      let trial = document.getElementById("roww")
      trial.remove()
      let row = document.createElement("div")
      row.className = "letter-row"
      row.id = "roww"

       for (let j = 0; j < 8; j++) {
        let box = document.createElement("div")
        box.className = "letter-box"
        row.appendChild(box)
        }
        board.appendChild(row)
    }
}

async function resetBoard() {
let board = document.getElementById("game-board");
    for (let i = 0; i < 1; i++) {
      let trial = document.getElementById("roww")
      trial.remove()
      let row = document.createElement("div")
      row.className = "letter-row"
      row.id = "roww"

       for (let j = 0; j < 6; j++) {
        let box = document.createElement("div")
        box.className = "letter-box"
        row.appendChild(box)
        }
        board.appendChild(row)
    }
}
// ABOVE IS TESTING FOR LONGER WORDS

// BELOW IS TESTING FOR DYNAMIC LETTER COLOR UPDATES

function initColorBoard() {
  wordLength = displayWord.length
  let board = document.getElementById("display-board");
    for (let i = 0; i < 1; i++) {
        let row = document.createElement("div")
        row.className = "display-row"
        row.id = "disp-row"
 
        for (let j = 0; j < 8; j++) {
           let box = document.createElement("div")
            box.className = "display-box"
            row.appendChild(box)
        }
        board.appendChild(row)
    }
}

initColorBoard()

async function insertDisplayWord (displayWord) {
    displayWord = displayWord.toLowerCase()
    let row = document.getElementsByClassName("display-row")[0]
    for (let j = 0; j < 8; j++) {
    let box = row.children[j]
    box.textContent = ''
    box.textContent = displayWord[j]
  }}

async function resetDisplayWord() {
   displayWord = (shuffled.word).shuffle()
  let row = document.getElementsByClassName("display-row")[0]
    for (let j = 0; j < 8; j++) {
    let box = row.children[j]
    box.textContent = ''
  }}
         


// ABOVE IS TESTING FOR DYNAMIC LETTER COLOR UPDATES

// Below is the code for User Score

let userScore = 0
document.getElementById("score").innerHTML = `Score: ${userScore}`;

// fakeWord Variable
var fakeWord = false;

// Below is the keyboard input code

document.addEventListener("keyup", (e) => {

    if (guessesRemaining === 0) {
      let pressedButton = String(e.key)
      if ((e.code === "Space" || pressedButton === "Next Round") && roundOver === true) {
       round.number += 1;
       if (round.number === 6) {
         userScore = (userScore * multiplier).toFixed(0);
         hScore()
         endGame()
       }
       nextRound();
       deleteAll();
      // document.getElementById("shuffled-word").innerHTML = `${displayWord}`;
       if (round.number < 6) {
        guessesRemaining = 1;
        displayWord = (shuffled.word).shuffle()
        resetColor()
        insertDisplayWord(displayWord)
       document.getElementById("round").innerHTML = `Round: ${round.number}/5`;
       addTime();
       startTimer();
        if (round.number === 3 || round.number === 4) {
          maxLength = 7; 
          initBoardTwo()  
           } 
         if (round.number === 5) {
          maxLength = 8 
          initBoardThree()
           }
       }
       roundOver = false;
       return
      }
     return
    }

    let pressedKey = String(e.key)
    if (pressedKey === "Backspace" && fakeWord === true) {
      deleteAll()
      fakeWord = false
      return
    } 
    if (pressedKey === "Backspace" && nextLetter !== 0) {
        deleteLetter()
        return
    }

    if (pressedKey === "Enter") {
        checkGuess()
        return
    }
  
    let found = pressedKey.match(/[a-z]/gi)
    if (!found || found.length > 1) {
        return
    } else {
        insertLetter(pressedKey)
    }
})

function insertLetter (pressedKey) {
    if (nextLetter === maxLength) {
        return
    }
    pressedKey = pressedKey.toLowerCase()

    let row = document.getElementsByClassName("letter-row")[1 - guessesRemaining]
    let box = row.children[nextLetter]
    animateCSS(box, "pulse")
    box.textContent = pressedKey
    box.classList.add("filled-box")
    currentGuess.push(pressedKey)
    nextLetter += 1
    if (tempWord.includes(pressedKey)) {
      var number = pressedKey
      var letter = tempWord.indexOf(number)
      let row = document.getElementsByClassName("display-row")[1 - guessesRemaining]
      let box = row.children[letter]
      //let letterColor = 'red'
      //box.style.color = letterColor
      if (!box.classList.contains("colored-letter")) {
      box.classList.add("colored-letter")
      }
      tempWord = tempWord.replace(pressedKey, ' ');
      //otherWord += `${pressedKey}`
    }
}

function deleteLetter () {
    let row = document.getElementsByClassName("letter-row")[1 - guessesRemaining]
    let box = row.children[nextLetter - 1]
    let deLetter = box.textContent
    box.textContent = ""
    box.classList.remove("filled-box")
    currentGuess.pop()
    nextLetter -= 1
    if (displayWord.includes(deLetter)) {
     var number = deLetter
     var letter = displayWord.indexOf(number)
      let row = document.getElementsByClassName("display-row")[1 - guessesRemaining]
      for (let i = 0; i < 8; i++) {
      
      if (displayWord[i] === deLetter && tempWord[i] === ' ') {
        let box = row.children[i]
     // document.getElementById("gray-test").innerHTML = displayWord[i]
       tempWord = tempWord.replaceAt(i, deLetter)
       box.classList.remove("colored-letter")
       return
      }
    }

//(displayWord[i] = deLetter && tempWord[i] === ' ')
/*
 for (let j = 0; j < 8; j++) {
    if (displayWord[j] = deLetter && tempWord[j] === ' ') {
      var number = deLetter
      var letter = displayWord.indexOf(number)
       tempWord = tempWord.replaceAt(j, deLetter)
      }
    }
*/


  }
}



function deleteAll () {
    let row = document.getElementsByClassName("letter-row")[0]
  //  let box = row.children[nextLetter - 1]
    for (let i = 0; i < row.children.length; i++) {
      row.children[i].textContent = "" 
      row.children[i].classList.remove("filled-box")
      }
        for (let i = 0; i < maxLength; i++) {
        let letterColor = 'black'
        let box = row.children[i]
        let letter = currentGuess[i]
        box.style.color = letterColor
    }  
    resetColor()
    currentGuess = []
    nextLetter = 0
}



function checkGuess () {
    let row = document.getElementsByClassName("letter-row")[1 - guessesRemaining]
    let guessString = ''
    let rightGuess = Array.from(rightGuessString)

    for (const val of currentGuess) {
        guessString += val
    }

    if (guessString.length < 4) {
        toastr.error("Not enough letters!")
        return
    }

    for (let i = 0; i < maxLength; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]

      if (!masterList[`${shuffled.word}`].includes(guessString)) {
            letterColor = 'red'
        }
          box.style.color = letterColor
    } 

    if (!masterList[`${shuffled.word}`].includes(guessString)) {
      //  letterColor = 'red'
        toastr.error("Word not in list!")
        fakeWord = true
    }
 
// The comment below colors the box green
   /* for (let i = 0; i < 6; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        
        let letterPosition = rightGuess.indexOf(currentGuess[i])
        // is letter in the correct guess
       if (currentGuess[i] === rightGuess[i]) {
            letterColor = 'green'
        } 
        
        let delay = 250 * i
        setTimeout(()=> {
            //shade box
            box.style.backgroundColor = letterColor
            shadeKeyBoard(letter, letterColor)
        }, delay)
    } */

//guessString === rightGuessString
    if (masterList[`${shuffled.word}`].includes(guessString)) {

   for (let i = 0; i < maxLength; i++) {
        let letterColor = ''
        let box = row.children[i]
        let letter = currentGuess[i]
        letterColor = 'green'
        box.style.color = letterColor
        animateCSS(row, "pulse")
    }


        toastr.success("Nice One!")
        guessesRemaining = 0
        pauseTimer();
        userScore = (userScore + guessString.length * 100)
        document.getElementById("score").innerHTML = `Score: ${userScore}`;
        roundOver = true;
        return
    }
}



document.getElementById("keyboard-cont").addEventListener("click", (e) => {
    const target = e.target
    
    if (!target.classList.contains("keyboard-button")) {
        return
    }
    let key = target.textContent

    if (key === "Del") {
        key = "Backspace"
    } 

    document.dispatchEvent(new KeyboardEvent("keyup", {'key': key}))
})

const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    // const node = document.querySelector(element);
    const node = element
    node.style.setProperty('--animate-duration', '0.3s');
    
    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, {once: true});
});

 function endGame() {
    document.getElementById("game-title").innerHTML = 'Game over!'
    guessesRemaining = 0
    document.getElementById("total-score").innerHTML = `Nice! Your score was ${userScore}!`;   
    //deleteAll()
}

 function endGame2() {
    document.getElementById("game-title").innerHTML = 'Game over!'
    guessesRemaining = 0
    document.getElementById("total-score").innerHTML = 'So Close! Try Again!';   
    //deleteAll()
}

// Timer Below
let timerRunning = false;
let date = 10;
let multiplier = 2;
setInterval(myMultiplier, 52);
setInterval(myTimer, 1000);

async function myTimer() {
if(date >= 0 && timerRunning === true) {
  document.getElementById("countdown").innerHTML = `${date}`;  
  date -= 1;
} if(date === -1) {
  timerRunning = false;
  document.getElementById("countdown").innerHTML = `Out of time!`;
  endGame2();  
}}

async function myMultiplier() {
if(date >= 0 && timerRunning === true) {
  //document.getElementById("multiplier").innerHTML = `${multiplier}`;  
  multiplier -= .001;
} if(multiplier === -1) {
  timerRunning = false;
  //document.getElementById("multiplier").innerHTML = `Out of time!`;
  endGame2();  
}}

async function startTimer() {
  timerRunning = true;
}

async function pauseTimer() {
  timerRunning = false;
}

async function addTime() {
  date += 10
  }

async function resetTimer() {
  timerRunning = false;
  date = 10;
  document.getElementById("countdown").innerHTML = `${date}`; 
}

async function hScore() {
  if (`${userScore}` > `${highScore}`) {
    highScore = userScore
    localStorage.setItem('highScore', highScore)
  }
  document.getElementById("high-score").innerHTML = `High Score: ${highScore}`;
}

async function resetColor() {
    let row = document.getElementsByClassName("display-row")[0]  
    for (let j = 0; j < row.children.length; j++) {
      let box = row.children[j]
      box.classList.remove("colored-letter")
      }
    tempWord = displayWord
}

document.getElementById("how-to-play").addEventListener("click", howToPlay);
document.getElementById("nav-home").addEventListener("click", navHome);



      //   window.location.href="http://programminghead.com";  

async function navHome() {
  window.location.href="/index.html"
}

async function howToPlay() {
  var instructions = document.createElement("div")
  let boxDiv = document.getElementById("how-to")
    boxDiv.appendChild(instructions);
    instructions.className = "instructions"
    instructions.id = "instruction-box"
  var escape = document.createElement("div");
    instructions.appendChild(escape);
    escape.id = "escape-button"
    escape.innerHTML = "X"
document.getElementById("escape-button").addEventListener("click", exOut);

var title = document.createElement('h2');
  title.innerHTML = 'How To Play:';
  instructions.appendChild(title);
var p = document.createElement('p');
  p.innerHTML = 'Write the longest word you can think of within the time limit. The longer the word, the higher the score!';
  instructions.appendChild(p);
var l = document.createElement('p');
  l.innerHTML = "The faster you are, the more time you will have for the next round!";
  instructions.appendChild(l);
var m = document.createElement('p');
  m.innerHTML = "Careful, the words will get longer so make sure you save up your time!";
  instructions.appendChild(m);
  animateCSS(instructions, "fadeIn")
}

async function exOut() {
  let instructions = document.getElementById("instruction-box")
  animateCSS(instructions, "fadeOut")
  instructions.remove();
}

window.addEventListener('keydown', (e) => {  
  if (e.keyCode === 32 && e.target === document.body) {  
    e.preventDefault();  
  }  
});




//window.localStorage.setItem('highScore', JSON.stringify(highScore));

