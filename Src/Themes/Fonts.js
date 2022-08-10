export function getFontType(fontWeight) {
  if (fontWeight == 600) {
    return 'SFUIText-Semibold';
  } else if (fontWeight == 400) {
    return 'SFUIText-Regular';
  } else if (fontWeight == 700) {
    return 'SFUIText-Bold';
  } else if (fontWeight == 300) {
    return 'SFUIText-Light';
  } else if (fontWeight == 900) {
    return 'SFUIText-Heavy';
  } else if (fontWeight == 500) {
    return 'SFUIText-Medium';
  } else if (fontWeight == 'italicMedium') {
    return 'SFUIText-MediumItalic';
  } else if (fontWeight == 'italicHeavy') {
    return 'SFUIText-HeavyItalic';
  } else {
    return 'SFUIText-Regular';
  }
}

export function commonFontStyle(fontWeight, fontSize, color) {
  return {
    // fontFamily: getFontType(fontWeight),
    fontWeight: fontWeight,
    // fontSize: actuatedNormalize(fontSize - 2),
    fontSize: fontSize,
    color: color,
  };
}

import {Dimensions, Platform, PixelRatio} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

// based on iphone 5s's scale
const scale = SCREEN_WIDTH / 320;

export function actuatedNormalize(size) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}
