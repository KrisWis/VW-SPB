/* Объявление глобальных переменных */
const navbar__adaptive_menuBurger = document.getElementById("navbar__adaptive_menuBurger");
const navbar__adaptive_menu = document.getElementById("navbar__adaptive_menu");
const navbar__adaptive_menu_cross = document.getElementById("navbar__adaptive_menu_cross");

/* Открытие и закрытие бургер меню */
navbar__adaptive_menuBurger.addEventListener("click", () => {
    navbar__adaptive_menu.classList.toggle("active");
})

navbar__adaptive_menu_cross.addEventListener("click", () => {
    navbar__adaptive_menu.classList.remove("active");
})