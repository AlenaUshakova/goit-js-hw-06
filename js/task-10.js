function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsEl = document.querySelector('#controls');
const inputEl = controlsEl.firstElementChild;
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesEl = document.querySelector('#boxes');

createBtn.addEventListener('click', onAddBox)
destroyBtn.addEventListener('click', onDestroyBoxes)

function onAddBox() {
  let amount = Number(inputEl.value);
  onCreateBoxes(amount)
}

let boxSize = 30;

function onCreateBoxes(amount) {
  for (let i = 0; i < amount; i += 1){
    boxSize += 10
    let newBox = document.createElement('div')
    newBox.style.backgroundColor = getRandomHexColor();
    newBox.style.width = `${boxSize}px`
    newBox.style.height = `${boxSize}px`
    newBox.style.marginTop = '20px'
    boxesEl.append(newBox)
  }
}

function onDestroyBoxes() {
  boxesEl.innerHTML = ""
}

//-----------2---------//


// const controlEl = document.querySelector('#controls')
// const inputEl = controlEl.firstElementChild
// const createBtn = document.querySelector('[data-create]')
// const destroyBtn = document.querySelector('[data-destroy]')
// const boxEl = document.querySelector('#boxes')
// console.log(createBtn);


// createBtn.addEventListener('click', getAmount)
// destroyBtn.addEventListener('click', destroyBoxes)

// function getAmount() {
//   let amount = Number(inputEl.value);
//   createBoxes(amount);
// }

// function createBoxes(amount) { 
//   for (let i = 0; i < amount; i += 1) {
//     let box = document.createElement('div');
//     box.style.width = 30 + i * 10 + 'px';
//     box.style.height = 30 + i * 10 + 'px';
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.marginTop = '20px';
//     boxEl.append(box)
//   }
// }

// function destroyBoxes() {
//   boxEl.innerHTML = '';
// }


//-----------3---------//


// const controlEl = document.querySelector('#controls')
// const inputEl = controlEl.firstElementChild
// const createBtn = document.querySelector('[data-create]')
// const destroyBtn = document.querySelector('[data-destroy]')
// const boxEl = document.querySelector('#boxes')
// console.log(createBtn);

// createBtn.addEventListener('click', () => {
//   let  boxesToadd = createBoxes(inputEl.value)
// })
// destroyBtn.addEventListener('click', destroyBoxes)

// function createBoxes(amount) { 
//   for (let i = 0; i < amount; i += 1) {
//     let box = document.createElement('div');
//     box.style.width = 30 + i * 10 + 'px';
//     box.style.height = 30 + i * 10 + 'px';
//     box.style.backgroundColor = getRandomHexColor();
//     box.style.marginTop = '20px';
//     boxEl.append(box)
//   }
// }

// function destroyBoxes() {
//   boxEl.innerHTML = '';
// }