

function show() {
 
    /* Denna är för tryck inte här knappen*/
    document.getElementById('stor')
            .style.display = "block";




            /* detta kodstycke är för att visa mina roliga skämt så dom ser att jag inte ljuger*/

    document.getElementById('btnID')
            .style.display = "none";
}

let img =document.querySelector('img');
let btn1 =document.querySelector('#btn1');
let btn2 =document.querySelector('#btn2');
let btn3 =document.querySelector('#btn3');
let btn4 =document.querySelector('#btn4');
let btn5 =document.querySelector('#btn5');
let btn6 =document.querySelector('#btn6');
let btn7 =document.querySelector('#btn7');
let btn8 =document.querySelector('#btn8')


btn1.addEventListener('click', () => {
    img.src = 'images/skämt 1.jpg';
})
btn2.addEventListener('click', () => {
    img.src = 'images/skämt 2.jpg';
})
btn3.addEventListener('click', () => {
    img.src = 'images/skämt 3.jpg';
})
btn4.addEventListener('click', () => {
    img.src = 'images/skämt 4.jpg';
})
btn5.addEventListener('click', () => {
    img.src = 'images/skämt 5.jpg';
})
btn6.addEventListener('click', () => {
    img.src = 'images/skämt 6.jpg';
})
btn7.addEventListener('click', () => {
    img.src = 'images/skämt 7.jpg';
})
btn8.addEventListener('click', () => {
    img.src = 'images/skämt 8.jpg';
})





