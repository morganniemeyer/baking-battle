/* Imports */
import { renderGoods } from './render-bread.js';
/* Get DOM Elements */
const bakerHealth = document.getElementById('baker-hp');
const bakerPic = document.getElementById('baker-img');
const bakeryList = document.getElementById('oppo-list');
/* State */
let baker = {
    hp: 20,
};

let bakedGoods = [
    {
        name: 'Bread',
        type: 'bread',
        hp: 2,
    },
    {
        name: 'Pie',
        type: 'pie',
        hp: 0,
    },
];

/*baked types*/
const bread = {
    type: 'bread',
    hp: 2,
};
const pie = {
    type: 'pie',
    hp: 3,
};
const macaron = {
    type: 'macaron',
    hp: 4,
};
const deathCake = {
    type: 'death-cake',
    hp: 50,
};

/*probability arrays*/

const bakerSteps = [0, 1, 1, 2, 2, 3, 4, 5];
const goodDelays = [0, 0, 1, 1, 1, 2, 2, 3];
const goodTypes = [
    bread,
    bread,
    bread,
    bread,
    bread,
    bread,
    bread,
    bread,
    pie,
    pie,
    pie,
    pie,
    pie,
    pie,
    macaron,
    macaron,
    deathCake,
];

/* Events */

/* Display Functions */

function displayBaker() {
    bakerHealth.textContent = Math.max(0, baker.hp);
    if (baker.hp < 1) {
        bakerPic.src = 'assets/tombstone.png';
    } else {
        bakerPic.src = 'assets/baker.png';
    }
}

function displayGoods() {
    // bakeryList.innerHTML = '';

    for (const item of bakedGoods) {
        const goodEl = renderGoods(item);
        bakeryList.append(goodEl);
    }
    return bakeryList;
}

// (don't forget to call any display functions you want to run on page load!)
displayBaker();
displayGoods();
