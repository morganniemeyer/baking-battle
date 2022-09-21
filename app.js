/* Imports */
import { renderGoods } from './render-bread.js';
import { getRandomItem } from './utils.js';
/* Get DOM Elements */
const bakerHealth = document.getElementById('baker-hp');
const bakerPic = document.getElementById('baker-img');
const bakeryList = document.getElementById('oppo-list');
const addProjectForm = document.getElementById('add-bakegood');
const messageContent = document.getElementById('message');
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
        hp: 3,
    },
];
let message = '';

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

const bakerSteps = [0, 1, 1, 2, 2, 3, 4];
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
    pie,
    pie,
    macaron,
    macaron,
    macaron,
    macaron,
    macaron,
    macaron,
    deathCake,
];

/* Events */

addProjectForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(addProjectForm);
    const goodType = getRandomItem(goodTypes);

    const item = {
        name: formData.get('baked-good'),
        type: goodType.type,
        hp: goodType.hp,
    };

    bakedGoods.push(item);
    message = `${item.name}, a ${item.type}, is ready for prep!`;
    displayGoods();
    displayMessage();

    addProjectForm.reset();
});

/* Display Functions */
function displayMessage() {
    messageContent.textContent = message;
}

function displayBaker() {
    bakerHealth.textContent = Math.max(0, baker.hp);
    if (baker.hp < 1) {
        bakerPic.src = 'assets/tombstone.png';
    } else {
        bakerPic.src = 'assets/baker.png';
    }
}

function displayGoods() {
    bakeryList.innerHTML = '';

    for (const item of bakedGoods) {
        const goodEl = renderGoods(item);
        bakeryList.append(goodEl);

        goodEl.addEventListener('click', () => {
            if (item.hp < 1) {
                message = `No use prepping a made good!`;
                displayMessage();
                return;
            }
            const bakerPrep = getRandomItem(bakerSteps);
            const goodDelay = getRandomItem(goodDelays);

            baker.hp = Math.max(0, baker.hp - goodDelay);
            item.hp = Math.max(0, item.hp - bakerPrep);
            displayGoods();
        });
    }
}

// (don't forget to call any display functions you want to run on page load!)
displayBaker();
displayGoods();
