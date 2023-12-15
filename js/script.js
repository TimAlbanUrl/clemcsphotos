$(document).ready(function() {
    // Check if body height is higher than window height :)
    if ($("body").height() > $(window).height()) {
        alert("Vertical Scrollbar! D:");
    }

    // Check if body width is higher than window width :)
    if ($("body").width() > $(window).width()) {
        alert("Horizontal Scrollbar! D:<");
    }
});