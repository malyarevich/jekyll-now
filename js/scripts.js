jQuery( document ).ready(function () {
    jQuery(".menu-box button").click(function () {
        if ( jQuery(".navbar-collapse").is(":visible") ) {
            jQuery(".menu-box__hamb").slideDown(1000);
            jQuery(".menu-box__open").slideUp(1000);
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 0)");
        } else {
            jQuery(".menu-box__hamb").slideUp(1000);
            jQuery(".menu-box__open").slideDown(1000);
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 1)");
        }
    });
});