const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border radius', () => {
  const t = {
    '1px': {
      'border-top-radius': '1px',
      'border-right-radius': '1px',
      'border-bottom-radius': '1px',
      'border-left-radius': '1px',
    },
    '1px 2px': {
      'border-top-radius': '1px',
      'border-right-radius': '2px',
      'border-bottom-radius': '1px',
      'border-left-radius': '2px',
    },
    '1px 2px 3px': {
      'border-top-radius': '1px',
      'border-right-radius': '2px',
      'border-bottom-radius': '3px',
      'border-left-radius': '2px',
    },
    '1px 2px 3px 4px': {
      'border-top-radius': '1px',
      'border-right-radius': '2px',
      'border-bottom-radius': '3px',
      'border-left-radius': '4px',
    },
    '1px 2% 3em 4px': {
      'border-top-radius': '1px',
      'border-right-radius': '2%',
      'border-bottom-radius': '3em',
      'border-left-radius': '4px',
    },
  }

  for (const key in t) {
    expect(shorthandParser('border-radius', key)).toStrictEqual(t[key])
  }
})
