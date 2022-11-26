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


function rerenderHead(activeHabbit) {
  
    page.header.h1.innerText = activeHabbit.name;
    const progress = activeHabbit.days.length / activeHabbit.target > 1
        ? 100
        : activeHabbit.days.length / activeHabbit.target * 100;
    page.header.progressPercent.innerText =progress.toFixed(0) + '%';
    page.header.progressCoverBar.setAttribute('style', `width: ${progress}%`);
}

function rerenderContent(activeHabbit) {
    page.content.daysContainer.innerHTML = '';
    for (const index in activeHabbit.days) {
        const element = document.createElement('div');
        element.classList.add('hobbit');
        element.innerHTML = `
            <div class="hobbit__day">День ${Number(index) + 1}</div>
            <div class="hobbit__comment">${activeHabbit.days[index].comment}</div>
            <button class="hobbit__delete">
                <img src="assets/icons/backet.svg" alt="delete basket icon ${index + 1}">
            </button>
        `;
        page.content.daysContainer.appendChild(element);
    }
    page.content.nextDay.innerHTML = `День ${activeHabbit.days.length + 1}`;
}

/* init */
(() => {
	loadData();
	rerender(habbits[0].id);
})();
