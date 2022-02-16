// import functions and grab DOM elements
import { renderFoodItem } from './render-food.js';
import { getFoodById } from '../fetchUtils.js';

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

// window.addEventListener('load', async () => {
async function loadData() {
    const main = document.querySelector('main');
    const foods = await getFoodById(id);
    const foodItem = renderFoodItem(foods);
    main.append(foodItem);
}
// let state
loadData();
