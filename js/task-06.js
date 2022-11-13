const inputEl = document.querySelector('input[data-length="6"]')

const inputLength = inputEl.dataset.length
console.log(inputLength)
inputEl.addEventListener('blur', (event) => {
    if(inputLength === event.currentTarget.value.length){
        inputEl.classList.remove('invalid');
        inputEl.classList.add('valid');
    } 
    else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('valid');     
    }
})


