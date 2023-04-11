import { 
  flexParser,
  listStyleParser, 
  commonBorderParser, 
  commonDirectionParser
} from "./parser"

const strategies = {
  margin (value) {
    return commonDirectionParser(value, 'margin')
  },

  padding (value) {
    return commonDirectionParser(value, 'padding') 
  },

  border (value) {
    return commonBorderParser(value, 'border')
  },

  'border-top' (value) {
    return commonBorderParser(value, 'border-top')   
  },

  'border-right' (value) {
    return commonBorderParser(value, 'border-right')   
  },

  'border-bottom' (value) {
    return commonBorderParser(value, 'border-bottom')   
  },

  'border-left' (value) {
    return commonBorderParser(value, 'border-left')   
  },

  'border-width' (value) {
    return commonDirectionParser(value, 'border', 'width') 
  },

  'border-style' (value) {
    return commonDirectionParser(value, 'border', 'style')  
  },

  'border-color' (value) {
    return commonDirectionParser(value, 'border', 'color')  
  },

  'list-style' (value) {
    return listStyleParser(value)
  },

  flex (value) {
    return flexParser(value)
  }
}

export default strategies
