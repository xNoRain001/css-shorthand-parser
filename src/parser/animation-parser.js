import commonParser from "./common-parser"
import { 
  animationFillModeKeywordValues,
  animationDirectionKeywordValues,
  animationPlayStateKeywordValues,
  animationTimingFunctionKeywordValues
} from "./keyword-values"

// 0.3s -> 300ms
// .4s -> 400ms
// 2.4 -> 2400ms
const formatTime = value => {
  value = value.replace(/\s?(\d*\.\d+)s/g, (_, time) => {
    if (time[0] === '.') {
      time = `0${ time }`
    }

    return `${ Number(time) * 1000 }ms`
  })

  return value
}

const durationAndDelayParser = (value, res, prefix) => {
  value = formatTime(value)

  let counter = 0
  
  // remove duration, delay and unmeaning time
  value = value.replace(/\s?(\d+m?s)/g, (_, $1) => {
    if (counter === 2) {
      return ''
    }

    counter++

    if (counter === 1) {
      res[`${ prefix }-duration`] = $1
    } else if (counter === 2) {
      res[`${ prefix }-delay`] = $1
    }

    return ''
  })

  return value
}

const animationParser = value => {
  const res = {
    'animation-duration': 'unset',
    'animation-delay': 'unset',
    'animation-timing-function': 'unset',
    'animation-iteration-count': 'unset',
    'animation-direction': 'unset',
    'animation-fill-mode': 'unset',
    'animation-play-state': 'unset',
    'animation-name': 'unset'
  }
  const flagFnsMap = {
    'animation-timing-function' (v) {
      return animationTimingFunctionKeywordValues.hasOwnProperty(v) ||
        /(.*?\(.*?\))/.test(v)
    },

    'animation-iteration-count' (v) {
      return v === 'infinite' || !isNaN(Number(v))
    },

    'animation-direction' (v) {
      return animationDirectionKeywordValues.hasOwnProperty(v)
    },

    'animation-fill-mode' (v) {
      return animationFillModeKeywordValues.hasOwnProperty(v)
    },

    'animation-play-state' (v) {
      return animationPlayStateKeywordValues.hasOwnProperty(v)
    },

    'animation-name' (v) {
      return v
    }
  }

  value = durationAndDelayParser(value, res, 'animation')

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

export { durationAndDelayParser }

export default animationParser
