const burgerMenu = document.querySelector('.header__burger-menu');
const burgerMenuList = document.querySelector('.header__burger-list');
const applicationModal = document.querySelector('.application-modal');

function burgerListShow() {
    document.body.classList.add('_lock');
    burgerMenu.classList.add('_active');
    burgerMenuList.classList.add('_active');
}

function burgerListClose() {
    document.body.classList.remove('_lock');
    burgerMenu.classList.remove('_active');
    burgerMenuList.classList.remove('_active');
}

document.body.addEventListener('click', e => {
    if (e.target.closest('.header__burger-list') && !e.target.classList.contains('_active')) {
        burgerListShow();
    } else if (!e.target.closest('.header__burger-list')) {
        burgerListClose();
    } else if (e.target.classList.contains('header__burger-menu') ||
        e.target.closest('header__burger-menu')) {
        burgerListClose();
    }
});


const sendApplicationButton = document.querySelector('.header__button-leave-request');

function animate(elem, style, unit, from, to, time, prop) {
    if (!elem) {
        return;
    }
    var start = new Date().getTime(),
        timer = setInterval(function () {
            var step = Math.min(1, (new Date().getTime() - start) / time);
            if (prop) {
                elem[style] = (from + step * (to - from)) + unit;
            } else {
                elem.style[style] = (from + step * (to - from)) + unit;
            }
            if (step === 1) {
                clearInterval(timer);
            }
        }, 25);
    if (prop) {
        elem[style] = from + unit;
    } else {
        elem.style[style] = from + unit;
    }
}

sendApplicationButton.addEventListener('click', e => {
    var target = document.getElementById("send-application");
    animate(document.scrollingElement || document.documentElement, "scrollTop", "", 0, target.offsetTop, 2000, true);
});