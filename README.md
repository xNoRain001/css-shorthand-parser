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
<script src="../dist/css-shorthand-parser.js"></script>
```

```js
shorthandParser('margin', '10px') 
// {
//   'margin-top': '10px',
//   'margin-right': '10px',
//   'margin-bottom': '10px',
//   'margin-left': '10px'
// }

shorthandParser('margin', '10px 20px') 
// {
//   'margin-top': '10px',
//   'margin-right': '20px',
//   'margin-bottom': '10px',
//   'margin-left': '20px'
// }

shorthandParser('margin', '10px 20px 30px') 
// {
//   'margin-top': '10px',
//   'margin-right': '20px',
//   'margin-bottom': '30px',
//   'margin-left': '20px'
// }

shorthandParser('margin', '10px 20px 30px 40px') 
// {
//   'margin-top': '10px',
//   'margin-right': '20px',
//   'margin-bottom': '30px',
//   'margin-left': '40px'
// }
```
