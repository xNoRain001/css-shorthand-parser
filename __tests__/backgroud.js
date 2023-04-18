const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('background', () => {
  const t = {
    'repeat': {
      'background-repeat': 'repeat',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'unset',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    'repeat-x border-box': {
      'background-repeat': 'repeat-x',
      'background-origin': 'border-box',
      'background-clip': 'border-box',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'unset',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    'border-box content-box': {
      'background-repeat': 'unset',
      'background-origin': 'border-box',
      'background-clip': 'content-box',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'unset',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    'scroll url("./foo.png")': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'scroll',
      'background-image': 'url("./foo.png")',
      'background-position': 'unset',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    'url("")': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'url("")',
      'background-position': 'unset',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    'bottom': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'bottom',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    '10px': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': '10px',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    '20%': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': '20%',
      'background-size': 'unset',
      'background-color': 'unset'
    },
    'center /  80%': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'center',
      'background-size': '80%',
      'background-color': 'unset'
    },
    'center / 80% red': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'center',
      'background-size': '80%',
      'background-color': 'red'
    },
    'center / 80% auto red': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'center',
      'background-size': '80% auto',
      'background-color': 'red'
    },
    'center / 3px 25% red': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'center',
      'background-size': '3px 25%',
      'background-color': 'red'
    },
    'center / auto auto rgb(0,0,0)': {
      'background-repeat': 'unset',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'unset',
      'background-position': 'center',
      'background-size': 'auto auto',
      'background-color': 'rgb(0,0,0)'
    },
    'no-repeat center/80% url("../img/image.png")': {
      'background-repeat': 'no-repeat',
      'background-origin': 'unset',
      'background-clip': 'unset',
      'background-attachment': 'unset',
      'background-image': 'url("../img/image.png")',
      'background-position': 'center',
      'background-size': '80%',
      'background-color': 'unset' 
    },
    'scroll border-box center/50% auto no-repeat red': {
      'background-repeat': 'no-repeat',
      'background-origin': 'border-box',
      'background-clip': 'border-box',
      'background-attachment': 'scroll',
      'background-image': 'unset',
      'background-position': 'center',
      'background-size': '50% auto',
      'background-color': 'red' 
    }
  }

  for (const key in t) {
    expect(shorthandParser('background', key)).toStrictEqual(t[key])
  }
})
