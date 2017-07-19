jQuery( document ).ready(function () {
    jQuery(".menu-box>button").click(function () {
        if ( jQuery(".menu-box__open").is(":visible") ) {
            jQuery(".menu-box").css("background-color", "#5086B9");
            jQuery(".menu-box__open").hide();
            jQuery(".menu-box__hamb").show();
        } else {
            jQuery(".menu-box").css("background-color", "none");
            jQuery(".menu-box__open").show();
            jQuery(".menu-box__hamb").hide();
        }
    });
});