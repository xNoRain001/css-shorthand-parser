import strategies from "./straregies"

const shorthandParser = (prop, value) => {
  return strategies[prop](value)
}

export default shorthandParser
