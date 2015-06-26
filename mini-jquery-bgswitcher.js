var bgSlider = function(params) {
    if (typeof params === "undefined") {
        params = {};
    }
    if (typeof params.images === "undefined") {
        params.images = ['http://i.imgur.com/gz0Yq3E.jpg', 'http://i.imgur.com/e3Fjb93.jpg', 'http://i.imgur.com/8FoJQYg.jpg'];
    }
    if (typeof params.el === "undefined") {
        params.el = 'body';
    }
    if (typeof params.animDuration === "undefined") {
        params.animDuration = 1000;
    }
    if (typeof params.slideDuration === "undefined") {
        params.slideDuration = 5000;
    }
    if (params.slideDuration < params.animDuration * 1.5) {
        jQuery.error('The slide duration must be at least 50% longer than the animation duration.');
    }
    if (params.images.length < 2) {
        jQuery.error('You must select at least two images.');
    }
    var images = params.images;
    for (var image in images) {
       $(params.el).append('<div class="bg-slider-img", id="img' + image + '"></div>');
       $('#img' + image).css('background-image', 'url("' + images[image] + '")');
       $('#img' + image).css('left',  String(-100 * image) + '%');
    }
    var counter = 0;
    var changePic = function() {
        $('.bg-slider-img').animate({
            left: '+=100%'
        }, params.animDuration, function() {
            if ((counter - (images.length - 1)) % (images.length) === 0) {
                var slidedImg = ((counter - (images.length - 1)) / (images.length)) % images.length;
                $('#img' + slidedImg).css('left', String(-100 * (images.length - 1)) + '%');
            }
            counter = (counter + 1) % (images.length * images.length);
        });
    };
    setInterval(changePic, params.slideDuration);
};
