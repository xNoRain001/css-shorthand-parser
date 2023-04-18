const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('font', () => {
  const t = {
    caption: {
      'font-size': 'unset',
      'line-height': 'unset',
      'font-weight': 'unset',
      'font-style': 'unset',
      'font-family': 'caption'
    },
    '13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': 'unset',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    '13px/2.5 serif': {
      'font-size': '13px',
      'line-height': '2.5',
      'font-weight': 'unset',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    'bold 13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': 'bold',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    '800 13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': '800',
      'font-style': 'unset',
      'font-family': 'serif'
    },
    'normal 13px serif': {
      'font-size': '13px',
      'line-height': 'unset',
      'font-weight': 'normal',
      'font-style': 'normal',
      'font-family': 'serif'
    }
  }

  for (const key in t) {
    expect(shorthandParser('font', key)).toStrictEqual(t[key])
  }
})
