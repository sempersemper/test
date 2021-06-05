// Меню бургер
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.menu');
let menuNav = document.querySelector('.menu__list');
let headerFixed = document.querySelector('.header');
let bodyL = document.querySelector('body');
burger.onclick = function() {
    burger.classList.toggle('active');
    headerFixed.classList.toggle('active');
    menu.classList.toggle('active');
    bodyL.classList.toggle('lock');
};

// Активная ссылка меню
$(document).ready(function() {
    let menuLinks = $('.menu__link');
    let burgerBtn = $('.header__burger');
    menuLinks.on('click', function() {
        menuLinks.removeClass('active');
        $(this).addClass('active');
        if (burgerBtn.hasClass('active')) {
            burger.classList.toggle('active');
            headerFixed.classList.toggle('active');
            menu.classList.toggle('active');
            bodyL.classList.toggle('lock');
            menuLinks.removeClass('active');
        }
    });
});

//Анимации при скролле
const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
                animItem.classList.add('_active');
            } else {
                if (!animItem.classList.contains('_anim-no-hide')) {
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    animOnScroll();
    // setTimeout(() => {

    // }, 300);
}

// Слайдеры

// Слайдер основной
const mSlider = new Swiper('.main-slider__swiper', {
    // Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    // Бесконечный слайдер
    loop: false,

    // Управление клавиатурой
    keyboard: {
        // Включить\выключить
        enabled: true,
        // Включить\выключить
        // только когда слайдер
        // в пределах вьюпорта
        onlyInViewport: true,
        // Включить\выключить
        // управление клавишами
        // pageUp, pageDown
        pageUpDown: true,
    },
    // Обновить свайпер
    // при изменении элементов слайдера
    observer: true,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Отступ между слайдами
    spaceBetween: 50,
    // Активный слайд по центру
    centeredSlides: true,
});

// Слайдер nested
const nestedSwipers = new Swiper('.nested-sliders__swiper', {
    // Навигация
    // пагинация, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        // Буллеты
        clickable: true,
    },
    // Корректная работа
    // перетаскивания\свайпа
    // для дочернего слайдера
    nested: true,

    // Количество слайдов для показа
    slidesPerView: 1,
    // Бесконечный слайдер
    loop: true,

    // Обновить свайпер
    // при изменении элементов слайдера
    observer: true,

    // Обновить свайпер
    // при изменении родительских
    // элементов слайдера
    observeParents: true,

    // Обновить свайпер
    // при изменении дочерних
    // элементов слайда
    observeSlideChildren: true,

    // Переворот
    effect: 'flip',

    // Дополнение к flip
    flipEffect: {
        // Тень
        slideShadows: true,
        // Показ только активного слайда
        limitRotation: true
    },

});