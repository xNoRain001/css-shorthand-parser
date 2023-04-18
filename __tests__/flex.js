const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('flex', () => {
  const t = {
    'auto': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'auto',
    },
    'initial': {
      'flex-grow': 0,
      'flex-shrink': 1,
      'flex-basis': 'auto',
    },
    'none': {
      'flex-grow': 0,
      'flex-shrink': 0,
      'flex-basis': 'auto',
    },
    2: {
      'flex-grow': 2,
      'flex-shrink': 1,
      'flex-basis': "0",
    },
    '30px': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': '30px',
    },
    '10em': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': '10em',
    },
    'auto': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'auto',
    },
    'fill': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'fill',
    },
    'max-content': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'max-content',
    },
    'min-content': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'min-content',
    },
    'fit-content': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'fit-content',
    },
    'content': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': 'content',
    },
    '1 30px': {
      'flex-grow': 1,
      'flex-shrink': 1,
      'flex-basis': '30px',
    },
    '2 2': {
      'flex-grow': 2,
      'flex-shrink': 2,
      'flex-basis': "0",
    },
    '2 2 10%': {
      'flex-grow': 2,
      'flex-shrink': 2,
      'flex-basis': '10%',
    }
  }

  for (const key in t) {
    expect(shorthandParser('flex', key)).toStrictEqual(t[key])
  }
})
