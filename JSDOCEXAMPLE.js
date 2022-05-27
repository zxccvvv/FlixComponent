/**
 * @param {object} props
 * @param {('XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number)} [props.fontSize=14]
 * @param {boolean} [props.italic]
 * @param {boolean} [props.bold]
 * @param {boolean} [props.color]
 * @param {boolean} [props.mb]
 * @param {object} [props.style]
 * @param {JSX.Element|string} props.children
 */

/**
 * @typedef {Object} CustomProps
 * @prop {('XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number)} fontSize
 * @prop {boolean} italic
 * @prop {boolean} bold
 * @prop {boolean} color
 * @prop {boolean} mb
 * @prop {object} style
 * @prop {React.ReactNode|string} children
 */

/**
 * @param {{
 * fontSize:'XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number,
 * italic:boolean
 * bold:boolean
 * color:string
 * mb:boolean
 * style:object
 * children:React.ReactNode
 * }} props
 */

/**
 * @typedef {Object | TextProps} FlixTextProps
 * @description <a href="https://reactnative.dev/docs/text#props" target="_blank">Support React Native Text Props</a>
 * @type {TextProps}
 * @prop {('XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number)} [fontSize=14] - Set fontSize directly
 * @prop {boolean} [italic] - Set text to italic
 * @prop {boolean} [bold] - Set text to bold
 * @prop {boolean} [color='#DFDCE3'] - Set color of Text
 * @prop {boolean} [mb={marginBottom:14}] - Add `{marginBottom:14}` at Text Style
 * @prop {object} [style] - Set style of Text
 * @prop {React.ReactNode|string} children
 */

/**
 * Flix Custom Text
 * @component
 * @category Text
 * @description Custom Component of Text React Native
 *
 * @example
 * return (
 *   <FlixText bold italic>Awesome Text is show here</FlixText>
 * )
 *
 * @param {React.FunctionComponent<FlixTextProps>} props
 */
