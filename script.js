'use strict';

document.addEventListener('DOMContentLoaded', function loaded() {

    let burgerIcon = document.querySelector('.burger-icon');
    let nav = document.querySelector('nav ul');

    function onClickShowNav() {
        
    }

    burgerIcon.addEventListener('click', function onClickShowNav() {

        if (!/a11y-hidden/gi.test(nav.className)) {

            nav.className += ' a11y-hidden';
        } else {
            nav.className = nav.className.replace(/a11y-hidden/, '');
        }
    });

    if (window.innerWidth >= 768) {
        if (/a11y-hidden/gi.test(nav.className)) {
            nav.className = nav.className.replace(/a11y-hidden/, '');
        }
    }
});