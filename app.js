/* Imports */

/* Get DOM Elements */
const bakerHealth = document.getElementById('baker-hp');
const bakerPic = document.getElementById('baker-img');
/* State */
let baker = {
    hp: 20,
};
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

// (don't forget to call any display functions you want to run on page load!)
displayBaker();
