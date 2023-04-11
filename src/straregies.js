const commonFourValueParser = (value, prefix, suffix) => {
  let res = {}
  const segments = value.split(' ')
  const { length } = segments
  const [v1, v2, v3, v4] = segments

  suffix = suffix ? `-${ suffix }` : ''

  if (length === 1) {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v1
    res[`${ prefix }-bottom${ suffix }`] = v1
    res[`${ prefix }-left${ suffix }`] = v1
  } else if (length === 2) {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v2
    res[`${ prefix }-bottom${ suffix }`] = v1
    res[`${ prefix }-left${ suffix }`] = v2
  } else if (length === 3) {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v2
    res[`${ prefix }-bottom${ suffix }`] = v3
    res[`${ prefix }-left${ suffix }`] = v2
  } else {
    res[`${ prefix }-top${ suffix }`] = v1
    res[`${ prefix }-right${ suffix }`] = v2
    res[`${ prefix }-bottom${ suffix }`] = v3
    res[`${ prefix }-left${ suffix }`] = v4
  }

  return res
}

const borderStyleStaticValues = {
  hidden: null, 
  dotted: null,
  dashed: null,
  solid: null,
  double: null,
  groove: null,
  ridge: null,
  inset: null,
  outset: null
}

const borderWidthStaticValues = {
  thin: null,
  medium: null,
  thick: null
}

const isBorderWidth = v => {
  return borderWidthStaticValues.hasOwnProperty(v) || /^[0-9]/.test(v[0])
}

const isBorderStyle = v => {
  return borderStyleStaticValues.hasOwnProperty(v)
}

const strategies = {
  margin (value) {
    return commonFourValueParser(value, 'margin')
  },

  padding (value) {
    return commonFourValueParser(value, 'padding') 
  },

  border (value) {
    let res = {
      'border-width': 'none',
      'border-style': 'none',
      'border-color': 'none'
    }
    const segments = value.split(' ')
    const { length } = segments

    if (length < 3) {
      return res
    }

    for (let i = 0; i < length; i++) {
      const segment = segments[i]

      if (isBorderWidth(segment)) {
        res['border-width'] = segment
      } else if (isBorderStyle(segment)) {
        res['border-style'] = segment
      } else {
        res['border-color'] = segment
      }
    }

    return res
  },

  'border-width' (value) {
    return commonFourValueParser(value, 'border', 'width') 
  },

  'border-style' (value) {
    return commonFourValueParser(value, 'border', 'style')  
  },

  'border-color' (value) {
    return commonFourValueParser(value, 'border', 'color')  
  }
}

export default strategies
