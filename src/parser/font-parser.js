import commonParser from "./common-parser"
import { 
  fontSizeKeywordValues,
  fontStyleKeywordValues,
  fontWeightKeywordValues
} from "./keyword-values"

const sizeAndLineHeightParser = (value, res, segments) => {
  for (let i = 0, l = segments.length; i < l; i++) {
    const segment = segments[i]
    const index = segment.indexOf('/')

    if (index !== -1) {
      res['font-size'] = segment.slice(0, index)
      res['line-height'] = segment.slice(index + 1)
      value = value.replace(segment, '')
      break
    } else if (
      fontSizeKeywordValues.hasOwnProperty(segment) || 
      /^\d+(.\d+)?[a-z%]+$/.test(segment)
    ) {
      // 12px 13% 3em 4rem 12.5px 13.5% 3.5em 4.5rem
      res['font-size'] = segment 
      value = value.replace(segment, '')
      break
    }
  }
  
  return value.replace(/\s{2,}/g, ' ').trim()
}

const fontParser = value => {
  const res = {
    'font-size': 'unset',
    'line-height': 'unset',
    // 'font-variant': 'unset',
    'font-weight': 'unset',
    'font-style': 'unset',
    'font-family': 'unset',
  }

  const segments = value.split(' ')

  if (segments.length === 1) {
    res['font-family'] = segments[0]
  } else {
    // at least have font-size and font-family -> font: 13px serief;
    // line-height maybe next to font-size -> font: 13px/2.5 serief;
    value = sizeAndLineHeightParser(value, res, segments)
  
    const keys = Object.keys(res)
    keys.splice(0, 2) // ignore font-size, line-height

    const flagFnsMap = {
      'font-weight' (v) {
        return fontWeightKeywordValues.hasOwnProperty(v) || 
          /^\d+(\.\d+)?$/.test(v)
      },

      'font-style' (v) {
        // TODO: font-style: oblique 40deg;
        return fontStyleKeywordValues.hasOwnProperty(v)
      },

      'font-family' (v) {
        return v
      }
    }

    for (let i = 0, l = keys.length; i < l; i++) {
      const key = keys[i]
  
      if (value) {
        value = commonParser(key, value, flagFnsMap[key], res)
      }
    }
  }

  if (res['font-weight'] === 'normal' && res['font-style'] === 'unset') {
    res['font-style'] = 'normal'
  }

  return res
}

export default fontParser
