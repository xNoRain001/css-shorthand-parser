const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border bottom', () => {
  const t = {
    '1px': {
      'border-bottom-width': 'none',
      'border-bottom-style': 'none',
      'border-bottom-color': 'none'
    },
    '1px solid': {
      'border-bottom-width': 'none',
      'border-bottom-style': 'none',
      'border-bottom-color': 'none'
    },
    '1px solid red': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'red'
    },
    '1px red solid': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'red'
    },
    'solid 1px red': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'red'
    },
    'solid red 1px': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'red'
    },
    'red 1px solid': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'red'
    },
    'red solid 1px': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'red'
    },
    '1px solid #000': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': '#000'
    },
    '1px solid rgb(0, 0, 0)': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'rgb(0,0,0)'
    },
    '1px solid rgb(0 , 0 , 0)': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'rgb(0,0,0)'
    },
    '1px solid rgba(255, 0, 0, 0.5)': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'rgba(255,0,0,0.5)'
    },
    '1px solid hsl(0, 100%, 50%)': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'hsl(0,100%,50%)'
    },
    '1px solid hsla(0, 100%, 50%, 0.5)': {
      'border-bottom-width': '1px',
      'border-bottom-style': 'solid',
      'border-bottom-color': 'hsla(0,100%,50%,0.5)'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-bottom', key)).toStrictEqual(t[key])
  }
})
