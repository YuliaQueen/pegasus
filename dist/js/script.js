function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});

//MOBILE MENU
var button = document.querySelector('.top-menu__hamburger');
var menu = document.querySelector('.mobile-menu');
var body = document.querySelector('body');
var overlay = document.querySelector('.overlay_menu');
var links = document.querySelectorAll('.mobile-menu__link');

button.addEventListener('click', function () {
    button.classList.toggle('cross');
    menu.classList.toggle('active');
    body.classList.toggle('noscroll');
    overlay.classList.toggle('visible');
});

links.forEach(function (link) {
    link.addEventListener('click', function () {
        menu.classList.toggle('active');
        button.classList.toggle('cross');
        body.classList.toggle('noscroll');
        overlay.classList.toggle('visible');
    });
});

overlay.addEventListener('click', function () {
    this.classList.remove('visible');
    menu.classList.remove('active');
    body.classList.remove('noscroll');
    button.classList.remove('cross');
});

window.addEventListener('resize', function () {
    menu.classList.remove('active');
    body.classList.remove('noscroll');
    button.classList.remove('cross');
    overlay.classList.remove('visible');
});