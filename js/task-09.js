const colorBtn = document.querySelector('.change-color')
const colorEl = document.querySelector('color')
const bodyEl = document.querySelector('body')
colorBtn.addEventListener('click', getRandomHexColor)
function getRandomHexColor() {
   const bg = `#${Math.floor(Math.random() * 16777215).toString(16)}`
   return bodyEl.style.backgroundColor = bg
 return colorEl.textContent = `Change color ${bg}`
}

// const colorBtn = document.querySelector('.change-color')
// const colorEl = document.querySelector('color')
// return colorEl.textContent = event.currentTarget.colorBtn