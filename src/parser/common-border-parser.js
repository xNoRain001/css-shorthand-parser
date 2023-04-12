import { 
  borderStyleKeywordValues, 
  borderWidthKeywordValues
} from "./keyword-values"

const isBorderWidth = v => {
  return borderWidthKeywordValues.hasOwnProperty(v) || /^[0-9]/.test(v[0])
}

const isBorderStyle = v => borderStyleKeywordValues.hasOwnProperty(v)

const commonBorderParser = (value, prefix) => {
  let res = {}
  const segments = value.split(' ')
  const { length } = segments

  res[`${ prefix }-width`] = 'none'
  res[`${ prefix }-style`] = 'none'
  res[`${ prefix }-color`] = 'none'
  
  // TODO: support one or two value syntax
  if (length < 3) {
    return res
  }

  for (let i = 0; i < length; i++) {
    const segment = segments[i]

    if (isBorderWidth(segment)) {
      res[`${ prefix }-width`] = segment
    } else if (isBorderStyle(segment)) {
      res[`${ prefix }-style`] = segment
    } else {
      res[`${ prefix }-color`] = segment
    }
  }

  return res
}

export default commonBorderParser
