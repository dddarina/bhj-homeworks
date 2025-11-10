const cartProducts = document.querySelector('.cart__products');
const cartTitle = document.querySelector('.cart__title');

function toggleCartVisibility() {
    const hasProducts = cartProducts.children.length > 0;

    if (hasProducts) {
        cartTitle.style.display = 'flex';
        cartProducts.style.display = 'flex';
    } else {
        cartTitle.style.display = 'none';
        cartProducts.style.display = 'none';
    }
}

toggleCartVisibility();

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('product__quantity-control_inc')) {
        const quantityValue = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        let value = parseInt(quantityValue.textContent);
        value++;
        quantityValue.textContent = value;
    }

    if (event.target.classList.contains('product__quantity-control_dec')) {
        const quantityValue = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        let value = parseInt(quantityValue.textContent);
        if (value > 1) {
            value--;
            quantityValue.textContent = value;
        }
    }

    if (event.target.classList.contains('product__add')) {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        const productImage = product.querySelector('.product__image').src;
        const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

        addProductToCart(productId, productImage, quantity);
        product.querySelector('.product__quantity-value').textContent = '1';

        toggleCartVisibility();
    }

    if (event.target.classList.contains('product__delete')) {
        const product = event.target.closest('.product');
        const productId = product.dataset.id;
        
        removeProductFromCart(productId);
        toggleCartVisibility();
    }
});

function addProductToCart(id, image, quantity) {
    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);

    if (existingProduct) {
        const countElement = existingProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(countElement.textContent);
        countElement.textContent = currentCount + quantity;
    } else {
        const cartProduct = document.createElement('div');
        cartProduct.className = 'cart__product';
        cartProduct.setAttribute('data-id', id);

        cartProduct.innerHTML = `
            <img class="cart__product-image" src="${image}">
            <div class="cart__product-count">${quantity}</div>
        `;

        cartProducts.appendChild(cartProduct);
    }
}

function removeProductFromCart(id) {
    const existingProduct = cartProducts.querySelector(`.cart__product[data-id="${id}"]`);
    
    if (existingProduct) {
        const countElement = existingProduct.querySelector('.cart__product-count');
        const currentCount = parseInt(countElement.textContent);
        
        if (currentCount > 1) {
            countElement.textContent = currentCount - 1;
        } else {
            existingProduct.remove();
        }
    }
}