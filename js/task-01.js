const categoryItemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoryItemEl.length}`);

const makeCategoryItemEl = (elements) => {
    return elements.forEach((element) => {
    const categoryNameEl = element.firstElementChild
    console.log(`Category: ${categoryNameEl.textContent}`);
    const elementEl = element.lastElementChild.children
    console.log(`Elements: ${elementEl.length}`);
    })
}
makeCategoryItemEl(categoryItemEl)


////-------2-------////

// const categoryListEl = document.querySelector("#categories");
// const categoryItemEl = categoryListEl.children
// console.log(`Number of categories: ${categoryItemEl.length}`);


// const categoryNameEl = categoryItemEl[0].firstElementChild
// console.log(`Category: ${categoryNameEl.textContent}`);

// const elementEl = categoryItemEl[0].lastElementChild.children
// console.log(`Elements: ${elementEl.length}`);


// const categoryName2El = categoryItemEl[1].firstElementChild
// console.log(`Category: ${categoryName2El.textContent}`);

// const element2El = categoryItemEl[1].lastElementChild.children
// console.log(`Elements: ${element2El.length}`);


// const categoryName3El = categoryItemEl[2].firstElementChild
// console.log(`Category: ${categoryName3El.textContent}`);

// const element3El = categoryItemEl[2].lastElementChild.children
// console.log(`Elements: ${element3El.length}`);


////-------3-------////

// const categoryItemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoryItemEl.length}`);

// const categoryStructure = [...categoryItemEl].map(element => {
//     return `Category: ${element.firstElementChild.textContent}
// Elements: ${element.lastElementChild.children.length}`
// }).join("\n")

// console.log(categoryStructure)


////-------4-------////

// const categoryItemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoryItemEl.length}`);

// const categoryStructure = [...categoryItemEl].map(element => `Category: ${element.firstElementChild.textContent}
// Elements: ${element.lastElementChild.children.length}`
// ).join("\n")

// console.log(categoryStructure)


////-------5-------////

// const categoryListEl = document.querySelector("#categories");
// const categoryItemEl = categoryListEl.children
// console.log(`Number of categories: ${categoryItemEl.length}`);

// for (let i=0; i < categoryItemEl.length; i+=1){

//     const categoryNameEl = categoryItemEl[i].firstElementChild
//     console.log(`Category: ${categoryNameEl.textContent}`);
//     const elementEl = categoryItemEl[i].lastElementChild.children
//     console.log(`Elements: ${elementEl.length}`);
// }


////-------6-------////

// const categoryItemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoryItemEl.length}`);

// for (let i=0; i < categoryItemEl.length; i+=1){

//     const categoryNameEl = categoryItemEl[i].firstElementChild
//     console.log(`Category: ${categoryNameEl.textContent}`);
//     const elementEl = categoryItemEl[i].lastElementChild.children
//     console.log(`Elements: ${elementEl.length}`);
// }


////-------7-------////

// const categoryItemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoryItemEl.length}`);

// for (let element of categoryItemEl){

//     const categoryNameEl = element.firstElementChild
//     console.log(`Category: ${categoryNameEl.textContent}`);
//     const elementEl = element.lastElementChild.children
//     console.log(`Elements: ${elementEl.length}`);
// }


////-------8-------////

// const categoryItemEl = document.querySelectorAll(".item");
// console.log(`Number of categories: ${categoryItemEl.length}`);

// categoryItemEl.forEach((element) => {
//     const categoryNameEl = element.firstElementChild
//     console.log(`Category: ${categoryNameEl.textContent}`);
//     const elementEl = element.lastElementChild.children
//     console.log(`Elements: ${elementEl.length}`);
// })


