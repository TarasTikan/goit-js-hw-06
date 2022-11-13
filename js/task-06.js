const inputEl = document.querySelector('#validation-input')
const inputLength = inputEl.getAttribute('data-length')
inputEl.addEventListener('blur', (event) => {
    if(event.currentTarget.value.length == inputLength){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    }  
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');     
    }
})

