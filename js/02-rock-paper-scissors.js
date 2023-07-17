function displayTitle() {
    alert('Welcome to Rock, Paper, Scissors')
}
function playGame() {
    let compRandom = (Math.random()*3)
    let compChoice
        if (compRandom <= 1) {
            compChoice = 'rock'
        } else if (compRandom > 1 && compRandom <= 2) {
            compChoice = 'paper'
        } else if  (compRandom > 2) {
            compChoice = 'scissors' 
        }
    let userChoice

    do {
        userChoice = prompt('Do you choose rock, paper, or scissors?')
    } while (userChoice != 'rock' && userChoice != 'paper' && userChoice != 'scissors')

    if (compChoice === userChoice) {
            alert(`Twinkies! We both guessed ${userChoice}.`)
        } else if (( userChoice == 'rock' && compChoice == 'scissors') ||
            ( userChoice == 'paper' && compChoice == 'rock') ||
            ( userChoice == 'scissors' && compChoice == 'paper') ) {
            alert(`Darn it! Your ${userChoice} beat my ${compChoice}.`)
        } else if (( compChoice == 'rock' && userChoice == 'scissors') ||
            ( compChoice == 'paper' && userChoice == 'rock') ||
            ( compChoice == 'scissors' && userChoice == 'paper') ) {
            alert(`Not this time! My ${compChoice} beat your ${userChoice}.`)
        } 
}

function init(){
    displayTitle()
    let playAgain = ('y')
    do {
        playGame()
        playAgain = prompt('Do you want to play again? (y/n)')
    } while (playAgain === 'y')
    alert('Thanks for playing the game!')

}
init()

