var menu = document.querySelector('.nav-list');

document.querySelector('.bg-menu').addEventListener('click', function() {
    menu.classList.toggle('nav-list--opened');
});

menu.addEventListener('click', function(e) {
    if (e.target.matches('a')) {
        menu.classList.toggle('nav-list--opened');
    }  
});

document.querySelector('.close-menu').addEventListener('click', function() {
    menu.classList.toggle('nav-list--opened');
});