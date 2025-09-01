document.addEventListener("DOMContentLoaded", () => {

    // close message
    const message = document.querySelector('.cart-message__close');
    if (message) {
        message.addEventListener('click', function(e) {
            e.target.closest('.cart-message').style.display = 'none';
        });
    }

    // collapse products
    const orderNotAvailable =  document.querySelector('.order_not-available');
    const orderCollapseButton = document.querySelector('.order__collapse-button');
    if (orderNotAvailable) {
        orderCollapseButton.addEventListener('click', function(e) {
            orderNotAvailable.classList.toggle('order_open');
        });
    }

    // share dropdown
    const shareDropdownButton = document.querySelector('.share-dropdown__button');
    const shareDropdownClose = document.querySelector('.share-dropdown__close');
    if (shareDropdownButton) {
        shareDropdownButton.addEventListener("click", (el) => {         
            el.target.closest('.share-dropdown').classList.add('share-dropdown_open');
        });  
        shareDropdownClose.addEventListener("click", (el) => {         
            el.target.closest('.share-dropdown').classList.remove('share-dropdown_open');
        });  
    }

    // price discount dropdown
    document.querySelectorAll('.price-dropdown__button').forEach(btn => {
        if (btn) {
            btn.addEventListener("click", (el) => {         
                el.target.closest('.price-dropdown').classList.toggle('price-dropdown_open');
            });  
        }
    });

    // mob hide/show select
    const cartTitleControl = document.querySelector('.cart__title-control');
    const productsList = document.querySelector('.order:not(.order_not-available.products__list) .products__list');
    let cartTitleControlText;
    cartTitleControl.addEventListener("click", () => {         
        productsList.classList.toggle('products__list_hide-select');
        if(productsList.classList.contains('products__list_hide-select')) {
            cartTitleControlText = 'Выбрать';
        } else {
            cartTitleControlText = 'Отменить';
        }
        cartTitleControl.textContent = cartTitleControlText;
    }); 

    // all select/unselect
    const cartCheckboxInputAll = document.querySelector('.cart-checkbox__input_all');
    const cartCheckboxInput = document.querySelectorAll('.order:not(.order_not-available.products__list) .products__item .cart-checkbox__input');
    cartCheckboxInputAll.addEventListener('change', () => {
        if(cartCheckboxInputAll.checked) {
            cartCheckboxInput.forEach(checkbox => {
                checkbox.checked = true;
            });
        } else {
            cartCheckboxInput.forEach(checkbox => {
                checkbox.checked = false;
            });
        }

    });

    // size dropdown
    document.querySelectorAll('.size-dropdown__button').forEach(btn => {
        const sizeSelect = btn.closest('.products__item').querySelector('.size-select');
        if (btn) {
            btn.addEventListener("click", () => {         
                btn.closest('.size-dropdown').classList.toggle('size-dropdown_open');
                sizeSelect.classList.toggle('size-select_open');
            });  
        }        
    });

    // product counter
    document.querySelectorAll('.products__counter').forEach(counter => {
        const counterMinus = counter.querySelector('.counter__minus');
        const counterPlus = counter.querySelector('.counter__plus');
        const counterValue = counter.querySelector('.counter__value');
        const productsItem = counter.closest('.products__item');
        if (parseInt(counterValue.value) == 1) {
            counterMinus.classList.add('counter__minus_delete');   
        }
        counterMinus.addEventListener('click', () => {
            if (counterMinus.classList.contains('counter__minus_delete')) {
                productsItem.classList.add('products__item_delete');
                // delete product counter
                let time = 4;
                const timer = setInterval(() => {
                    const countdownElement = productsItem.querySelector('.delete-counter__counter');
                    if(time > 0) {
                        countdownElement.textContent = time--;
                    } else {
                        clearInterval(timer)
                        countdownElement.textContent = '0';
                        console.log('Удаляем товар')                        
                      }
                }, 1000);
            }
            if (parseInt(counterValue.value) == 2) {
                counterMinus.classList.add('counter__minus_delete');
            }
            let currentValue = parseInt(counterValue.value);
            if (currentValue > 1) {
                counterValue.value = currentValue - 1 + ' шт';
            }
        });
        counterPlus.addEventListener('click', () => {
            let currentValue = parseInt(counterValue.value);
            counterValue.value = currentValue + 1+ ' шт';
            if (counterMinus.classList.contains('counter__minus_delete')) {
                counterMinus.classList.remove('counter__minus_delete');
            }
        });
        counterValue.addEventListener('change', () => {
            let currentValue = parseInt(counterValue.value);
            if (isNaN(currentValue) || currentValue < 1) {
                counterValue.value = 1;

            }
        });
    });

});