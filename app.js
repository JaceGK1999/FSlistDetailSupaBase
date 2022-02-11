// import functions and grab DOM elements
import { renderListItem } from './renderUtils.js';
import { getAllFoods } from './fetchUtils.js';

// window.addEventListener('load', async () => {
async function loadData() {
    const main = document.querySelector('main');
    console.log('hello');
    const foods = await getAllFoods();
    console.log(foods, 'foods');
    for (let food of foods) {
        console.log(food, 'food');
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
