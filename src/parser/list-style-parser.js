import { 
  listStyleTypeKeywordValues,
  listStylePositionKeywordValues 
} from "./keyword-values"

const isListStylePosition = v => listStylePositionKeywordValues.hasOwnProperty(v)

const isListStyleType = v => listStyleTypeKeywordValues.hasOwnProperty(v)

const listStyleParser = value => {
  const res = {}
  const segments = value.split(' ')
  const { length } = segments

  res['list-style-type'] = 'unset'
  res['list-style-position'] = 'unset'
  res['list-style-image'] = 'unset'
  
  // TODO: support one or two value syntax
  if (length < 3) {
    return res
  }

  for (let i = 0; i < length; i++) {
    const segment = segments[i]

    if (isListStyleType(segment)) {
      res['list-style-type'] = segment
    } else if (isListStylePosition(segment)) {
      res['list-style-position'] = segment
    } else {
      res['list-style-image'] = segment
    }
  }

  return res
}

export default listStyleParser
