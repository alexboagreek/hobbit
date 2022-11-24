'use strict';

let habbits = [];
const HABBIT_KEY = 'HABBIT_KEY';

/* page */

const page = {
    menu: document.querySelector('.menu__list'),
    header: {
        h1: document.querySelector('.header__title'),
        progressPercent: document.querySelector('.progress__percent'),
        progressCoverBar: document.querySelector('.progress__cover-bar')

    }
};

/* utils */

function loadData() {
    const habbitsString = localStorage.getItem(HABBIT_KEY);
    const habbitArray = JSON.parse(habbitsString);

    if(Array.isArray(habbitArray)) {
        habbits = habbitArray;
    }
}

function saveData() {
    localStorage.setItem(HABBIT_KEY, JSON.stringify(habbits));
}

/* render */

function rerenderMenu(activeHabbit) {

    if (!activeHabbit) {
        return;
    }

    for (const habbit of habbits) {
        const existed = document.querySelector(`[menu-habbit-id="${habbit.id}"]`);

        if (!existed) {
            // create

            const element = document.createElement('button');
            element.setAttribute('menu-habbit-id', hobbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(hobbit.id));
            element.innerHTML = `
                <img src="assets/icons/${hobbit.icon}.svg" alt="${hobbit.name}" />
            `;

            if (activeHobbit.id === hobbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }

        if (activeHobbit.id === hobbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerender(activeHobbitId) {
    const activeHobbit = hobbits.find(hobbit => hobbit.id === activeHobbitId);
    rerenderMenu(activeHobbit);
}

function renderHead(activeHobbit) {
    if (!activeHobbit) {
        return;
    }
    page.header.h1.innerText = activeHobbit.name;
}

/* init */

(() => {
    loadData();
    rerender(hobbits[0].id);
})();