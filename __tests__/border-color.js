const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border color', () => {
  const t = {
    'red': {
      'border-top-color': 'red',
      'border-right-color': 'red',
      'border-bottom-color': 'red',
      'border-left-color': 'red'
    },
    'red #f015ca': {
      'border-top-color': 'red',
      'border-right-color': '#f015ca',
      'border-bottom-color': 'red',
      'border-left-color': '#f015ca'
    },
    'red yellow green': {
      'border-top-color': 'red',
      'border-right-color': 'yellow',
      'border-bottom-color': 'green',
      'border-left-color': 'yellow'
    },
    'red yellow green blue': {
      'border-top-color': 'red',
      'border-right-color': 'yellow',
      'border-bottom-color': 'green',
      'border-left-color': 'blue'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-color', key)).toStrictEqual(t[key])
  }
})
