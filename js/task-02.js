const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsConteiner = document.querySelector("#ingredients")

const makeUpIngredients = (someObg) => {
  return someObg.map((element) => { 
    const itemEl = document.createElement("li")
    itemEl.textContent = [element]
    itemEl.classList.add("item")
    return itemEl
  })
}

const ingredient = makeUpIngredients(ingredients)

ingredientsConteiner.append(...ingredient)


