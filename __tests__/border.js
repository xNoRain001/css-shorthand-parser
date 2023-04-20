const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border', () => {
  const t = {
    '1px': {
      'border-width': 'unset',
      'border-style': 'unset',
      'border-color': 'unset'
    },
    '1px solid': {
      'border-width': 'unset',
      'border-style': 'unset',
      'border-color': 'unset'
    },
    '1px solid red': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    '1px red solid': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'solid 1px red': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'solid red 1px': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'red 1px solid': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'red solid 1px': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    '1px solid #000': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': '#000'
    },
    '1px solid rgb(0, 0, 0)': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'rgb(0,0,0)'
    },
    '1px solid rgba(255, 0, 0, 0.5)': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'rgba(255,0,0,0.5)'
    },
    '1px solid hsl(0, 100%, 50%)': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsl(0,100%,50%)'
    },
    '1px solid hsla(0, 100%, 50%, 0.5)': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'hsla(0,100%,50%,0.5)'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border', key)).toStrictEqual(t[key])
  }
})
