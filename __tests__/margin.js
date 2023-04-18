const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('margin', () => {
  const t = {
    '10px': {
      'margin-top': '10px',
      'margin-right': '10px',
      'margin-bottom': '10px',
      'margin-left': '10px'
    },
    '10px 20px': {
      'margin-top': '10px',
      'margin-right': '20px',
      'margin-bottom': '10px',
      'margin-left': '20px'
    },
    '10px 20px 30px': {
      'margin-top': '10px',
      'margin-right': '20px',
      'margin-bottom': '30px',
      'margin-left': '20px'
    },
    '10px 20px 30px 40px': {
      'margin-top': '10px',
      'margin-right': '20px',
      'margin-bottom': '30px',
      'margin-left': '40px'
    }
  }

  for (const key in t) {
    expect(shorthandParser('margin', key)).toStrictEqual(t[key])
  }
})
