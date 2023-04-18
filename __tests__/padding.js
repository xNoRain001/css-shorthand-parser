const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('padding', () => {
  const t = {
    '10px': {
      'padding-top': '10px',
      'padding-right': '10px',
      'padding-bottom': '10px',
      'padding-left': '10px'
    },
    '10px 20px': {
      'padding-top': '10px',
      'padding-right': '20px',
      'padding-bottom': '10px',
      'padding-left': '20px'
    },
    '10px 20px 30px': {
      'padding-top': '10px',
      'padding-right': '20px',
      'padding-bottom': '30px',
      'padding-left': '20px'
    },
    '10px 20px 30px 40px': {
      'padding-top': '10px',
      'padding-right': '20px',
      'padding-bottom': '30px',
      'padding-left': '40px'
    }
  }

  for (const key in t) {
    expect(shorthandParser('padding', key)).toStrictEqual(t[key])
  }
})
