/**
 * Flix Component
 * @author Flix<flixy121@gmail.com>
 */
import PropTypes from "prop-types";
import React from "react";
import { Text, TextProps } from "react-native";

const constan = {
  Text_XXL: 28,
  Text_XL: 22,
  Text_L: 18,
  Text_M: 14,
  Text_S: 12,
  Text_XS: 10,
  Text_XXS: 8,
  Text_Color: "#DFDCE3",
};

const myCustomProps = {
  /** set fontSize directly */
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(["XXL", "XL", "L", "M", "S", "XS", "XXS"]),
  ]),
  /** set text to italic */
  italic: PropTypes.bool,
  /** set text to bold */
  bold: PropTypes.bool,
  /** set color of text */
  color: PropTypes.string,
  /** set space at bottom of text */
  mb: PropTypes.bool,
  /** set style of text */
  style: PropTypes.object,
  /** String or Text Elememt */
  children: PropTypes.node.isRequired,
};

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
 * @description Custom Component of Text React Native
 *
 * @example
 * return (
 *   <FlixText bold italic>Awesome Text is show here</FlixText>
 * )
 *
 * @param {React.FunctionComponent<FlixTextProps>} props
 */

const FlixText = (props) => {
  let { fontSize, italic, bold, color, mb, children } = props;
  let customStyle = {};

  if (fontSize == "XXL") fontSize = constan.Text_XXL;
  else if (fontSize == "XL") fontSize = constan.Text_XL;
  else if (fontSize == "L") fontSize = constan.Text_L;
  else if (fontSize == "S") fontSize = constan.Text_S;
  else if (fontSize == "XS") fontSize = constan.Text_XS;
  else if (fontSize == "XXS") fontSize = constan.Text_XXS;
  //allow number in fontSize props
  else if (typeof fontSize == "number") fontSize = fontSize;
  //default value fontSize
  else fontSize = constan.Text_M;

  customStyle.color = color || constan.Text_Color;
  customStyle.fontFamily = constan?.Text_Font_Family;
  customStyle.fontSize = fontSize;
  customStyle.marginBottom = mb ? 14 : 0;

  return (
    <Text {...props} selectable={true} style={[customStyle, props?.style]}>
      {children}
    </Text>
  );
};

FlixText.propTypes = myCustomProps;

FlixText.defaultProps = {
  fontSize: constan.Text_M,
  color: constan.Text_Color,
};

export default FlixText;
