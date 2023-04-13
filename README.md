## Introduction

Parse css shorthand prop.

## Installation

```
npm install css-shorthand-parser
```

## Usage

```js
// CommonJS
const shorthandParser = require('css-shorthand-parser')
```

```js
// ESModule
import shorthandParser from 'css-shorthand-parser'
```

```html
<!-- Script -->
<script src="../dist/css-shorthand-parser.min.js"></script>
```

```js
shorthandParser('flex', '2') 
// {
//   'flex-grow': 2,
//   'flex-shrink': 1,
//   'flex-basis': "0",
// }

shorthandParser('animation', '3s 2 slidein')
// {
//   'animation-duration': '3s',
//   'animation-delay': 'unset',
//   'animation-timing-function': 'unset',
//   'animation-iteration-count': '2',
//   'animation-direction': 'unset',
//   'animation-fill-mode': 'unset',
//   'animation-play-state': 'unset',
//   'animation-name': 'slidein'
// }

shorthandParser('animation', '3s ease-in 1s 2 reverse both paused slidein')
// {
//   'animation-duration': '3s',
//   'animation-delay': '1s',
//   'animation-timing-function': 'ease-in',
//   'animation-iteration-count': '2',
//   'animation-direction': 'reverse',
//   'animation-fill-mode': 'both',
//   'animation-play-state': 'paused',
//   'animation-name': 'slidein'
// }

shorthandParser('background', 'no-repeat center/80% url("../img/image.png")')
// {
//   'background-repeat': 'no-repeat',
//   'background-origin': 'unset',
//   'background-clip': 'unset',
//   'background-attachment': 'unset',
//   'background-image': 'url("../img/image.png")',
//   'background-position': 'center',
//   'background-size': '80%',
//   'background-color': 'unset' 
// }

shorthandParser('background', 'scroll border-box center/50% auto no-repeat red')
// {
//   'background-repeat': 'no-repeat',
//   'background-origin': 'border-box',
//   'background-clip': 'border-box',
//   'background-attachment': 'scroll',
//   'background-image': 'unset',
//   'background-position': 'center',
//   'background-size': '50% auto',
//   'background-color': 'red' 
// }
```
