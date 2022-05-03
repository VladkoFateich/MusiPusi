let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-main');
let back = document.querySelector('body');
let main = document.querySelector('.main');

burger.onclick = function(){
    burger.classList.toggle('active');
    menu.classList.toggle('active');
    back.classList.toggle('lock');
}

menu.onclick = function () {
    main.classList.remove('active');
    back.classList.toggle('lock');
}