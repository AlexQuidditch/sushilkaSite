$(document).ready(function() {

    Waves.init();
    Waves.attach('[ripple-dark]', ['waves-dark']);
    Waves.attach('[ripple-light]', ['waves-light']);

    $('#flickity').flickity({
        autoPlay: 30000,
        pageDots: false,
        prevNextButtons: false,
        lazyLoad: true,
        wrapAround: true
    });
});

var circle = document.getElementById('menuButton'),
    sidebar = document.getElementById('sidebar__list'),
    items = document.querySelectorAll('.sidebar__item');

circle.addEventListener('click', function(e) {
    e.preventDefault();
    Velocity(items, {
        'color': '#fff'
    }, {
        duration: 50
    });
    if (sidebar.classList.contains('is-opened')) {
        Velocity(sidebar, {
            width: '50px',
            'border-radius': '100%'
        }, {
            delay: 200,
            duration: 300,
            easing: 'ease-in-out',
            queue: false
        });
        Velocity(sidebar, {
            height: '35px',
        }, {
            delay: 100,
            duration: 400,
            easing: 'ease-in-out',
            queue: false
        });
        circle.classList.toggle('is-active')
        sidebar.classList.toggle('is-opened')
    } else {
        Velocity(sidebar, {
            width: '200px'
        }, {
            duration: 300,
            easing: 'ease-in-out',
            queue: false
        });
        Velocity(sidebar, {
            height: '496px',
            'border-radius': '0%'
        }, {
            duration: 400,
            easing: 'ease-in-out',
            queue: false
        });
        Velocity(items, {
            'color': '#8d3a3a'
        }, {
            duration: 300
        });
        circle.classList.toggle('is-active')
        sidebar.classList.toggle('is-opened')
    }
});

// Cart

var Cart = document.getElementById('cart'),

    // Containers
    CartHeader = document.getElementById('cart__header'),
    CartBody = document.getElementById('cart__body'),
    CartFooter = document.getElementById('cart__footer'),

    // Buttons
    CartButtonOpen = document.getElementById('cart__open'),
    CartButtonOpenIcon = document.getElementById('cart__open-icon'),
    CartButtonClear = document.getElementById('cart__clear'),
    CartButtonClose = document.getElementById('cart__close'),
    CartButtonsRemove = document.getElementsByClassName('product-table__remove-button'),
    Modal = document.getElementById('modal'),
    ModalOpen = document.getElementById('modal__open'),
    ModalClose = document.getElementById('modal__close');

CartButtonOpen.addEventListener('click', _CartOpen);

CartButtonClear.addEventListener('click', _CartClear);

CartButtonClose.addEventListener('click', _CartClose);

ModalOpen.addEventListener('click', _ModalOpen);

ModalClose.addEventListener('click', _ModalClose);

document.onkeydown = function(e) {
        if(e.which == 27) {
        _CartClose(e)
        _ModalClose(e)
    }
};

function _CartOpen(e) {
    e.preventDefault()
    Cart.classList.add('is-opened')
    CartButtonOpen.classList.add('is-opened')
    CartButtonOpenIcon.classList.add('is-opened')
};

function _CartClear(e) {
    e.preventDefault();
    cart.clearBasket()
    Cart.classList.remove('is-opened')
    CartButtonOpen.classList.remove('is-opened')
    CartButtonOpenIcon.classList.remove('is-opened')
};

function _CartClose(e) {
    e.preventDefault()
    Cart.classList.remove('is-opened')
    CartButtonOpen.classList.remove('is-opened')
    CartButtonOpenIcon.classList.remove('is-opened')
};

function _ModalOpen(e) {
    e.preventDefault()
    Modal.classList.add('is-opened')
};

function _ModalClose(e) {
    e.preventDefault()
    Modal.classList.remove('is-opened')
};
