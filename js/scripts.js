jQuery( document ).ready(function () {
    jQuery(".menu-box button").click(function () {
        jQuery(".menu-box__open").toggle();
        jQuery(".menu-box__hamb").toggle();
        if ( !jQuery(".menu-box__open").is(":visible") ) {
            jQuery(".menu-box").css("background-color", "rgb(80, 134, 185)");
        } else {
            jQuery(".menu-box").css("background-color", "rgba(80, 134, 185, 0)");
        }
    });
});