const inputEl = document.querySelector('#validation-input');
const atributEl = inputEl.getAttribute('data-length')

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur() {
    if (inputEl.value.length === Number(atributEl)) {
        return inputEl.classList.remove('invalid'), inputEl.classList.add('valid')
    }
    
    return inputEl.classList.add('invalid'), inputEl.classList.remove('valid')
}

