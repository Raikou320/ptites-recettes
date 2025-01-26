import { getURLParams, setURLParam } from './scripts/utils/urlParams.js';
import postRecipe from './scripts/utils/postRecipe.js';
import deleteRecipe from './scripts/utils/deleteRecipe.js';
import toImg from './scripts/utils/toImg.js';
import download from './scripts/utils/download.js';

getURLParams(window.location.href);
const toggleSearchLink = document.getElementById('toggle-search-btn');
const aProposLink = document.getElementById('a-propos-btn')

function toggleSearch() {
  setURLParam(window.location.href, 'search', true)
}

function toggleAPropos() {
  setURLParam(window.location.href, 'a-propos', true)
}

document.addEventListener("contextmenu", function (event) {
  event.preventDefault()
})
toggleSearchLink.addEventListener('click', () => toggleSearch());
aProposLink.addEventListener('click', toggleAPropos)