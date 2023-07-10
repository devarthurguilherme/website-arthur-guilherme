//Menu Scroll
window.addEventListener('scroll', scrollEffect)
function scrollEffect() {    
    const headerTop = document.querySelector(".header__top-header");
    const headerTopMobile = document.querySelector(".header__top-header--mobile");

    headerTop.classList.toggle("header__top-header--stick", window.scrollY > 0);
    headerTopMobile.classList.toggle("header__top-header--stick", window.scrollY > 0);
};
//End of the Menu Scroll
//Dark Mode
const btnChangeTheme = document.querySelector("#change-theme");

function changeTheme() {
    document.body.classList.toggle("change-theme");
}

btnChangeTheme.addEventListener("change", () => {
    changeTheme();
});
//End Dark Mode
//Portfolio Carousel
const controls = document.querySelectorAll(".control");
const items = document.querySelectorAll(".card");
let currentItem = 0;
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener("click", () => {
    const isLeft = control.classList.contains("portfolio__arrow-left");
    
        if (isLeft) {
            currentItem -= 1;
        } else {
            currentItem += 1;
        };
        
        if (currentItem >= maxItems) {
            currentItem = 0;
        };

        if (currentItem < 0) {
            currentItem = maxItems - 1;
        };

        items.forEach(item => item.classList.remove('current-card'));
        
        items[currentItem].scrollIntoView({inline: "center", behavior: "smooth", block: "nearest"});
        items[currentItem].classList.add("current-card");
    });
});
//End of the Portfolio Carousel
//Side Navigation
function openSideMenu() {
    const mySideNav = document.querySelector("#side-navigation-menu");
    mySideNav.style.left = '0';
};

function closeSideMenu() {
    const mySideNav = document.querySelector("#side-navigation-menu");
    mySideNav.style.left = '-600rem';
};
//End of the Side Navigation
