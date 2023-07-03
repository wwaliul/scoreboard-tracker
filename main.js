let hCountEl = document.getElementById('homeScore')
let gCountEl = document.getElementById('guestScore')
let resetEl = document.getElementById('resetScore')
let homeScore = 0
let guestScore = 0

function hIncrementOne() {
    homeScore += 1
    hCountEl.textContent = homeScore
    console.log(homeScore)
}

function hIncrementTwo() {
    homeScore += 2
    hCountEl.textContent = homeScore
    console.log(homeScore)
}

function hIncrementThree() {
    homeScore += 3
    hCountEl.textContent = homeScore
    console.log(homeScore)
}

function gIncrementOne() {
    guestScore += 1
    gCountEl.textContent = guestScore
    console.log(homeScore)
}

function gIncrementTwo() {
    guestScore += 2
    gCountEl.textContent = guestScore
    console.log(homeScore)
}

function gIncrementThree() {
    guestScore += 3
    gCountEl.textContent = guestScore
    console.log(homeScore)
}

function resetCount() {
    homeScore = 0
    guestScore = 0
    hCountEl.textContent = homeScore
    gCountEl.textContent = guestScore
    alert('Scores have been reset and ready for the next game!')
}