export function renderFoodItem(food) {
    console.log(food, 'renderfood');
    const section = document.createElement('section');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    div.classList.add('food');

    const img = document.createElement('img');
    img.src = `../assets/${food.food}.jpg`;

    const nameSpan = document.getElementById('food-name');
    nameSpan.textContent = food.food;

    const desc = document.createElement('p');
    desc.textContent = food.description;
    const port = document.createElement('p');
    port.textContent = `Portion size is ${food.portions}!`;

    div.append(img);
    div2.append(desc);
    div3.append(port);

    section.append(div, div2, div3);
    return section;
}
