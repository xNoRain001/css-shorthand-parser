import strategies from "./straregies"

const shorthandParser = (prop, value) => {
  value = value
    .replace(/\s{2,}/g, ' ')
    .replace(/,\s/g, ',') // rgb(0, 0, 0) -> rgb(0,0,0)

  return strategies[prop](value)
}

export default shorthandParser
