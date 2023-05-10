import imageTiles from './imagePages';

let pageName = getQueryVariable("name");

function getQueryVariable(variable) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(variable);
}

function withUpper(str){
  let result = str;
  let firstChar = str.substring(0, 1);
  let formatFirstChar = firstChar.toUpperCase();
  result = formatFirstChar + result.substring(1);
  return result
}

let titleElement = document.querySelector('title');
let title =  withUpper(pageName);
titleElement.text = title
document.head.appendChild(titleElement);

let page = document.createElement('img');
page.classList.add('manual-page');
page.src = imageTiles[pageName];
let container = document.querySelector('.container');
container.appendChild(page);
