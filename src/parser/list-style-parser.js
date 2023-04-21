import { 
  listStyleTypeKeywordValues,
  listStylePositionKeywordValues 
} from "./keyword-values"

const isListStylePosition = v => listStylePositionKeywordValues.hasOwnProperty(v)

const isListStyleType = v => listStyleTypeKeywordValues.hasOwnProperty(v)

const listStyleParser = value => {
  const res = {
    'list-style-type': 'unset',
    'list-style-position': 'unset',
    'list-style-image': 'unset'
  }

  const segments = value.split(' ')
  const { length } = segments

  // list-style-position's value only can be `inside` or `outside`, 
  // can't be `none`.
  // list-style: none; -> list-style-type: none;
  // list-style: none none; -> list-style-type: none; list-style-image: none;
  for (let i = 0; i < length; i++) {
    const segment = segments[i]

    if (isListStyleType(segment)) {
      res['list-style-type'] = segment
    } else if (isListStylePosition(segment)) {
      res['list-style-position'] = segment
    } else if (segment === 'none') {
      // handle two none
      if (res['list-style-type'] === 'unset') {
        res['list-style-type'] = 'none'
      } else {
        res['list-style-image'] = 'none'
      }
    } else {
      res['list-style-image'] = segment
    }
  }

  return res
}

export default listStyleParser