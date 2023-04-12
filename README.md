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
shorthandParser('margin', '10px 20px 30px') 
// {
//   'margin-top': '10px',
//   'margin-right': '20px',
//   'margin-bottom': '30px',
//   'margin-left': '20px'
// }

shorthandParser('border', 'red 1px solid')
// {
//   'border-width': '1px',
//   'border-style': 'solid',
//   'border-color': 'red'
// }

shorthandParser('flex', '2') 
// {
//   'flex-grow': 2,
//   'flex-shrink': 1,
//   'flex-basis': "0",
// }

shorthandParser('flex', '10em') 
// {
//   'flex-grow': 1,
//   'flex-shrink': 1,
//   'flex-basis': '10em',
// }

shorthandParser('flex', '2 30px') 
// {
//   'flex-grow': 2,
//   'flex-shrink': 1,
//   'flex-basis': '30px',
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
```
