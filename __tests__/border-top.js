const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border top', () => {
  const t = {
    '1px': {
      'border-top-width': 'none',
      'border-top-style': 'none',
      'border-top-color': 'none'
    },
    '1px solid': {
      'border-top-width': 'none',
      'border-top-style': 'none',
      'border-top-color': 'none'
    },
    '1px solid red': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'red'
    },
    '1px red solid': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'red'
    },
    'solid 1px red': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'red'
    },
    'solid red 1px': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'red'
    },
    'red 1px solid': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'red'
    },
    'red solid 1px': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'red'
    },
    '1px solid #000': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': '#000'
    },
    '1px solid rgb(0, 0, 0)': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'rgb(0,0,0)'
    },
    '1px solid rgba(255, 0, 0, 0.5)': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'rgba(255,0,0,0.5)'
    },
    '1px solid hsl(0, 100%, 50%)': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'hsl(0,100%,50%)'
    },
    '1px solid hsla(0, 100%, 50%, 0.5)': {
      'border-top-width': '1px',
      'border-top-style': 'solid',
      'border-top-color': 'hsla(0,100%,50%,0.5)'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-top', key)).toStrictEqual(t[key])
  }
})
