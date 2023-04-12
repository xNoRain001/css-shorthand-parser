const commonParser = (key, value, flagFn, res) => {
  let _res = ''
  const segments = value.split(' ')

  for (let i = 0, l = segments.length; i < l; i++) {
    const segment = segments[i]

    if (flagFn(segment)) {
      _res += `${ segment } `
      // don't use regexp, because '(' and '.'
      value = value.replace(segment, '')
    }
  }

  res[key] = _res ? _res.slice(0, -1) : 'unset'
  // remove unnecessary white space
  value = value.replace(/\s{2,}/g, ' ').trim()
  
  return value
}

export default commonParser
