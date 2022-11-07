let detailsButton = document.querySelectorAll('.details_button');
let popup = document.querySelector('.popup');
let backgroundBlack = document.querySelector('.background_black');
let close = document.querySelectorAll('.close_this');

for(let i = 0; i < detailsButton.length; i++){
    detailsButton[i].addEventListener('click', () => {
        popup.style.opacity = '1';
        popup.style.visibility = 'visible';
        backgroundBlack.style.opacity = '1';
        backgroundBlack.style.visibility = 'visible';
    })
}

backgroundBlack.addEventListener('click', () => {
    popup.style.opacity = '0';
    popup.style.visibility = 'hidden';
    backgroundBlack.style.opacity = '0';
    backgroundBlack.style.visibility = 'hidden';
})

for(let i = 0; i < close.length; i++){
    close[i].addEventListener('click', () => {
        popup.style.opacity = '0';
        popup.style.visibility = 'hidden';
        backgroundBlack.style.opacity = '0';
        backgroundBlack.style.visibility = 'hidden';
    })
}