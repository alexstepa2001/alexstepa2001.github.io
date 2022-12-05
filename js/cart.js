const orderPopup = document.querySelector('.cart_popup');
const orderInfo = document.querySelector('.cart_menu');;
const cartIcon = document.querySelector('.cart_icon');
cartIcon.addEventListener('click', () => {
    orderPopup.classList.toggle('fast_active');
    orderInfo.classList.toggle('fast_active');
})
orderPopup.addEventListener('click', () => {
    orderPopup.classList.toggle('fast_active');
    orderInfo.classList.toggle('fast_active');
})
