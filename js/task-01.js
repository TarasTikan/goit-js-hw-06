const listEl = categories.children.length
const categoryOne = categories.firstElementChild;
console.log(`Number of categories: ${listEl}`)

console.log(`Category: ${categoryOne.firstElementChild.textContent}`)
console.log(`Elements: ${categoryOne.lastElementChild.children.length}`)

console.log(`Category: ${categories.children[1].firstElementChild.textContent}`)
console.log(`Elements: ${categories.children[1].lastElementChild.children.length}`)

console.log(`Category: ${categories.children[2].firstElementChild.textContent}`)
console.log(`Elements: ${categories.children[2].lastElementChild.children.length}`)
