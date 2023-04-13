import commonParser from './common-parser'
import {
  backgroundClipKeywordValues,
  backgroundSizeKeywordValues,
  backgroundOriginKeywordValue,
  backgroundRepeatKeywordValues,
  backgroundPositionKeywordValues,
  backgroundAttachmentKeywordValues,
} from './keyword-values'

const clipParser = res => {
  const origin = res['background-origin']
  const clip = res['background-clip']

  if (origin !== 'unset' && clip === 'unset') {
    const [originValue, clipValue] = origin.split(' ')

    if (clipValue) {
      res['background-origin'] = originValue
      res['background-clip'] = clipValue
    } else {
      res['background-clip'] = originValue
    }
  }
}

const positionAndSizeAndColorParser = (value, res) => {
  const segments = value.split(' ')
  const index = value.indexOf('/')

  if (index !== -1) {
    // must be background-position and background-size     
    // may be background-color
    res['background-position'] = value.slice(0, index)
    value = value.slice(index + 1)
    
    const [v1, v2, v3] = value.split(' ')

    if (v2) {
      // background-size two-value syntax:
      // background-size: 50% auto;
      // background-size: 3em 25%;
      // background-size: auto 6px;
      // background-size: auto auto;
      if (/\d+.*/.test(v2) || v2 === 'auto') {
        res['background-size'] = `${ v1 } ${ v2 }`

        if (v3) {
          res['background-color'] = v3
        }
      } else {
        res['background-size'] = v1
        res['background-color'] = v2
      }
    } else {
      // only background-size
      res['background-size'] = v1
    }
  } else {
    // must be background-position or background-color  
    const [v1] = segments
    const isPosition = segments.length === 1 &&
      // TODO: .5% .7px ...
      (backgroundPositionKeywordValues.hasOwnProperty(v1) || /^\d+/.test(v1))

    res[isPosition ? 'background-position' : 'background-color'] = v1
  }
}

const backgroundParser = value => {
  const res = {
    'background-repeat': 'unset',
    'background-origin': 'unset',
    'background-clip': 'unset',
    'background-attachment': 'unset',
    'background-image': 'unset',
    'background-position': 'unset',
    'background-size': 'unset',
    'background-color': 'unset'
  } 
  const flagFnsMap = {
    'background-repeat' (value) {
      return backgroundRepeatKeywordValues.hasOwnProperty(value)
    },
    
    'background-origin' (value) {
      return backgroundOriginKeywordValue.hasOwnProperty(value)
    },

    'background-clip' (value) {
      return backgroundClipKeywordValues.hasOwnProperty(value)
    },

    'background-attachment' (value) {
      return backgroundAttachmentKeywordValues.hasOwnProperty(value)
    },

    'background-image' (value) {
      return /url\(.*?\)/.test(value)
    }
  }

  const keys = Object.keys(res)
  keys.splice(5, 3)

  for (let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i]

    if (value) {
      value = commonParser(key, value, flagFnsMap[key], res)
    }
  }

  if (value) {
    positionAndSizeAndColorParser(value, res)
  }
  
  clipParser(res)

  return res
}

export default backgroundParser
