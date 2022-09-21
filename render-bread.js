export function renderGoods(item) {
    const li = document.createElement('li');

    const image = document.createElement('img');
    image.classList.add('oppo-img');
    image.alt = item.type;
    if (item.hp < 1) {
        image.src = `assets/${item.type}dead.png`;
    } else {
        image.src = `assets/${item.type}.png`;
    }

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('goodsName');
    nameSpan.textContent = item.name;

    const healthSpan = document.createElement('span');
    healthSpan.classList.add('steps');
    healthSpan.textContent = item.hp;

    const brek = document.createElement('br');

    const bigSpan = document.createElement('span');
    bigSpan.classList.add('oppo-text');
    if (item.hp < 1) {
        bigSpan.append(nameSpan, brek, 'I am Baked!');
    } else {
        bigSpan.append(nameSpan, brek, 'Steps Required: ', healthSpan);
    }

    li.append(image, bigSpan);
    return li;
}
