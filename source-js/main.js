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
        responsive : {
            0: {
                items : 1
            },

            600: {
                items : 2
            },

            800: {
                items : 4
            }
        },

        dots : true
    });

});
