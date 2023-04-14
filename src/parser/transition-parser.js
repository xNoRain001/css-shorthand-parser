import commonParser from "./common-parser"
import { durationAndDelayParser } from "./animation-parser"
import { animationTimingFunctionKeywordValues } from "./keyword-values"

const transitionParser = value => {
  const res = {
    'transition-duration': 'unset',
    'transition-delay': 'unset',
    'transition-timing-function': 'unset',
    'transition-property': 'unset'
  }
  const flagFnsMap = {
    'transition-timing-function' (v) {
      return animationTimingFunctionKeywordValues.hasOwnProperty(v) ||
        /(.*?\(.*?\))/.test(v)
    },

    'transition-property' (v) {
      return v
    }
  }

  value = durationAndDelayParser(value, res, 'transition')

  const keys = Object.keys(res)
  keys.splice(0, 2)

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]

    if (value) {
      value = commonParser(key, value, flagFnsMap[key], res)
    }
  }

  return res
}

export default transitionParser
