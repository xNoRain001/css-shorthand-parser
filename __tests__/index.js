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

test('test border style', () => {
  const t = {
    'none': {
      'border-top-style': 'none',
      'border-right-style': 'none',
      'border-bottom-style': 'none',
      'border-left-style': 'none'
    },
    'dashed solid': {
      'border-top-style': 'dashed',
      'border-right-style': 'solid',
      'border-bottom-style': 'dashed',
      'border-left-style': 'solid'
    },
    'dashed double none': {
      'border-top-style': 'dashed',
      'border-right-style': 'double',
      'border-bottom-style': 'none',
      'border-left-style': 'double'
    },
    'dashed groove none dotted': {
      'border-top-style': 'dashed',
      'border-right-style': 'groove',
      'border-bottom-style': 'none',
      'border-left-style': 'dotted'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-style', key)).toStrictEqual(t[key])
  }
})

test('test border color', () => {
  const t = {
    'red': {
      'border-top-color': 'red',
      'border-right-color': 'red',
      'border-bottom-color': 'red',
      'border-left-color': 'red'
    },
    'red #f015ca': {
      'border-top-color': 'red',
      'border-right-color': '#f015ca',
      'border-bottom-color': 'red',
      'border-left-color': '#f015ca'
    },
    'red yellow green': {
      'border-top-color': 'red',
      'border-right-color': 'yellow',
      'border-bottom-color': 'green',
      'border-left-color': 'yellow'
    },
    'red yellow green blue': {
      'border-top-color': 'red',
      'border-right-color': 'yellow',
      'border-bottom-color': 'green',
      'border-left-color': 'blue'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border-color', key)).toStrictEqual(t[key])
  }
})

test('test border', () => {
  const t = {
    '1px': {
      'border-width': 'none',
      'border-style': 'none',
      'border-color': 'none'
    },
    '1px solid': {
      'border-width': 'none',
      'border-style': 'none',
      'border-color': 'none'
    },
    '1px solid red': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    '1px red solid': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'solid 1px red': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'solid red 1px': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'red 1px solid': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    },
    'red solid 1px': {
      'border-width': '1px',
      'border-style': 'solid',
      'border-color': 'red'
    }
  }

  for (const key in t) {
    expect(shorthandParser('border', key)).toStrictEqual(t[key])
  }
})
