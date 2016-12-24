/* global jQuery */

/**
 * Initializes the background slider
 * @param {array} options.images - The images to be used in the slider
 * @param {string} options.selector - The selector for the element to apply the background to
 * @param {number} options.slideDuration - The time each image is displayed before being slid over
 */

/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-webpack-loader-syntax */
const sliderCss = require('raw!./jq-bgslider.css');
/* eslint-enable */
/* eslint-enable */
/* eslint-enable */

function jqBgslider({
  images = [
    'https://i.imgur.com/gz0Yq3E.jpg',
    'https://i.imgur.com/e3Fjb93.jpg',
    'https://i.imgur.com/8FoJQYg.jpg',
    'https://i.imgur.com/PCmutZb.jpg',
    'https://i.imgur.com/mDxMTVJ.jpg',
    'https://i.imgur.com/RW9UPlA.jpg',
  ],
  selector = 'body',
  animDuration = 1000,
  slideDuration = 5000,
} = {}) {
  if (typeof jQuery === 'undefined') {
    throw new Error('jq-bgslider requires jQuery');
  }
  const $ = jQuery;
  // Add required css
  $('head').append(`<style>${sliderCss}</style>`);
  if (images.length < 2) {
    jQuery.error('You must provide at least two images to slide through.');
  }
  if (slideDuration < animDuration * 1.5) {
    jQuery.error('The slide duration must be at least 50% longer than the animation duration.');
  }
  if (images.length < 2) {
    jQuery.error('You must select at least two images.');
  }
  // For each image, append it to the body
  images.forEach((image, i) => {
    $(selector).append(`<div class="bg-slider-img", id="img${i}"></div>`);
    $(`#img${i}`).css('background-image', `url("${image}")`);
    // Image 1 is at 0%, image 2 is at 100%
    if (i < 2) {
      $(`#img${i}`).css('left', `${100 * i}%`);
    } else {
      // Rest of images are at 200%
      $(`#img${i}`).css('left', '200%');
    }
  });
  // Keep track of how many times we've called changePic without a reset
  let counter = 0;
  function changePic() {
    // Counter value is index of current image
    let nextImage = counter + 1;
    let stagedImage = counter + 2;
    if (nextImage >= images.length) {
      nextImage -= images.length;
    }
    if (stagedImage >= images.length) {
      stagedImage -= images.length;
    }
    // Slide current image to -100%
    $(`#img${counter}`).animate({
      left: '-100%',
    }, {
      duration: animDuration,
      queue: false,
      complete() {
        // Once current image animation is done, put it back to 200%
        $(`#img${counter}`).css('left', '200%');
      },
    });
    // Slide next image to 0%;
    $(`#img${nextImage}`).animate({
      left: '0%',
    }, {
      duration: animDuration,
      queue: false,
      complete() {
        // Put staged image at 100%;
        $(`#img${stagedImage}`).css('left', '100%');
        counter = nextImage;
      },
    });
  }
  setInterval(changePic, slideDuration);
}

export default jqBgslider;
