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
    const counterMinus = document.querySelector('.counter__minus');
    const counterPlus = document.querySelector('.counter__plus');
    const counterValue = document.querySelector('.counter__value');
    counterMinus.addEventListener('click', () => {
        let currentValue = parseInt(counterValue.value);
        if (currentValue > 1) {
            counterValue.value = currentValue - 1;
        }
    });
    counterPlus.addEventListener('click', () => {
        let currentValue = parseInt(counterValue.value);
        counterValue.value = currentValue + 1;
    });
    counterValue.addEventListener('change', () => {
        let currentValue = parseInt(counterValue.value);
        if (isNaN(currentValue) || currentValue < 1) {
            counterValue.value = 1; // Установить значение по умолчанию, если ввод некорректный
            counterMinus.classList.add('counter__minus_delete');
        }
    });


});