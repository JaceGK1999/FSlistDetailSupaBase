export function renderListItem(food) {
    const div = document.createElement('div');
    div.classList.add('food');

    const a = document.createElement('a');
    a.href = `./food_page/?id=${food.id}`;

    const img = document.createElement('img');
    img.src = `./assets/${food.name}.png`;

    const nameSpan = document.createElement('span');
    nameSpan.textContent = food.name;
    nameSpan.classList.add('name');

    a.append(img, nameSpan);
    div.append(a);
    return div;
}
