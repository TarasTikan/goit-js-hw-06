const iteamEl = document.querySelectorAll('li.item')
console.log(`Number of categories: ${iteamEl.length}`)

const categoryOne = iteamEl[0].firstElementChild
console.log(`Category: ${categoryOne.textContent}`)
const listEl = categoryOne.nextElementSibling
const childEl = listEl.children.length
console.log(`Elements: ${childEl}`)

const categoryTwo = iteamEl[1].firstElementChild
console.log(`Category: ${categoryTwo.textContent}`)
const listTwoEl = categoryTwo.nextElementSibling
const childTwoEl = listTwoEl.children.length
console.log(`Elements: ${childTwoEl}`)

const categoryThree = iteamEl[2].firstElementChild
console.log(`Category: ${categoryThree.textContent}`)
const listThreeEl = categoryThree.nextElementSibling
const childThreeEl = listThreeEl.children.length
console.log(`Elements: ${childThreeEl}`)


