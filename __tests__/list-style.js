const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('list style', () => {
  const t = {
    'none': {
      'list-style-type': 'none',
      'list-style-image': 'unset',
      'list-style-position': 'unset'
    },
    'disc': {
      'list-style-type': 'disc',
      'list-style-image': 'unset',
      'list-style-position': 'unset'
    },
    'disc url("")': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'unset'
    },
    'disc none': {
      'list-style-type': 'disc',
      'list-style-image': 'none',
      'list-style-position': 'unset'
    },
    'none url("")': {
      'list-style-type': 'none',
      'list-style-image': 'url("")',
      'list-style-position': 'unset'
    },
    'none none inside': {
      'list-style-type': 'none',
      'list-style-image': 'none',
      'list-style-position': 'inside'
    },
    'disc url("") inside': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'inside'
    },
    'disc inside url("")': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'inside'
    },
    'inside disc url("")': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'inside'
    },
    'inside url("") disc': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'inside'
    },
    'url("") disc inside': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'inside'
    },
    'url("") inside disc': {
      'list-style-type': 'disc',
      'list-style-image': 'url("")',
      'list-style-position': 'inside'
    }
  }

  for (const key in t) {
    expect(shorthandParser('list-style', key)).toStrictEqual(t[key])
  }
})
