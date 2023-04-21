const commonParser = (p, v, res) => {
  const segments = v.split(',')
  const { length } = segments
  const [v1, v2, v3] = segments

  if (length === 1) {
    res[`${ p }X`] = res[`${ p }Y`] = v1
  } else if (length === 2) {
    res[`${ p }X`] = v1
    res[`${ p }Y`] = v2
  } else {
    res[`${ p }X`] = v1
    res[`${ p }Y`] = v2
    res[`${ p }Z`] = v3
  }
}

const strategies = {
  translate (v, res) {
    commonParser('translate', v, res)
  },

  translate3d (v, res) {
    commonParser('translate', v, res)
  },

  scale (v, res) {
    commonParser('scale', v, res)
  },

  skew (v, res) {
    commonParser('skew', v, res)
  },

  rotate (v, res) {
    commonParser('rotate', v, res)
  }
}

const transformParser = value => {
  const res = {}
  const regexp = /(.*?)\((.*?)\)/
  
  value.replace(regexp, (_, p, v) => {
    const straregy = strategies[p]

    if (straregy) {
      straregy(v, res)
    } else {
      res[p] = v
    }
  })

  return res
}

export default transformParser
