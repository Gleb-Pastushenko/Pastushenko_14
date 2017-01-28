function mainMenuToggle() {
    var mainMenu = document.getElementById('main-menu');

    if (mainMenu.getAttribute('data-toggle') == 'hidden') {
        mainMenu.style.display = 'flex';
        mainMenu.setAttribute('data-toggle', 'visible');
    } else {
        mainMenu.style.display = 'none';
        mainMenu.setAttribute('data-toggle', 'hidden');
    }
}

$(document).ready(function () {
    $(".owl-carousel.header-slider").owlCarousel({
        dots : true,
        responsive : {
            0 : {
                items : 1
            },

            646 : {
                items : 2
            },

            939 : {
                items : 3
            },

            1232 : {
                items : 4
            }
        },

        center : true,

        margin : 31,

        autoWidth : true

    });
});
