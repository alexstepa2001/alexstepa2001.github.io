let burger = document.querySelector('.hamburger');
let hamburgerNav = document.querySelector('.hamburger_nav');
burger.addEventListener('click', open_menu);
function open_menu(){
    burger.classList.toggle('is-active');
    hamburgerNav.classList.toggle('fast_active')
}