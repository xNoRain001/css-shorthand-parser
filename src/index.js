import strategies from "./straregies"

const shorthandParser = (prop, value) => {
  // remove unnecessary white space
  value = value
    .replace(/\s{2,}/g, ' ')
    .replace(/\s?([,/])\s?/g, (_, $1) => $1)
    .replace(/\s?,\s?/g, ',')
    .replace(/\(\s?/g, '(')
    .replace(/\s?\)/g, ')')
    .replace(/\s?\/\s?/g, '/')
    .trim()

  const straregy = strategies[prop]
  
  return straregy ? straregy(value) : null
}

export default shorthandParser
