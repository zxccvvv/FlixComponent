'use strict';

/**
 * @namespace FlixText
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
};

/**
 * Flix Custom Text
 * @component FlixText
 * @description Custom Component of Text React Native
 * 
 * Usage:
 * ```js
 * <FlixText bold italic>Awesome Text is show here</FlixText>
 * ```
 * 
 * 
 * @typedef {Object | TextProps} CustomProps
 * @prop {('XXL'|'XL'|'L'|'M'|'S'|'XS'|'XXS'|number)} fontSize
 * @prop {boolean} italic
 * @prop {boolean} bold
 * @prop {boolean} color
 * @prop {boolean} mb
 * @prop {object} style
 * @prop {React.ReactNode|string} children
 * 
 * @param {CustomProps} props
 */

const FlixText = ({ fontSize, italic, bold, color, mb, children }) => {
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
