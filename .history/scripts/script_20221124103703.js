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

function rerenderMenu(activeHobbit) {

    if (!activeHobbit) {
        return;
    }

    for (const hobbit of hobbits) {
        existed = document.querySelector(`[menu-hobbit-id="${hobbit.id}"]`);
        if (!existed) {
            // create
        }

        if (activeHobbit.id === hobbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            ex
        }
    }
}

function rerender(activeHobbitId) {
    const activeHobbit = hobbits.find(hobbit => hobbit.id === activeHobbitId);
    rerenderMenu(activeHobbit);
}

/* init */

(() => {
    loadData();
})();