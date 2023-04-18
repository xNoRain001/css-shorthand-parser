const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border style', () => {
  const t = {
    'none': {
      'border-top-style': 'none',
      'border-right-style': 'none',
      'border-bottom-style': 'none',
      'border-left-style': 'none'
    },
    'dashed solid': {
      'border-top-style': 'dashed',
      'border-right-style': 'solid',
      'border-bottom-style': 'dashed',
      'border-left-style': 'solid'
    },
    'dashed double none': {
      'border-top-style': 'dashed',
      'border-right-style': 'double',
      'border-bottom-style': 'none',
      'border-left-style': 'double'
    },
    'dashed groove none dotted': {
      'border-top-style': 'dashed',
      'border-right-style': 'groove',
      'border-bottom-style': 'none',
      'border-left-style': 'dotted'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-style', key)).toStrictEqual(t[key])
  }
})
