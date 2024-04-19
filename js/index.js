import { importData } from './utils.js';

const render = async () => {
    // Importamos los productos
    const products = await importData();
    let cartItemNumerValue = 0;

    const createProduct = (id, name, image, price) => {
        const productList = document.querySelector('.products__product-list');
        
        // Creamos el producto
        const product = document.createElement('li');
        product.classList.add('products__product-container');

        // ================== Agregamos el boton de agregar al carrito ==================
        const cartButtonFrame = document.createElement("div");
        cartButtonFrame.classList.add('cart-button-frame');

        const cartButton = document.createElement("i");
        cartButton.classList.add('fas', 'fa-cart-plus', 'cart-button-frame__cart-button');

        cartButtonFrame.appendChild(cartButton);

        cartButtonFrame.addEventListener('click', (e) => {
            const cartItemNumer = document.querySelector('.cart__item-number');
            console.log(cartItemNumer);
            cartItemNumerValue++;
            cartItemNumer.innerHTML = cartItemNumerValue;
        });
        // ===============================================================================

        // Creamos el frame
        const productFrame = document.createElement('div');
        productFrame.classList.add('products__product');
        
        // Creamos la imagen
        const productImg = document.createElement('img');
        productImg.alt = name;
        productImg.src = image;
        productImg.classList.add('product__image');

        // Creamos el nombre del producto
        const productName = document.createElement('h4');
        productName.textContent = name;
        productName.classList.add('product__name');
    
        // Creamos el precio del producto
        const productPrice = document.createElement('h4');
        productPrice.textContent = `$${price}`;
        productPrice.classList.add('product__price');
    
        // Agregamos la imagen, nombre y precio al frame del producto
        productFrame.appendChild(productImg);
        productFrame.appendChild(productName);
        productFrame.appendChild(productPrice);
    
        // Agregamos el frame al elemento de la lista
        product.appendChild(productFrame);
        product.appendChild(cartButtonFrame);

        // Agregamos el evento de click al producto
        productFrame.addEventListener('click', () => {
            window.location.href = `../html/product_detail.html?id=${id}`;
        });
    
        // Agregamos el producto al contenedor de productos
        productList.appendChild(product);
    };
    
    for (const product of products) {
        createProduct(product.id, product.name, product.image, product.price);
    }
};

document.addEventListener('DOMContentLoaded', render);