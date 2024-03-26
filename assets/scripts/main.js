/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");
const cars__tab__1 = document.getElementById("cars__tab__1");
const cars__tab__2 = document.getElementById("cars__tab__2");
const first_cars__models = document.getElementById("first_cars__models");
const second_cars__models = document.getElementById("second_cars__models");
const cars__models = document.querySelectorAll(".cars__model");
const popup__background = document.getElementById("popup__background");
const cars__popup = document.getElementById("cars__popup");
const cars__popup__title = document.getElementById("cars__popup--title");
const cars__popup__full_title = document.getElementById("cars__popup--full_title");
const cars__popup__price = document.getElementById("cars__popup--price");
const cars__popup__model_image = document.getElementById("cars__popup--model_image");
const cars__popup__model_logo_image = document.getElementById("cars__popup--model_logo_image");
const cars__popup__close = document.getElementById("cars__popup__close");
const cars__popup__characteristics = document.getElementById("cars__popup__characteristics");


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

/* Нажатие на одну из машин и вызов попапа */
for (let car_model of cars__models) {
    car_model.addEventListener("click", () => {

        popup__background.classList.add("popup__background");
        cars__popup.classList.add("cars__popup__active");

        cars__popup__title.textContent = car_model.getAttribute("data-title").split(" ").splice(0, 2).join(" ");
        cars__popup__full_title.textContent = car_model.getAttribute("data-title");
        cars__popup__price.textContent = car_model.getAttribute("data-price");
        cars__popup__model_image.src = car_model.getAttribute("data-model-image");

        const model_characteristics = car_model.getAttribute("data-characteristics").split(";");

        cars__popup__characteristics.innerHTML = '';

        for (let model_characteristic of model_characteristics) {
            const model_characteristic__title = model_characteristic.split(":")[0]
            const model_characteristic__info = model_characteristic.split(":")[1]

            cars__popup__characteristics.insertAdjacentHTML(`beforeend`,
                `<div class="cars__popup--characteristic">
                <h4 class="cars__popup--characteristic_title">${model_characteristic__title}</h4>
                <p class="cars__popup--characteristic_info">${model_characteristic__info}</p>
            </div>`);
        }
    })
}

/* Закрытие попапа */
cars__popup__close.addEventListener("click", () => {
    popup__background.classList.remove("popup__background");
    cars__popup.classList.remove("cars__popup__active");
})