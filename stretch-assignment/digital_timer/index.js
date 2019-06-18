// Selectors
let secondTensDisp = document.querySelector('#secondTens')
let secondOnesDisp = document.querySelector('#secondOnes')
let msHundredsDisp = document.querySelector('#msHundreds')
let msTensDisp = document.querySelector('#msTens')
const digits = document.querySelectorAll('.digits')

// Initial Variables
let count = 0
let startTime = Date.now()

// Timer counting until 10 seconds
let timer = setInterval(() => {
    let timeInterval = Date.now() - startTime
    msTensDisp.textContent = timeInterval % 10
    msHundredsDisp.textContent = Math.floor(timeInterval / 100) % 10
    secondOnesDisp.textContent = Math.floor(timeInterval / 1000) % 10
    secondTensDisp.textContent = Math.floor(timeInterval / 10000) % 10
    if (timeInterval >= 10000) {
        clearInterval(timer)
        msTensDisp.textContent = 0 // set msTens to 0 to account for update inaccuracies
        digits.forEach(item => item.classList.toggle('redDigit'))
    }
}, 1)