const listStylePositionStaticValues = {
  inside: null,
  outside: null
}

const listStyleTypeStaticValues = {
  disc: null,
  circle: null,
  square: null,
  decimal: null
}

const isListStylePosition = v => listStylePositionStaticValues.hasOwnProperty(v)

const isListStyleType = v => listStyleTypeStaticValues.hasOwnProperty(v)

const listStyleParser = value => {
  const res = {}
  const segments = value.split(' ')
  const { length } = segments

  res['list-style-type'] = 'none'
  res['list-style-position'] = 'none'
  res['list-style-image'] = 'none'
  
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
