# jq-bgslider ![Dependency Status](https://david-dm.org/nathanhleung/jq-bgslider.svg)
A simple full-page jQuery Background slider.

Creates a full-screen sliding image background on your `<body>`. Only 2.13kB minified.

## Usage
Insert the following at the end of your body tag.

```html
<script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
<script src="https://unpkg.com/jq-bgslider@2.0.1/build/jq-bgslider.min.js"></script>
<script>
  // Originally in ES6, so default export is accessed via .default
  jqBgslider.default({
    images = [
      'https://i.imgur.com/gz0Yq3E.jpg',
      'https://i.imgur.com/e3Fjb93.jpg',
      'https://i.imgur.com/8FoJQYg.jpg',
    ],
    slideDuration: 2000,
    animDuration: 500,
  });
</script>
```

## API

### `jqBgslider([options])`
Loads the background slider on the `<body>` with the provided options.

#### Arguments
* [`options`] _(Object)_: If specified, customizes the behavior of the background slider.
  * [`images`] _(Array)_: The images to be used in the background. Default value is a nice collection of nature images.
  * [`slideDuration`] _(Number)_: The time, in milliseconds, to stay on each image/slide before switching to the next. Default value: `5000`.
  * [`animDuration`] _(Number)_: The duration, in milliseconds, of the animation between each image/slide. Default value: `1000`.

## Examples
[jq-bgslider Demo](https://xyz.nathanhleung.com/mini-jquery-bgswitcher/)

In the demo site, a translucent white overlay is added with the following CSS:

```css
body::before {
  display: block;
  content: '';
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(255,255,255,0.7);
}
```
## License
[MIT](https://github.com/nathanhleung/jq-bgslider/blob/master/LICENSE)
