const inputEl = document.querySelector('#validation-input')

inputEl.addEventListener('input', onInputValid)

function onInputValid(event) {
    if(event.currentTarget.value.length >= 6){
         inputEl.classList.add('valid')
         inputEl.classList.remove('invalid')
    } 
    else {
        inputEl.classList.remove('valid')
        inputEl.classList.add('invalid')
    }
}