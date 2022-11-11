const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listEl = document.querySelector('#ingredients')
const ingredintEl = []

for (let i = 0; i < ingredients.length; i += 1) {
  const titleEl = ingredients[i];
  const itemEl = document.createElement('li')
  itemEl.classList.add('item')
  itemEl.textContent = titleEl
  ingredintEl.push(itemEl)
}

listEl.append(...ingredintEl)