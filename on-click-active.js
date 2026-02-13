$( document ).ready(function() {

    $('.on-click-active').on('click', function () {
        $(this).toggleClass('active');
    });

    $('.single-on-click-active').on('click', function () {
        $('.single-on-click-active').not(this).removeClass('active');
        $(this).toggleClass('active');
    });

});
