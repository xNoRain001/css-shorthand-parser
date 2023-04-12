import strategies from "./straregies"

const shorthandParser = (prop, value) => {
  value = value
    .replace(/\s{2,}/g, ' ')
    .replace(/,\s/g, ',') // rgb(0, 0, 0) -> rgb(0,0,0)

  const straregy = strategies[prop]
  
  return straregy ? straregy(value) : null
}

export default shorthandParser
