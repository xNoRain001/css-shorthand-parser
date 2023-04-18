const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border radius', () => {
  const t = {
    '1px': {
      'border-top-left-radius': '1px',
      'border-top-right-radius': '1px',
      'border-bottom-right-radius': '1px',
      'border-bottom-left-radius': '1px'
    },
    '10% 20%': {
      'border-top-left-radius': '10%',
      'border-top-right-radius': '20%',
      'border-bottom-right-radius': '10%',
      'border-bottom-left-radius': '20%'
    },
    '0 0 50% 50%': {
      'border-top-left-radius': '0',
      'border-top-right-radius': '0',
      'border-bottom-right-radius': '50%',
      'border-bottom-left-radius': '50%'
    },
    '0 0 10% 50%': {
      'border-top-left-radius': '0',
      'border-top-right-radius': '0',
      'border-bottom-right-radius': '10%',
      'border-bottom-left-radius': '50%'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-radius', key)).toStrictEqual(t[key])
  }
})
