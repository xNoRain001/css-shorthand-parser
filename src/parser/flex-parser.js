const isNumberStr = v => /^\d+$/.test(v)

const oneValueParser = v => {
  if (v === 'initial') {
    return threeValueParser('0', '1', 'auto')
  }

  if (v === 'auto') {
    return threeValueParser('1', '1', 'auto')
  }

  if (v === 'none') {
    return threeValueParser('0', '0', 'auto')
  }

  if (isNumberStr(v)) {
    return threeValueParser(v, '1', '0')
  }

  return threeValueParser('1', '1', v)
}

const twoValueParser = (v1, v2) => {
  return isNumberStr(v2) 
    ? threeValueParser(v1, v2, '0')
    : threeValueParser(v1, '1', v2)
}

const threeValueParser = (v1, v2, v3) => {
  return {
    'flex-grow': v1,
    'flex-shrink': v2,
    'flex-basis': v3
  }
}

const flexParser = value => {
  const segments = value.split(' ')
  const { length } = segments
  const [v1, v2, v3] = segments

  if (length === 1) {
    return oneValueParser(v1)
  } 

  if (length === 2) {
    return twoValueParser(v1, v2)
  }

  return threeValueParser(v1, v2, v3)
}

export default flexParser
