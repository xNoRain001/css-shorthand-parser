const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border left', () => {
  const t = {
    '1px': {
      'border-left-width': 'unset',
      'border-left-style': 'unset',
      'border-left-color': 'unset'
    },
    '1px solid': {
      'border-left-width': 'unset',
      'border-left-style': 'unset',
      'border-left-color': 'unset'
    },
    '1px solid red': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'red'
    },
    '1px red solid': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'red'
    },
    'solid 1px red': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'red'
    },
    'solid red 1px': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'red'
    },
    'red 1px solid': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'red'
    },
    'red solid 1px': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'red'
    },
    '1px solid #000': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': '#000'
    },
    '1px solid rgb(0, 0, 0)': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'rgb(0,0,0)'
    },
    '1px solid rgba(255, 0, 0, 0.5)': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'rgba(255,0,0,0.5)'
    },
    '1px solid hsl(0, 100%, 50%)': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'hsl(0,100%,50%)'
    },
    '1px solid hsla(0, 100%, 50%, 0.5)': {
      'border-left-width': '1px',
      'border-left-style': 'solid',
      'border-left-color': 'hsla(0,100%,50%,0.5)'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-left', key)).toStrictEqual(t[key])
  }
})
