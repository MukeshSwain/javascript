# Guess game project 

## HTML code : guess.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="stylesheet" href="guess.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Guess the number</title>
</head>
<body>
    <h1>Number Guessing GAme </h1>
    <div class="container">
        <div class="instruct">
            <p>Try and guess a random number between 1 and 100.</p>
            <p>You have 10 attempts to guess the right number.</p>
        </div>
        <form action="">
            <div class="banner">Guess a number</div>
            <div class="input"><input type="text" name="" id="input"></div>
            <div><input type="submit" id="submit" value="submit Guess"></div>
        </form>
        <div class="resultParas">
            <p>Previous Guesses : <span class="guesses"></span></p>
            <p>Guess Remaining : <span class="Remaining">10</span></p>
            <p class="lohigh"></p>
        </div>
    </div>
    <script src="guess.js"></script>
</body>
</html>

```

## css code: guess.css

```css
*{
    color: white;
}

body{
    background-color: rgb(137, 120, 120);
}
.container{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: black;
}
.banner{
    font-size: 50px;
}
p{
    font-size: 25px;
}

#input{
    height: 40px;
    width: 200px;
    border: 2px solid black;
    background-color: rgb(113, 110, 110);
    font-size: 30px;
}
#submit{
    margin-top: 10px;
    height: 40px;
    width: 150px;
    background-color:rgb(113, 110, 110) ;
    font-size: 20px;
}

form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
h1{
    text-align: center;
}

```

## javascript code : guess.js

```javascript
let randomNum = Math.floor(Math.random() * 100)+1
const submit = document.querySelector('#submit')
const userInput = document.querySelector('#input')
let guessRemaining = document.querySelector('.Remaining')
const guessSlots = document.querySelector('.guesses')
const lohigh = document.querySelector('.lohigh')
const startOver = document.querySelector('.resultParas')
let prevGuess = []
let numGuess = 1
let playGame = true

const p = document.createElement('p')

if(playGame){
    submit.addEventListener('click',function (e){
        e.preventDefault()
        let guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
        
    })
}


function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a valid number ")
    }else if(guess>100){
        alert("Please enter a number less than 100 ")
        
    }else if(guess<0){
        alert("Please enter number greater than 0 ")

    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game over random . Random number was ${randomNum}`)
            endGame()
        }else{
            
            displayGuess(guess)
            checkGuess(guess)
        }
    }
    
}

function checkGuess(guess){
    if(guess === randomNum){
        displayMessage(`You guessed it right.`)
        endGame()
    }else if(guess>randomNum){
        displayMessage(`Number is too high.`)
    }else if(guess < randomNum){
        displayMessage(`Number is too low`)
    }

}
function displayMessage(message){
    lohigh.innerHTML = `<h2>${message}</h2>`

}

function displayGuess(guess){
    userInput.value = ''
    guessSlots.innerHTML += `${guess} ` 
    numGuess++
    if(numGuess<11){
        guessRemaining.innerHTML = `${10 - numGuess}`

    }
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function (e){
        randomNum = Math.floor(Math.random() * 100)+1
        prevGuess = []
        numGuess =1
        lohigh.innerHTML = ''
        guessSlots.innerHTML = ''
        guessRemaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame = true
    })

}
function endGame(){
    userInput.value = ''
    
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()

   
}
```