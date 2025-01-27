import { getURLParams, setURLParam } from './scripts/utils/urlParams.js';
import getRecipes from './scripts/recipes/getRecipes.js';
import deleteRecipe from './scripts/recipes/deleteRecipe.js';
import toImg from './scripts/utils/toImg.js';
import download from './scripts/utils/download.js';
import displayRecipe from './scripts/recipes/displayRecipe.js';

let urlParams = getURLParams(window.location.href);
const toggleSearchLink = document.getElementById('toggle-search-btn');
const aProposLink = document.getElementById('a-propos-btn');
const popularRecipes = document.getElementById('popular-recipes');
const firstRecipe = document.querySelector('.popular-recipes__recipe-1');
const searchbar = document.getElementById('searchbar-section')
const aPropos = document.getElementById('a-propos')

displayRecipe(firstRecipe);

function changeURL() {
  if (urlParams.includes('search=true')) {
    hideElement(popularRecipes);
    showElement(searchbar);
  }
  if (urlParams.includes('a-propos=true')) {
    hideElement(popularRecipes);
    showElement(aPropos);
  } else {
    hideElement(searchbar)
    hideElement(aPropos)
    showElement(popularRecipes)
  }
  requestAnimationFrame(changeURL);
}

changeURL();

function toggleSearch() {
  setURLParam(window.location.href, 'search', true);
}

function toggleAPropos() {
  setURLParam(window.location.href, 'a-propos', true);
}

function hideElement(elem) {
  elem.style.cssText = 'position: relative; z-index: -1;';
}

function showElement(elem) {
  elem.style.cssText = 'position: relative; z-index: 1;';
}

document.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

toggleSearchLink.addEventListener('click', () => toggleSearch());
aProposLink.addEventListener('click', toggleAPropos);
hideElement(searchbar)
hideElement(aPropos)