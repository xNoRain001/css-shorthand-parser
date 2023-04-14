const shorthandParser = require('../dist/css-shorthand-parser.min.js')

// test('test margin', () => {
//   const t = {
//     '10px': {
//       'margin-top': '10px',
//       'margin-right': '10px',
//       'margin-bottom': '10px',
//       'margin-left': '10px'
//     },
//     '10px 20px': {
//       'margin-top': '10px',
//       'margin-right': '20px',
//       'margin-bottom': '10px',
//       'margin-left': '20px'
//     },
//     '10px 20px 30px': {
//       'margin-top': '10px',
//       'margin-right': '20px',
//       'margin-bottom': '30px',
//       'margin-left': '20px'
//     },
//     '10px 20px 30px 40px': {
//       'margin-top': '10px',
//       'margin-right': '20px',
//       'margin-bottom': '30px',
//       'margin-left': '40px'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('margin', key)).toStrictEqual(t[key])
//   }
// })

// test('test padding', () => {
//   const t = {
//     '10px': {
//       'padding-top': '10px',
//       'padding-right': '10px',
//       'padding-bottom': '10px',
//       'padding-left': '10px'
//     },
//     '10px 20px': {
//       'padding-top': '10px',
//       'padding-right': '20px',
//       'padding-bottom': '10px',
//       'padding-left': '20px'
//     },
//     '10px 20px 30px': {
//       'padding-top': '10px',
//       'padding-right': '20px',
//       'padding-bottom': '30px',
//       'padding-left': '20px'
//     },
//     '10px 20px 30px 40px': {
//       'padding-top': '10px',
//       'padding-right': '20px',
//       'padding-bottom': '30px',
//       'padding-left': '40px'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('padding', key)).toStrictEqual(t[key])
//   }
// })

// test('test border width', () => {
//   const t = {
//     '10px': {
//       'border-top-width': '10px',
//       'border-right-width': '10px',
//       'border-bottom-width': '10px',
//       'border-left-width': '10px'
//     },
//     '10px 20px': {
//       'border-top-width': '10px',
//       'border-right-width': '20px',
//       'border-bottom-width': '10px',
//       'border-left-width': '20px'
//     },
//     '10px 20px 30px': {
//       'border-top-width': '10px',
//       'border-right-width': '20px',
//       'border-bottom-width': '30px',
//       'border-left-width': '20px'
//     },
//     '10px 20px 30px 40px': {
//       'border-top-width': '10px',
//       'border-right-width': '20px',
//       'border-bottom-width': '30px',
//       'border-left-width': '40px'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-width', key)).toStrictEqual(t[key])
//   }
// })

// test('test border style', () => {
//   const t = {
//     'none': {
//       'border-top-style': 'none',
//       'border-right-style': 'none',
//       'border-bottom-style': 'none',
//       'border-left-style': 'none'
//     },
//     'dashed solid': {
//       'border-top-style': 'dashed',
//       'border-right-style': 'solid',
//       'border-bottom-style': 'dashed',
//       'border-left-style': 'solid'
//     },
//     'dashed double none': {
//       'border-top-style': 'dashed',
//       'border-right-style': 'double',
//       'border-bottom-style': 'none',
//       'border-left-style': 'double'
//     },
//     'dashed groove none dotted': {
//       'border-top-style': 'dashed',
//       'border-right-style': 'groove',
//       'border-bottom-style': 'none',
//       'border-left-style': 'dotted'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-style', key)).toStrictEqual(t[key])
//   }
// })

// test('test border color', () => {
//   const t = {
//     'red': {
//       'border-top-color': 'red',
//       'border-right-color': 'red',
//       'border-bottom-color': 'red',
//       'border-left-color': 'red'
//     },
//     'red #f015ca': {
//       'border-top-color': 'red',
//       'border-right-color': '#f015ca',
//       'border-bottom-color': 'red',
//       'border-left-color': '#f015ca'
//     },
//     'red yellow green': {
//       'border-top-color': 'red',
//       'border-right-color': 'yellow',
//       'border-bottom-color': 'green',
//       'border-left-color': 'yellow'
//     },
//     'red yellow green blue': {
//       'border-top-color': 'red',
//       'border-right-color': 'yellow',
//       'border-bottom-color': 'green',
//       'border-left-color': 'blue'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-color', key)).toStrictEqual(t[key])
//   }
// })

// test('test border', () => {
//   const t = {
//     '1px': {
//       'border-width': 'none',
//       'border-style': 'none',
//       'border-color': 'none'
//     },
//     '1px solid': {
//       'border-width': 'none',
//       'border-style': 'none',
//       'border-color': 'none'
//     },
//     '1px solid red': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'red'
//     },
//     '1px red solid': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'red'
//     },
//     'solid 1px red': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'red'
//     },
//     'solid red 1px': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'red'
//     },
//     'red 1px solid': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'red'
//     },
//     'red solid 1px': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'red'
//     },
//     '1px solid #000': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': '#000'
//     },
//     '1px solid rgb(0, 0, 0)': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'rgb(0,0,0)'
//     },
//     '1px solid rgba(255, 0, 0, 0.5)': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'rgba(255,0,0,0.5)'
//     },
//     '1px solid hsl(0, 100%, 50%)': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'hsl(0,100%,50%)'
//     },
//     '1px solid hsla(0, 100%, 50%, 0.5)': {
//       'border-width': '1px',
//       'border-style': 'solid',
//       'border-color': 'hsla(0,100%,50%,0.5)'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border', key)).toStrictEqual(t[key])
//   }
// })

// test('test border top', () => {
//   const t = {
//     '1px': {
//       'border-top-width': 'none',
//       'border-top-style': 'none',
//       'border-top-color': 'none'
//     },
//     '1px solid': {
//       'border-top-width': 'none',
//       'border-top-style': 'none',
//       'border-top-color': 'none'
//     },
//     '1px solid red': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'red'
//     },
//     '1px red solid': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'red'
//     },
//     'solid 1px red': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'red'
//     },
//     'solid red 1px': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'red'
//     },
//     'red 1px solid': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'red'
//     },
//     'red solid 1px': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'red'
//     },
//     '1px solid #000': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': '#000'
//     },
//     '1px solid rgb(0, 0, 0)': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'rgb(0,0,0)'
//     },
//     '1px solid rgba(255, 0, 0, 0.5)': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'rgba(255,0,0,0.5)'
//     },
//     '1px solid hsl(0, 100%, 50%)': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'hsl(0,100%,50%)'
//     },
//     '1px solid hsla(0, 100%, 50%, 0.5)': {
//       'border-top-width': '1px',
//       'border-top-style': 'solid',
//       'border-top-color': 'hsla(0,100%,50%,0.5)'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-top', key)).toStrictEqual(t[key])
//   }
// })

// test('test border right', () => {
//   const t = {
//     '1px': {
//       'border-right-width': 'none',
//       'border-right-style': 'none',
//       'border-right-color': 'none'
//     },
//     '1px solid': {
//       'border-right-width': 'none',
//       'border-right-style': 'none',
//       'border-right-color': 'none'
//     },
//     '1px solid red': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'red'
//     },
//     '1px red solid': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'red'
//     },
//     'solid 1px red': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'red'
//     },
//     'solid red 1px': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'red'
//     },
//     'red 1px solid': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'red'
//     },
//     'red solid 1px': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'red'
//     },
//     '1px solid #000': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': '#000'
//     },
//     '1px solid rgb(0, 0, 0)': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'rgb(0,0,0)'
//     },
//     '1px solid rgba(255, 0, 0, 0.5)': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'rgba(255,0,0,0.5)'
//     },
//     '1px solid hsl(0, 100%, 50%)': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'hsl(0,100%,50%)'
//     },
//     '1px solid hsla(0, 100%, 50%, 0.5)': {
//       'border-right-width': '1px',
//       'border-right-style': 'solid',
//       'border-right-color': 'hsla(0,100%,50%,0.5)'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-right', key)).toStrictEqual(t[key])
//   }
// })

// test('test border bottom', () => {
//   const t = {
//     '1px': {
//       'border-bottom-width': 'none',
//       'border-bottom-style': 'none',
//       'border-bottom-color': 'none'
//     },
//     '1px solid': {
//       'border-bottom-width': 'none',
//       'border-bottom-style': 'none',
//       'border-bottom-color': 'none'
//     },
//     '1px solid red': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'red'
//     },
//     '1px red solid': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'red'
//     },
//     'solid 1px red': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'red'
//     },
//     'solid red 1px': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'red'
//     },
//     'red 1px solid': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'red'
//     },
//     'red solid 1px': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'red'
//     },
//     '1px solid #000': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': '#000'
//     },
//     '1px solid rgb(0, 0, 0)': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'rgb(0,0,0)'
//     },
//     '1px solid rgb(0 , 0 , 0)': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'rgb(0,0,0)'
//     },
//     '1px solid rgba(255, 0, 0, 0.5)': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'rgba(255,0,0,0.5)'
//     },
//     '1px solid hsl(0, 100%, 50%)': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'hsl(0,100%,50%)'
//     },
//     '1px solid hsla(0, 100%, 50%, 0.5)': {
//       'border-bottom-width': '1px',
//       'border-bottom-style': 'solid',
//       'border-bottom-color': 'hsla(0,100%,50%,0.5)'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-bottom', key)).toStrictEqual(t[key])
//   }
// })

// test('test border left', () => {
//   const t = {
//     '1px': {
//       'border-left-width': 'none',
//       'border-left-style': 'none',
//       'border-left-color': 'none'
//     },
//     '1px solid': {
//       'border-left-width': 'none',
//       'border-left-style': 'none',
//       'border-left-color': 'none'
//     },
//     '1px solid red': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'red'
//     },
//     '1px red solid': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'red'
//     },
//     'solid 1px red': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'red'
//     },
//     'solid red 1px': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'red'
//     },
//     'red 1px solid': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'red'
//     },
//     'red solid 1px': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'red'
//     },
//     '1px solid #000': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': '#000'
//     },
//     '1px solid rgb(0, 0, 0)': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'rgb(0,0,0)'
//     },
//     '1px solid rgba(255, 0, 0, 0.5)': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'rgba(255,0,0,0.5)'
//     },
//     '1px solid hsl(0, 100%, 50%)': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'hsl(0,100%,50%)'
//     },
//     '1px solid hsla(0, 100%, 50%, 0.5)': {
//       'border-left-width': '1px',
//       'border-left-style': 'solid',
//       'border-left-color': 'hsla(0,100%,50%,0.5)'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('border-left', key)).toStrictEqual(t[key])
//   }
// })

// test('test list style', () => {
//   const t = {
//     'disc': {
//       'list-style-type': 'none',
//       'list-style-image': 'none',
//       'list-style-position': 'none'
//     },
//     'disc url("")': {
//       'list-style-type': 'none',
//       'list-style-image': 'none',
//       'list-style-position': 'none'
//     },
//     'disc url("") inside': {
//       'list-style-type': 'disc',
//       'list-style-image': 'url("")',
//       'list-style-position': 'inside'
//     },
//     'disc inside url("")': {
//       'list-style-type': 'disc',
//       'list-style-image': 'url("")',
//       'list-style-position': 'inside'
//     },
//     'inside disc url("")': {
//       'list-style-type': 'disc',
//       'list-style-image': 'url("")',
//       'list-style-position': 'inside'
//     },
//     'inside url("") disc': {
//       'list-style-type': 'disc',
//       'list-style-image': 'url("")',
//       'list-style-position': 'inside'
//     },
//     'url("") disc inside': {
//       'list-style-type': 'disc',
//       'list-style-image': 'url("")',
//       'list-style-position': 'inside'
//     },
//     'url("") inside disc': {
//       'list-style-type': 'disc',
//       'list-style-image': 'url("")',
//       'list-style-position': 'inside'
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('list-style', key)).toStrictEqual(t[key])
//   }
// })

// test('test flex', () => {
//   const t = {
//     'auto': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'auto',
//     },
//     'initial': {
//       'flex-grow': 0,
//       'flex-shrink': 1,
//       'flex-basis': 'auto',
//     },
//     'none': {
//       'flex-grow': 0,
//       'flex-shrink': 0,
//       'flex-basis': 'auto',
//     },
//     2: {
//       'flex-grow': 2,
//       'flex-shrink': 1,
//       'flex-basis': "0",
//     },
//     '30px': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': '30px',
//     },
//     '10em': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': '10em',
//     },
//     'auto': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'auto',
//     },
//     'fill': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'fill',
//     },
//     'max-content': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'max-content',
//     },
//     'min-content': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'min-content',
//     },
//     'fit-content': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'fit-content',
//     },
//     'content': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': 'content',
//     },
//     '1 30px': {
//       'flex-grow': 1,
//       'flex-shrink': 1,
//       'flex-basis': '30px',
//     },
//     '2 2': {
//       'flex-grow': 2,
//       'flex-shrink': 2,
//       'flex-basis': "0",
//     },
//     '2 2 10%': {
//       'flex-grow': 2,
//       'flex-shrink': 2,
//       'flex-basis': '10%',
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('flex', key)).toStrictEqual(t[key])
//   }
// })

// test('test animation', () => {
//   const t = {
//     '3s 2 slidein': {
//       'animation-duration': '3s',
//       'animation-delay': 'unset',
//       'animation-timing-function': 'unset',
//       'animation-iteration-count': '2',
//       'animation-direction': 'unset',
//       'animation-fill-mode': 'unset',
//       'animation-play-state': 'unset',
//       'animation-name': 'slidein'
//     },
//     '3s ease-in 1s 2 reverse both paused slidein': {
//       'animation-duration': '3s',
//       'animation-delay': '1s',
//       'animation-timing-function': 'ease-in',
//       'animation-iteration-count': '2',
//       'animation-direction': 'reverse',
//       'animation-fill-mode': 'both',
//       'animation-play-state': 'paused',
//       'animation-name': 'slidein'
//     },
//   }

//   for (const key in t) {
//     expect(shorthandParser('animation', key)).toStrictEqual(t[key])
//   }
// })

// test('test background', () => {
//   const t = {
//     'repeat': {
//       'background-repeat': 'repeat',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'unset',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     'repeat-x border-box': {
//       'background-repeat': 'repeat-x',
//       'background-origin': 'border-box',
//       'background-clip': 'border-box',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'unset',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     'border-box content-box': {
//       'background-repeat': 'unset',
//       'background-origin': 'border-box',
//       'background-clip': 'content-box',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'unset',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     'scroll url("./foo.png")': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'scroll',
//       'background-image': 'url("./foo.png")',
//       'background-position': 'unset',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     'url("")': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'url("")',
//       'background-position': 'unset',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     'bottom': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'bottom',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     '10px': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': '10px',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     '20%': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': '20%',
//       'background-size': 'unset',
//       'background-color': 'unset'
//     },
//     'center /  80%': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'center',
//       'background-size': '80%',
//       'background-color': 'unset'
//     },
//     'center / 80% red': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'center',
//       'background-size': '80%',
//       'background-color': 'red'
//     },
//     'center / 80% auto red': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'center',
//       'background-size': '80% auto',
//       'background-color': 'red'
//     },
//     'center / 3px 25% red': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'center',
//       'background-size': '3px 25%',
//       'background-color': 'red'
//     },
//     'center / auto auto rgb(0,0,0)': {
//       'background-repeat': 'unset',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'unset',
//       'background-position': 'center',
//       'background-size': 'auto auto',
//       'background-color': 'rgb(0,0,0)'
//     },
//     'no-repeat center/80% url("../img/image.png")': {
//       'background-repeat': 'no-repeat',
//       'background-origin': 'unset',
//       'background-clip': 'unset',
//       'background-attachment': 'unset',
//       'background-image': 'url("../img/image.png")',
//       'background-position': 'center',
//       'background-size': '80%',
//       'background-color': 'unset' 
//     },
//     'scroll border-box center/50% auto no-repeat red': {
//       'background-repeat': 'no-repeat',
//       'background-origin': 'border-box',
//       'background-clip': 'border-box',
//       'background-attachment': 'scroll',
//       'background-image': 'unset',
//       'background-position': 'center',
//       'background-size': '50% auto',
//       'background-color': 'red' 
//     }
//   }

//   for (const key in t) {
//     expect(shorthandParser('background', key)).toStrictEqual(t[key])
//   }
// })

test('test font', () => {
  const t = {
    caption: {
      'font-size': 'unset',
      'line-height': 'unset',
      'font-weight': 'unset',
      'font-style': 'unset',
      'font-family': 'caption'
    },
    '13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': 'unset',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    '13px/2.5 serif': {
      'font-size': '13px',
      'line-height': '2.5',
      'font-weight': 'unset',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    'bold 13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': 'bold',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    '800 13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': '800',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    'normal 13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': 'normal',
      'font-style': 'normal',
      'font-family': 'serif'
    }
  }

  for (const key in t) {
    expect(shorthandParser('font', key)).toStrictEqual(t[key])
  }
})
