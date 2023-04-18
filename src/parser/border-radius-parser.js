const borderRadiusParser = value => {
  let res = {}
  const segments = value.split(' ')
  const { length } = segments
  const [v1, v2, v3, v4] = segments

  // TODO: handle slash
  if (length === 1) {
    res['border-top-left-radius'] = v1
    res['border-top-right-radius'] = v1
    res['border-bottom-right-radius'] = v1
    res['border-bottom-left-radius'] = v1
  } else if (length === 2) {
    res['border-top-left-radius'] = v1
    res['border-top-right-radius'] = v2
    res['border-bottom-right-radius'] = v1
    res['border-bottom-left-radius'] = v2
  } else {
    res['border-top-left-radius'] = v1
    res['border-top-right-radius'] = v2
    res['border-bottom-right-radius'] = v3
    res['border-bottom-left-radius'] = v4
  }

  return res
}

export default borderRadiusParser
