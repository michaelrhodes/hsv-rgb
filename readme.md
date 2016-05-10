# hsv-rgb

Convert HSV values to RGB. This is essentially the hsv2rgb function found in [pqx/color-functions](https://github.com/pqx/color-functions), however this module returns an array rather than an dictionary.

[![Build status](https://travis-ci.org/michaelrhodes/hsv-rgb.svg?branch=master)](https://travis-ci.org/michaelrhodes/hsv-rgb)

## Install
```sh
$ npm install hsv-rgb
```

## API
```js
rgb(h, s, v)
```

### Example
``` js
var rgb = require('hsv-rgb')

rgb(36, 76, 86)
> [219, 153, 53]

rgb.apply(null, [36, 76, 86])
> [219, 153, 53]
```

### License
[MIT](http://opensource.org/licenses/MIT)
