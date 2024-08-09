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