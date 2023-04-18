import { 
  flexParser,
  fontParser,
  animationParser,
  listStyleParser, 
  backgroundParser,
  transitionParser,
  commonBorderParser, 
  borderRadiusParser,
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

  'border-radius' (value) {
    return borderRadiusParser(value)
  },

  'list-style' (value) {
    return listStyleParser(value)
  },

  flex (value) {
    return flexParser(value)
  },

  animation (value) {
    return animationParser(value)
  },

  
  background (value) {
    return backgroundParser(value)
  },

  font (value) {
    return fontParser(value)
  },
  
  transition (value) {
    return transitionParser(value)
  },
}

export default strategies
