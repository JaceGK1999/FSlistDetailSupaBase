// import functions and grab DOM elements
import { renderListItem } from './render-utils.js';
import { getFoodsById } from './fetchUtils.js';

const main = document.querySelector('main');

window.addEventListener('load', async () => {
    const foods = await getFoodsById();
    for (let food of foods) {
        const foodDiv = renderListItem(food);
        main.append(foodDiv);
    }
});
// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
