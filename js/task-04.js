const decrementBtn = document.querySelector("[data-action='decrement']");
const incrementBtn = document.querySelector("[data-action='increment']");
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementBtn.addEventListener("click", onDecrement)
incrementBtn.addEventListener("click", onIncrement)

function onDecrement() {
    counterValue += -1;
    valueEl.textContent = counterValue;
    
}
function onIncrement() {
    counterValue += 1;
    valueEl.textContent = counterValue;
    
}