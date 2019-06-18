// Buttons
const start = document.createElement('button')
start.innerText = 'Start'
const reset = document.createElement('button')
reset.innerText = 'Reset'
document.querySelector('body').appendChild(start)
document.querySelector('body').appendChild(reset)

start.addEventListener('click', () => {
    start.disabled=true
    startTime = Date.now()
    countUp = setInterval(timer, 1) // Updates every 1ms
})
reset.addEventListener('click', () => {
    start.disabled=false
    msTensDisp.textContent = '-'
    msHundredsDisp.textContent = '-'
    secondOnesDisp.textContent = '-'
    secondTensDisp.textContent = '-'
    digits.forEach(item => item.classList.toggle('redDigit'))
})

// Selectors
let secondTensDisp = document.querySelector('#secondTens')
let secondOnesDisp = document.querySelector('#secondOnes')
let msHundredsDisp = document.querySelector('#msHundreds')
let msTensDisp = document.querySelector('#msTens')
const digits = document.querySelectorAll('.digits')

// Initial Variables
let startTime
let countUp

// Timer counting until 10 seconds
let timer = () => {
    let timeInterval = Date.now() - startTime
    msTensDisp.textContent = timeInterval % 10
    msHundredsDisp.textContent = Math.floor(timeInterval / 100) % 10
    secondOnesDisp.textContent = Math.floor(timeInterval / 1000) % 10
    secondTensDisp.textContent = Math.floor(timeInterval / 10000) % 10
    if (timeInterval >= 10000) {
        clearInterval(countUp)
        msTensDisp.textContent = 0 // set msTens to 0 to account for update inaccuracies
        digits.forEach(item => item.classList.toggle('redDigit'))
    }
}

const startTimer = () => {

}