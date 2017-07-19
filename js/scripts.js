jQuery( document ).ready(function () {
    jQuery(".menu-box button").click(function () {
        if ( jQuery(".navbar-collapse").is(":visible") ) {
            jQuery(".menu-box__hamb").show();
            jQuery(".menu-box__open").hide();
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 0)");
        } else {
            jQuery(".menu-box__hamb").hide();
            jQuery(".menu-box__open").show();
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 1)");
        }
    });
});