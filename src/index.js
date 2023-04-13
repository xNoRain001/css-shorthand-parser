import strategies from "./straregies"

const shorthandParser = (prop, value) => {
  value = value
    .replace(/\s{2,}/g, ' ')
    .replace(/\s?,\s?/g, ',') // rgb( 0 , 0, 0 ) -> rgb( 0,0,0 )
    .replace(/\(\s?/g, '(') // rgb( 0,0,0 ) -> rgb(0,0,0 )
    .replace(/\s?\)/g, ')') // rgb(0,0,0 ) -> rgb(0,0,0)
    .replace(/\s?\/\s?/g, '/') // background: center / 80% -> background: center/80%

  const straregy = strategies[prop]
  
  return straregy ? straregy(value) : null
}

export default shorthandParser
