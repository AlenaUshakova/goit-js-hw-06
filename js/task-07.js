const inputEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

inputEl.addEventListener('input', onChangeText)

function onChangeText() {
   textEl.style.fontSize = inputEl.value + "px";
}

 