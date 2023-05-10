import imageTiles from './imageTiles';
import i18n from "./i18n";

let manual = [
  'wires',
  'button',
  'keypads',
  'simon_says',
  'who_on_first',
  'memory',
  'morse_code',
  'complicated_wires',
  'wire_sequences',
  'mazes',
  'passwords',
  'knobs',
]

async function addManualTile(name) {
  let tileImageElement = document.createElement('img');
  tileImageElement.classList.add('manual-tile-img');
  tileImageElement.src = imageTiles[name];

  let tileNameElement = document.createElement('span');
  tileNameElement.classList.add('manual-tile-name');
  let tileName = i18n[name];
  tileNameElement.innerText = tileName;

  let linkElement = document.createElement('a');
  linkElement.classList.add('manual-tile');
  linkElement.href = `manual_page.html?name=${name}`
  linkElement.appendChild(tileImageElement);
  linkElement.appendChild(tileNameElement);

  let manualTiles = document.querySelector('.manual-times');
  manualTiles.appendChild(linkElement);
}

for (let tile of manual) {
  addManualTile(tile);
}