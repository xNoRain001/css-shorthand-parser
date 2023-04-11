const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('test margin', () => {
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

test('test padding', () => {
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

test('test border width', () => {
  const t = {
    '10px': {
      'border-width-top': '10px',
      'border-width-right': '10px',
      'border-width-bottom': '10px',
      'border-width-left': '10px'
    },
    '10px 20px': {
      'border-width-top': '10px',
      'border-width-right': '20px',
      'border-width-bottom': '10px',
      'border-width-left': '20px'
    },
    '10px 20px 30px': {
      'border-width-top': '10px',
      'border-width-right': '20px',
      'border-width-bottom': '30px',
      'border-width-left': '20px'
    },
    '10px 20px 30px 40px': {
      'border-width-top': '10px',
      'border-width-right': '20px',
      'border-width-bottom': '30px',
      'border-width-left': '40px'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-width', key)).toStrictEqual(t[key])
  }
})
