const commonFourValueParser = (value, prefix) => {
  let res = {}
  const segments = value.split(' ')
  const { length } = segments
  const [v1, v2, v3, v4] = segments

  if (length === 1) {
    res[`${ prefix }-top`] = v1
    res[`${ prefix }-right`] = v1
    res[`${ prefix }-bottom`] = v1
    res[`${ prefix }-left`] = v1
  } else if (length === 2) {
    res[`${ prefix }-top`] = v1
    res[`${ prefix }-right`] = v2
    res[`${ prefix }-bottom`] = v1
    res[`${ prefix }-left`] = v2
  } else if (length === 3) {
    res[`${ prefix }-top`] = v1
    res[`${ prefix }-right`] = v2
    res[`${ prefix }-bottom`] = v3
    res[`${ prefix }-left`] = v2
  } else {
    res[`${ prefix }-top`] = v1
    res[`${ prefix }-right`] = v2
    res[`${ prefix }-bottom`] = v3
    res[`${ prefix }-left`] = v4
  }

  return res
}

const strategies = {
  margin (value) {
    return commonFourValueParser(value, 'margin')
  },

  padding (value) {
    return commonFourValueParser(value, 'padding') 
  },

  'border-width' (value) {
    return commonFourValueParser(value, 'border-width') 
  }
}

export default strategies
