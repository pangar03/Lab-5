import { getItemByID } from './utils.js';

const render = async () => {
    const params = new URLSearchParams(window.location.search);

    const id = params.get("id");

    const product = await getItemByID(id);

    const itemName = document.querySelector('.product-info__product-name');
    itemName.textContent = product.name;

    const itemPrice = document.querySelector('.product-info__price');
    itemPrice.textContent = `$${product.price}`;

    const itemImage = document.querySelector('.product-info__image');
    const img = document.createElement('img');

    img.src = product.image;
    img.alt = product.name;
    itemImage.appendChild(img);

    const itemDescription = document.querySelector('.product-info__information');
    const description = document.createElement('p');
    description.textContent = product.description;
    itemDescription.appendChild(description);
};

document.addEventListener('DOMContentLoaded', render);