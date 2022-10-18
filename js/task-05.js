const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textInput.addEventListener("input", onChangeOutputText);


function onChangeOutputText() {
    if (textInput.value === '') {
        return output.textContent = 'Anonymous'
    }
   return output.textContent = textInput.value
}

//----2----//

// const textInput = document.querySelector("#name-input");
// const output = document.querySelector("#name-output");

// textInput.addEventListener("input" ,onChangeOutputText);

// function onChangeOutputText(event) {
//     if (event.currentTarget.value === '') {
//         return output.textContent = 'Anonymous'
//     }
//    return output.textContent = event.currentTarget.value
// }