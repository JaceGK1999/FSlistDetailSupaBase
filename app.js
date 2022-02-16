// import functions and grab DOM elements
import { renderListItem } from './renderUtils.js';
import { getAllFoods } from './fetchUtils.js';

// window.addEventListener('load', async () => {
async function loadData() {
    const main = document.querySelector('main');
    const foods = await getAllFoods();
    for (let food of foods) {
        const foodDiv = renderListItem(food);
        main.append(foodDiv);
    }
}
// let state
loadData();
// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
