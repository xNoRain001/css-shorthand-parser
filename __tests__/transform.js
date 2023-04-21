const shorthandParser = require('../dist/css-shorthand-parser.min.js')

test('transition', () => {
  const t = {
    'translate(50%)': {
      translateX: '50%',
      translateY: '50%',
    },
    'translate(200px)': {
      translateX: '200px',
      translateY: '200px',
    },
    'translate(50%, 60%)': {
      translateX: '50%',
      translateY: '60%',
    },
    'translate(50%, 10px)': {
      translateX: '50%',
      translateY: '10px',
    },
    'translate(10px, 20px, 30px)': {
      translateX: '10px',
      translateY: '20px',
      translateZ: '30px'
    },
    'translateX(10%)': {
      translateX: '10%',
    },
    'translateY(10px)': {
      translateY: '10px',
    },
    'translate3d(12px, 50%, 3em)': {
      translateX: '12px',
      translateY: '50%',
      translateZ: '3em'
    },
    'scale(20%)': {
      scaleX: '20%',
      scaleY: '20%'
    },
    'scale(20%, 30%)': {
      scaleX: '20%',
      scaleY: '30%'
    },
    'scaleX(20px)': {
      scaleX: '20px'
    },
    'scaleY(10%)': {
      scaleY: '10%',
    },
    'rotate(20deg)': {
      rotateX: '20deg',
      rotateY: '20deg'
    },
    'rotate(20deg, -30deg)': {
      rotateX: '20deg',
      rotateY: '-30deg'
    },
    'rotateX(20deg)': {
      rotateX: '20deg'
    },
    'rotateY(-50deg)': {
      rotateY: '-50deg',
    },
    'none': {
      transform: 'none'
    }
  }

  for (const key in t) {
    expect(shorthandParser('transform', key)).toStrictEqual(t[key])
  }
})
