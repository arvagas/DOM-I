const buttonBar = document.createElement('div')
document.querySelector('body').appendChild(buttonBar)

// Buttons
const start = document.createElement('button')
start.innerText = 'Start'
const reset = document.createElement('button')
reset.innerText = 'Reset'
buttonBar.appendChild(start)
buttonBar.appendChild(reset)
reset.disabled = true

start.addEventListener('click', () => {
    start.disabled=true
    reset.disabled=false
    startTime = Date.now()
    countUp = setInterval(timer, 1) // Updates every 1ms
})
reset.addEventListener('click', () => {
    if (counter >= 10000) {
        start.disabled=false
        secondTensDisp.textContent = '-'
        secondOnesDisp.textContent = '-'
        msHundredsDisp.textContent = '-'
        msTensDisp.textContent = '-'
        digits.forEach(item => item.classList.toggle('redDigit'))
        reset.disabled=true
    }
    else if (counter < 10000) {
        clearInterval(countUp)
        counter = 0
        startTime = Date.now()
        countUp = setInterval(timer, 1) // Updates every 1ms
    }
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
let counter

// Timer counting until 10 seconds
let timer = () => {
    counter = Date.now() - startTime
    msTensDisp.textContent = counter % 10
    msHundredsDisp.textContent = Math.floor(counter / 100) % 10
    secondOnesDisp.textContent = Math.floor(counter / 1000) % 10
    secondTensDisp.textContent = Math.floor(counter / 10000) % 10
    if (counter >= 10000) {
        clearInterval(countUp)
        msTensDisp.textContent = 0 // set msTens to 0 to account for update inaccuracies
        digits.forEach(item => item.classList.toggle('redDigit'))
    }
}