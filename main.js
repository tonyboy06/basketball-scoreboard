let scoreHome = document.getElementById('score1')
let scoreGuest = document.getElementById('score2')

let scoreOne = 0
let scoreTwo = 0


// Score of Home Team

function plusOneHome() {
    scoreOne = scoreOne + 1
    scoreHome.textContent = scoreOne
}

function plusTwoHome() {
    scoreOne = scoreOne + 2
    scoreHome.textContent = scoreOne
}

function plusThreeHome() {
    scoreOne = scoreOne + 3
    scoreHome.textContent = scoreOne
}

function resetHome() {
    scoreOne = 0
    scoreHome.textContent = 0
}

// Score of Guest Team

function plusOneGuest() {
    scoreTwo = scoreTwo + 1
    scoreGuest.textContent = scoreTwo
}

function plusTwoGuest() {
    scoreTwo = scoreTwo + 2
    scoreGuest.textContent = scoreTwo
}

function plusThreeGuest() {
    scoreTwo = scoreTwo + 3
    scoreGuest.textContent = scoreTwo
}

function resetGuest() {
    scoreTwo = 0
    scoreGuest.textContent = 0
}