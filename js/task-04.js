const counterEl = document.querySelector('#value')
const addPlusBtnEl = document.querySelector('button[data-action="decrement"]')
const removePlusBtnEl = document.querySelector('button[data-action="increment"]')

let counterValue = 0
addPlusBtnEl.addEventListener('click', () => {
    counterValue -= 1
    counterEl.textContent = counterValue
})

removePlusBtnEl.addEventListener('click', () => {
    counterValue += 1
    counterEl.textContent = counterValue
})
