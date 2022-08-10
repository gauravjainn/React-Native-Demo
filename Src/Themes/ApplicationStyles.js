import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
export default StyleSheet.create({
  applicationView: {
    flex: 1,
  },
  iconImage: {
    height: hp(3),
    width: hp(3),
    resizeMode: 'contain',
  },
  closeImage: {
    height: hp(2),
    width: hp(2),
    resizeMode: 'contain',
  },
});
