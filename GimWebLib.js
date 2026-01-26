function initCarousel() {
    const carousel = $('.carousel')
    const carouselChilds = carousel.children()
    carouselChilds.clone().appendTo(carousel);

    var childHeight = carousel.outerHeight();
    $('.module-carousel').height(childHeight);
}


jQuery(document).ready(function ($) {
    initCarousel();
});
