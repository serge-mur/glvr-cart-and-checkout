document.addEventListener("DOMContentLoaded", () => {

    console.log('DOMContentLoaded');

    // collapse products
    document.querySelectorAll('.products__header').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const item = e.target.closest('.products');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });

    // dropdown
    document.querySelectorAll('.dropdown').forEach(el => {
        el.querySelector('.dropdown__button').addEventListener("click", () => {         
            el.classList.toggle('dropdown_open');
        });  
    });

    // collapse total item
    document.querySelectorAll('.total__name-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const item = e.target.closest('.total__item-wrapper');
            const isActive = item.classList.contains('active');
            item.classList.toggle('active', !isActive);
        });
    });

    /* offcanvas */
    const offcanvasLink = document.querySelectorAll('.offcanvas-link');
    offcanvasLink.forEach(link => {
        const target = link.dataset.target;
        const offcanvas = document.getElementById(target);
        const offcanvasClose = offcanvas.querySelector('.offcanvas__close');
        const offcanvasOverlay = offcanvas.querySelector('.offcanvas__overlay');
        const offcanvasWrapper = offcanvas.querySelector('.offcanvas__wrapper');      
        link.addEventListener('click', () => {
            offcanvas.classList.add('is-opened');
            document.body.classList.add("remove-scrolling");
        });
        offcanvasClose.addEventListener('click', () => {
            offcanvas.classList.remove('is-opened');
            document.body.classList.remove("remove-scrolling");
        });
        offcanvasOverlay.addEventListener('click', () => {
            offcanvas.classList.remove('is-opened');
            document.body.classList.remove("remove-scrolling");
        });
    });

    // map events
    const offcanvasClose = document.querySelector('#cart-map .offcanvas__close');
    const cartMap = document.querySelector('.cart-map');
    const cartMapContent = document.querySelector('.cart-map__content');
    const gotoMap = document.querySelector('.goto-map');
    const gotoMapBtn = document.querySelector('.goto-map__btn');
    const gotoListBtn = document.querySelector('.map__goto-list');
    gotoMapBtn.addEventListener('click', function(e) {
        // стили крестика
        offcanvasClose.classList.remove('offcanvas__close_list');
        offcanvasClose.classList.add('offcanvas__close_map');
        cartMap.classList.add('is-map');
        // показываем поиск
        cartMapContent.classList.add('is-opened', 'is-search');
    });
    gotoListBtn.addEventListener('click', function(e) {
        offcanvasClose.classList.remove('offcanvas__close_map');
        offcanvasClose.classList.add('offcanvas__close_list');
        cartMap.classList.remove('is-map');
        cartMapContent.classList.remove('is-opened', 'is-search');
    });

    const points = document.querySelectorAll('.change-card_point');
    points.forEach(point => {
        id = point.dataset.point;
        let marker = document.querySelector(`.cart-map__marker[data-marker="${id}"]`);
        // console.log(marker);
        marker.addEventListener('click', function(e) {
            // для мобилы
            cartMapContent.classList.add('is-opened', 'is-point');
            // удаление активности на всех маркерах
            document.querySelectorAll('.cart-map__marker').forEach(el => {
                el.classList.remove('active');
            });
            e.target.classList.add('active');
            point.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // удаление активности на всех элемента списка
            document.querySelectorAll('.change-card_point').forEach(el => {
                el.classList.remove('active');
            });             
            point.classList.add('active');
            point.querySelector('.change-card__input').checked = true;
        });
        point.addEventListener('click', function(e) {
            document.querySelectorAll('.cart-map__marker').forEach(el => {
                el.classList.remove('active');
            });
            marker.classList.add('active');
        });
    });
    // закрытие элемента списка для мобилы
    document.querySelector('.cart-map__content-close').addEventListener('click', function(e) {
        cartMapContent.classList.remove('is-opened');
        setTimeout(() => {
            cartMapContent.classList.remove('is-search', 'is-point');
        }, 250);
    });

});