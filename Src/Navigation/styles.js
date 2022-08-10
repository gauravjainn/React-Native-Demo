import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../Themes/Colors';
import {commonFontStyle} from '../Themes/Fonts';

export const styles = StyleSheet.create({
  linearGradient: {
    // flexDirection: 'row',
    // paddingVertical: hp(1.5),
    flex: 1,
  },
  tochableView: {flex: 1, alignItems: 'center', backgroundColor: 'transparent'},
  tabText: {
    ...commonFontStyle('400', 12, Colors.white),
    paddingTop: 3,
  },
});
