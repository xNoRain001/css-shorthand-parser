const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('transition', () => {
  const t = {
    'margin-right 4s': {
      'transition-duration': '4s',
      'transition-delay': 'unset',
      'transition-timing-function': 'unset',
      'transition-property': 'margin-right'
    },
    'margin-right 4s 1s': {
      'transition-duration': '4s',
      'transition-delay': '1s',
      'transition-timing-function': 'unset',
      'transition-property': 'margin-right'
    },
    'margin-right 4s ease-in-out': {
      'transition-duration': '4s',
      'transition-delay': 'unset',
      'transition-timing-function': 'ease-in-out',
      'transition-property': 'margin-right'
    },
    'margin-right 4s ease-in-out 1s': {
      'transition-duration': '4s',
      'transition-delay': '1s',
      'transition-timing-function': 'ease-in-out',
      'transition-property': 'margin-right'
    }
  }

  for (const key in t) {
    expect(shorthandParser('transition', key)).toStrictEqual(t[key])
  }
})
