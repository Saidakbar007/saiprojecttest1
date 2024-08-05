
document.addEventListener('DOMContentLoaded', function() {
    var burger = document.getElementById('burger');
    var menu = document.getElementById('menu');

    burger.addEventListener('click', function() {
        menu.classList.toggle('open');
    });
});