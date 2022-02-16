export function renderListItem(food) {
    console.log(food, 'renderfood');
    const div = document.createElement('div');
    div.classList.add('food');

    const a = document.createElement('a');
    a.href = `./food/?id=${food.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${food.food}.jpg`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = food.food;
    nameSpan.classList.add('name');

    a.append(img, nameSpan);
    div.append(a);
    return div;
}
