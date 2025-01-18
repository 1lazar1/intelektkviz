let responsiveMenu = document.querySelector('.menu-container');
let menu = document.querySelector('.responsive-menu-icon');
let close = document.querySelector('.close-menu');

menu.addEventListener('click', e => {
    responsiveMenu.classList.toggle('open');
});

close.addEventListener('click', e => {
    responsiveMenu.classList.toggle('open');
});


