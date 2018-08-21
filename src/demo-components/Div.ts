import styled, { css } from 'styled-components'

export const isNumber = value => typeof value === 'number'

export const isString = value => typeof value === 'string'

export const isAlphaNumeric = value => isString(value) || isNumber(value)

// Used to support number as size values in styled-components
export const withUnit = value => (isNumber(value) ? `${value}px` : value)

const directions = ['Left', 'Right', 'Top', 'Bottom']

// Returns margin or padding shorthands ('mTop', 'pBottom' etc)
export const createSpaces = type => props => {
  let result = ''

  directions.forEach(direction => {
    const property = props[`${type[0]}${direction}`]

    if (property !== undefined) {
      result += `${type}-${direction.toLowerCase()}: ${withUnit(property)};`
    }
  })

  return result
}

// Returns position values ('top', 'left' etc)
export const createPosition = props => {
  let result = ''

  directions.forEach(direction => {
    const property = props[`${direction.toLowerCase()}`]

    if (property !== undefined) {
      result += `${direction.toLowerCase()}: ${withUnit(property)};`
    }
  })

  return result
}

// Creates list helpers ('listBottom' etc)
export const createLists = props => {
  let result = ''

  directions.forEach((direction, index) => {
    const property = props[`list${direction}`]

    if (property !== undefined) {
      const value = property === true ? '8px' : withUnit(property)
      result += `> *:not(:${index % 2 ? 'last' : 'first'}-child) { margin-${direction.toLowerCase()}: ${value}; }`
    }
  })

  return result
}

const layerStyles = 'position: absolute; top: 0; right: 0; bottom: 0; left: 0;'

interface Props {
  // display
  block?: boolean;
  flex?: any;
  inline?: boolean;
  // flex
  wraps?: boolean;
  row?: boolean;
  rowReverse?: boolean;
  column?: boolean;
  columnReverse?: boolean;
  order?: string | number;
  flexNone?: boolean;
  // justify-content
  justifyContent?: string;
  justifyStart?: boolean;
  justifyEnd?: boolean;
  justifyCenter?: boolean;
  justifyBetween?: boolean;
  justifyAround?: boolean;
  justifyEvenly?: boolean;
  // align-items
  alignItems?: string;
  itemsStart?: boolean;
  itemsEnd?: boolean;
  itemsCenter?: boolean;
  itemsBaseline?: boolean;
  itemsStretch?: boolean;
  // align-content
  alignContent?: string;
  contentStart?: boolean;
  contentEnd?: boolean;
  contentCenter?: boolean;
  contentBetween?: boolean;
  contentArouns?: boolean;
  contentStretch?: boolean;
  // align-selft
  alignSelf?: string;
  selfAuto?: boolean;
  selfStart?: boolean;
  selfEnd?: boolean;
  selfCenter?: boolean;
  selfBaseline?: boolean;
  selfStretch?: boolean;
  // position
  absolute?: boolean;
  fixed?: boolean;
  relative?: boolean;
  z?: string | number;
  // size
  width?: string | number;
  height?: string | number;
  minWidth?: string | number;
  minHeight?: string | number;
  maxWidth?: string | number;
  maxHeight?: string | number;
  // margins and paddings
  margin?: string | number;
  m?: string | number;
  mTop?: string | number;
  mRight?: string | number;
  mBottom?: string | number;
  mLeft?: string | number;
  padding?: string | number;
  p?: string | number;
  pTop?: string | number;
  pRight?: string | number;
  pBottom?: string | number;
  pLeft?: string | number;
  // children positioning
  listTop?: string | number | boolean;
  listRight?: string | number | boolean;
  listBottom?: string | number | boolean;
  listLeft?: string | number | boolean;
  // background
  background?: string;
  backgroundImage?: string;
  cover?: boolean;
  contain?: boolean;
  // other
  clickable?: boolean;
  overlay?: string;
}

// prettier-ignore
const Div = styled<Props, 'div'>('div')`
  display: ${props => {
    if (props.inline) {
      if (props.block) return 'inline-block'
      else if (props.flex === true) return 'inline-flex'
      else return 'inline'
    } else {
      if (props.flex === true) return 'flex'
      if (props.block) return 'block'
      return 'flex'
    }
  }};

  ${props => {
    if (!props.block || !(props.inline && !props.flex)) return css`
      flex-direction: ${() => {
        if (props.row) return 'row'
        if (props.rowReverse) return 'row-reverse'
        if (props.column) return 'column'
        if (props.columnReverse) return 'column-reverse'
        return ''
      }};

      flex-wrap: ${props.wraps ? 'wrap' : 'nowrap'};

      justify-content: ${props.justifyContent || (() => {
        if (props.justifyStart) return 'flex-start'
        if (props.justifyEnd) return 'flex-end'
        if (props.justifyCenter) return 'center'
        if (props.justifyBetween) return 'space-between'
        if (props.justifyAround) return 'space-around'
        if (props.justifyEvenly) return 'space-evenly'
        return ''
      })};

      align-items: ${props.alignItems || (() => {
        if (props.itemsStart) return 'flex-start'
        if (props.itemsEnd) return 'flex-end'
        if (props.itemsCenter) return 'center'
        if (props.itemsBaseline) return 'baseline'
        if (props.itemsStretch) return 'stretch'
        return ''
      })};

      align-content: ${props.alignContent || (() => {
        if (props.contentStart) return 'flex-start'
        if (props.contentEnd) return 'flex-end'
        if (props.contentCenter) return 'center'
        if (props.contentBetween) return 'space-between'
        if (props.contentArouns) return 'space-around'
        if (props.contentStretch) return 'stretch'
        return ''
      })};
    `
    return ''
  }}

  align-self: ${props => props.alignSelf || (() => {
    if (props.selfAuto) return 'auto'
    if (props.selfStart) return 'flex-start'
    if (props.selfEnd) return 'flex-end'
    if (props.selfCenter) return 'center'
    if (props.selfBaseline) return 'baseline'
    if (props.selfStretch) return 'stretch'
    return ''
  })};

  ${({ order }) => isAlphaNumeric(order) && `order: ${order};`}

  ${({ flexNone, flex }) => {
    if (flexNone) return 'flex: none;'
    if (isAlphaNumeric(flex)) return css`flex: ${flex};`
    return ''
  }}

  ${({ absolute, fixed, relative }) => {
    if (absolute) return 'position: absolute;'
    if (fixed) return 'position: fixed;'
    if (relative) return 'position: relative;'
    return ''
  }}

  ${createPosition}

  ${({ width }) => width && css`width: ${withUnit(width)};`}
  ${({ height }) => height && css`height: ${withUnit(height)};`}
  ${({ minWidth }) => minWidth && css`min-width: ${withUnit(minWidth)};`}
  ${({ minHeight }) => minHeight && css`min-height: ${withUnit(minHeight)};`}
  ${({ maxWidth }) => maxWidth && css`max-width: ${withUnit(maxWidth)};`}
  ${({ maxHeight }) => maxHeight && css`max-height: ${withUnit(maxHeight)};`}

  ${({ margin, m }) => (margin || m) && css`margin: ${withUnit(margin || m)};`}
  ${createSpaces('margin')}

  ${({ padding, p }) => (padding || p) && css`padding: ${withUnit(padding || p)};`}
  ${createSpaces('padding')}

  ${({ z }) => isAlphaNumeric(z) && css`z-index: ${z};`}

  ${createLists}

  ${({ clickable }) => clickable && 'cursor: pointer;'}

  ${({ background }) => background && css`background: ${background};`}
  ${({ backgroundImage }) => backgroundImage && css`background-image: url(${backgroundImage});`}
  ${({ cover, contain }) => (cover || contain) && css`background-size: ${cover ? 'cover' : 'contain'};`}

  ${props => props.overlay && css`
    position: ${(props.absolute && 'absolute') || 'relative'};

    &::after {
      content: "";
      ${layerStyles}
      background: ${props.overlay};
      opacity: 0.2;
      pointer-events: none;
    }
  `}
`

export default Div;
