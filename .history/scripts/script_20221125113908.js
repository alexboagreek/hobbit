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
	if (Array.isArray(habbitArray)) {
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
            element.setAttribute('menu-habbit-id', habbit.id);
            element.classList.add('menu__item');
            element.addEventListener('click', () => rerender(habbit.id));
            element.innerHTML = `<img src="assets/icons/${habbit.icon}.svg" alt="${habbit.name}" >`;

            if (activeHabbit.id === habbit.id) {
                element.classList.add('menu__item_active');
            }
            page.menu.appendChild(element);
            continue;
        }

        if (activeHabbit.id === habbit.id) {
            existed.classList.add('menu__item_active');
        } else {
            existed.classList.remove('menu__item_active');
        }
    }
}

function rerender(activeHabbitId) {
	const activeHabbit = habbits.find(habbit => habbit.id === activeHabbitId);
	rerenderMenu(activeHabbit);
}

function renderHead(activeHabbit) {
    if (!activeHabbit) {
        return;
    }
    page.header.h1.innerText = activeHabbit.name;
}


/* init */
(() => {
	loadData();
	rerender(habbits[0].id);
})();



function a(num, b) {
    return b(num);
}
console.log(a(1, (n) => n + 5));

function tax(percent) {
    return function(sum) {
        return percent * sum;
    }
}
const taxUser = tax(0.13);
console.log(taxUser(1000));