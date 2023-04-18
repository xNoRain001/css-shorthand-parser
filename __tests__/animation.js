const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('animation', () => {
  const t = {
    '3s 2 slidein': {
      'animation-duration': '3s',
      'animation-delay': 'unset',
      'animation-timing-function': 'unset',
      'animation-iteration-count': '2',
      'animation-direction': 'unset',
      'animation-fill-mode': 'unset',
      'animation-play-state': 'unset',
      'animation-name': 'slidein'
    },
    '3s ease-in 1s 2 reverse both paused slidein': {
      'animation-duration': '3s',
      'animation-delay': '1s',
      'animation-timing-function': 'ease-in',
      'animation-iteration-count': '2',
      'animation-direction': 'reverse',
      'animation-fill-mode': 'both',
      'animation-play-state': 'paused',
      'animation-name': 'slidein'
    },
  }

  for (const key in t) {
    expect(shorthandParser('animation', key)).toStrictEqual(t[key])
  }
})
