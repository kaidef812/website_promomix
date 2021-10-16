const searchBox = document.querySelector(".header__search-box");
const searchIcon = document.querySelector(".header__search-icon");
const searchField = document.querySelector(".header__search-field");

searchIcon.addEventListener("click", () => {
    searchBox.classList.toggle('header__search-box_active');
    searchField.classList.toggle('header__search-field_active');
});

document.addEventListener("click", e => {
    let target = e.target;
    let itsSearchField = target == searchField;
    let itsSearchIcon = target == searchIcon;
    if(!itsSearchField && !itsSearchIcon) {
        console.log("we're here!")
        searchBox.classList.remove('header__search-box_active');
        searchField.classList.remove('header__search-field_active');
    }
});

const burgerMenu = document.querySelector(".header__burger-menu");
burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle('header__burger-menu_active');
});
document.addEventListener("click", e => {
    let target = e.target;
    let itsBurger = target == burgerMenu;
    if (!itsBurger) {
        burgerMenu.classList.remove('header__burger-menu_active');
    }
});