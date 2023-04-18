const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('border width', () => {
  const t = {
    '10px': {
      'border-top-width': '10px',
      'border-right-width': '10px',
      'border-bottom-width': '10px',
      'border-left-width': '10px'
    },
    '10px 20px': {
      'border-top-width': '10px',
      'border-right-width': '20px',
      'border-bottom-width': '10px',
      'border-left-width': '20px'
    },
    '10px 20px 30px': {
      'border-top-width': '10px',
      'border-right-width': '20px',
      'border-bottom-width': '30px',
      'border-left-width': '20px'
    },
    '10px 20px 30px 40px': {
      'border-top-width': '10px',
      'border-right-width': '20px',
      'border-bottom-width': '30px',
      'border-left-width': '40px'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-width', key)).toStrictEqual(t[key])
  }
})
