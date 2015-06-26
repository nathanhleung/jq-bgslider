# Minimalist jQuery Background Switcher
A lightweight and minimal background image switcher/slider written in jQuery.

## Demo
[http://leungenterprises.github.io/mini-jquery-bgswitcher/](http://leungenterprises.github.io/mini-jquery-bgswitcher/)

## Usage
This will create a full-page background.  Make sure you have the following in your CSS:
```
body {
    position: relative;
    overflow-x: hidden;
}
.bg-slider-img {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-size: cover;
}
```

Parameters:

```
<script src='./mini-jquery-bgswitcher.min.js'></script>
<script>
  var params = {
      images: ['http://i.imgur.com/gz0Yq3E.jpg', 'http://i.imgur.com/e3Fjb93.jpg'],
      el: 'body',
      animDuration: 500,
      slideDuration: 1000
  };
  
  bgSlider(params);
</scipt>
```
