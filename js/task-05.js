
const refs = {
    inputEl: document.querySelector('#name-input'),
    nameEl: document.querySelector('#name-output')
}

refs.inputEl.addEventListener('input', onInputChange)
function onInputChange(event) {
    if(event.currentTarget.value === ''){
        return refs.nameEl.textContent = 'Anonymous'
    }
    return refs.nameEl.textContent = event.currentTarget.value
}

