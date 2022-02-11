// import functions and grab DOM elements
import { renderListItem } from './render-utils.js';
import { getFoodById } from './fetchUtils.js';

const main = document.querySelector('main');

for (let food of resp) {
    getFoodById();
    const foodDiv = renderListItem(food);
    main.append(foodDiv);
}
// let state

// set event listeners
// get user input
// use user input to update state
// update DOM to reflect the new state
