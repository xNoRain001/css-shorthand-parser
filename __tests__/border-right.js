const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border right', () => {
  const t = {
    '1px': {
      'border-right-width': 'none',
      'border-right-style': 'none',
      'border-right-color': 'none'
    },
    '1px solid': {
      'border-right-width': 'none',
      'border-right-style': 'none',
      'border-right-color': 'none'
    },
    '1px solid red': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'red'
    },
    '1px red solid': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'red'
    },
    'solid 1px red': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'red'
    },
    'solid red 1px': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'red'
    },
    'red 1px solid': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'red'
    },
    'red solid 1px': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'red'
    },
    '1px solid #000': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': '#000'
    },
    '1px solid rgb(0, 0, 0)': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'rgb(0,0,0)'
    },
    '1px solid rgba(255, 0, 0, 0.5)': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'rgba(255,0,0,0.5)'
    },
    '1px solid hsl(0, 100%, 50%)': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'hsl(0,100%,50%)'
    },
    '1px solid hsla(0, 100%, 50%, 0.5)': {
      'border-right-width': '1px',
      'border-right-style': 'solid',
      'border-right-color': 'hsla(0,100%,50%,0.5)'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-right', key)).toStrictEqual(t[key])
  }
})
