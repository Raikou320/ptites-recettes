function displayRecipe(elem) {
  const recipes = JSON.parse(localStorage.getItem('recipes')) || getRecipes();
  const random = Math.floor(Math.random() * recipes.length);
  const recipe = recipes[random];
  const { id, ...filteredRecipe } = recipe;
  const ingredients = filteredRecipe.ingredients;
  const filteredIngredients = Object.entries(ingredients)
    .map(([key, value]) => `${key}: ${value}`)
    .join('<br>');
  const preparation = recipe.preparation;
  const filteredPreparation = Object.entries(preparation)
    .map(([key, value]) => `${value}`)
    .join('<br>');
  filteredRecipe.preparation = filteredPreparation;
  filteredRecipe.ingredients = filteredIngredients;
  const entries = Object.entries(filteredRecipe)
    .map(([key, value]) => `${key}: ${value}`)
    .join('<br>')
    .replace('name', 'nom')
    .replace('preparation:', 'préparation:<br>')
    .replace('ingredients', 'ingrédients')
  elem.style.cssText = 'color: rgba(10, 94, 100, 1); text-transform: capitalize; font-weight: bold;';
  elem.innerHTML = entries;
}

export default displayRecipe;
