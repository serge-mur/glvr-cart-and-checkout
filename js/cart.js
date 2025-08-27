document.addEventListener("DOMContentLoaded", () => {

    // close message
    const message = document.querySelector('.cart-message__close');
    if (message) {
        message.addEventListener('click', function(e) {
            e.target.closest('.cart-message').style.display = 'none';
        });
    }

    // collapse products
    document.querySelectorAll('.products__header').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const item = e.target.closest('.products');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });

});