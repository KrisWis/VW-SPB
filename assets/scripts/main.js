/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const cars__tab__1 = document.getElementById("cars__tab__1");
const cars__tab__2 = document.getElementById("cars__tab__2");
const first_cars__models = document.getElementById("first_cars__models");
const second_cars__models = document.getElementById("second_cars__models");

/* Открытие и закрытие бургер меню */
navbar__adaptive_menuBurger.addEventListener("click", () => {
    navbar__adaptive_menu.classList.toggle("active");
})

navbar__adaptive_menu_cross.addEventListener("click", () => {
    navbar__adaptive_menu.classList.remove("active");
})

/* Переключение табов в секции "cars" */
cars__tab__1.addEventListener("click", () => {
    cars__tab__1.classList.add("active");
    cars__tab__2.classList.remove("active");
    first_cars__models.classList.add("active_cars");
    second_cars__models.classList.remove("active_cars");
})

cars__tab__2.addEventListener("click", () => {
    cars__tab__2.classList.add("active");
    cars__tab__1.classList.remove("active");
    second_cars__models.classList.add("active_cars");
    first_cars__models.classList.remove("active_cars");
})

/* Инициализация слайдера в секции "cars" */
const cars_models_types = ['#first_cars__models', '#second_cars__models']
for (let cars_models of cars_models_types) {
    new Swiper(cars_models, {
        direction: 'horizontal',
        spaceBetween: 20,

        breakpoints: {
            1400: {
                slidesPerView: 5,
            },

            1100: {
                slidesPerView: 4,
            },

            800: {
                slidesPerView: 3,
            },

            600: {
                slidesPerView: 2,
            },

            0: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },

        navigation: {
            nextEl: '#cars__arrows--next',
            prevEl: '#cars__arrows--prev',
        },
    });
}

/* Инициализация слайдера в секции "Details" */
new Swiper('#details__items', {
    direction: 'horizontal',
    spaceBetween: 0,

    breakpoints: {
        1400: {
            slidesPerView: 5,
        },

        1100: {
            slidesPerView: 4,
            allowTouchMove: false
        },

        800: {
            slidesPerView: 3,
        },

        600: {
            slidesPerView: 2,
        },

        0: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    },

    navigation: {
        nextEl: '#details__arrows--next',
        prevEl: '#details__arrows--prev',
    },
});