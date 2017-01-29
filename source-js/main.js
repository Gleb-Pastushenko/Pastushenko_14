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

        dotData : true,

        center : false,

        margin : 31,

        autoWidth : true
    });
});

$(document).ready(function () {
    $(".owl-carousel.about-us-slider").owlCarousel({

        nav : true,

        startPosition : 3,

        center : true,

        margin : 60,

        autoWidth : true

    });
});