const question = document.querySelectorAll('.question');
const questionAnswer = document.querySelectorAll('.question_answer');
const questionAdd = document.querySelectorAll('.question_add');
const itemCount = document.querySelectorAll('.item_count');
const itemMinus = document.querySelectorAll('.item_minus');
const itemPlus = document.querySelectorAll('.item_plus');
let deg = 90;

for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click', () => {
        questionAnswer[i].classList.toggle('question_active');
        questionAdd[i].style.transform = `rotate(${deg}deg)`;
        deg+=90;
    })
}
for(let i = 0; i < itemCount.length; i++){
    itemMinus[i].addEventListener('click', () => {
        if (parseInt(itemCount[i].innerHTML) > 1){
            itemCount[i].innerHTML = parseInt(itemCount[i].innerHTML) - 1;
        }
    })
    itemPlus[i].addEventListener('click', () => {
        itemCount[i].innerHTML = parseInt(itemCount[i].innerHTML) + 1;
    })
}
