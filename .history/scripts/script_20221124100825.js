'use strict';

let hobbits = [];
const HOBBIT_KEY = 'HOBBIT_KEY';

/* utils */

function loadData() {
    const hobbitsString = localStorage.getItem(HOBBIT_KEY);
    const hobbitArray = JSON.parse(hobbitsString);

    if(Array.isArray(hobbitArray)) {
        hobbits = hobbitArray;
    }
}

function saveData() {
    localStorage.setItem(HOBBIT_KEY, JSON.stringify(hobbits));
}

/* render */

function rerenderMenu(activeHobbitId) {
    if (!activeHobbitId) {
        return;
    }
    for (const hobbit of hobbits) {
        existed = document.querySelector(`[menu-habbit-id]`)
    }
}

/* init */

(() => {
    loadData();
})();