import {StyleSheet, Dimensions, Platform} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../../Themes/Colors';
import {commonFontStyle} from '../../Themes/Fonts';

export const styles = StyleSheet.create({
  videoView: {
    height: Dimensions.get('window').height,
    width: '100%',
    backgroundColor: 'red',
    // position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  absoluteView: {
    position: 'absolute',
    bottom: hp(10),
  },

  buttonsMainView: {
    right: 0,
    alignItems: 'flex-end',
    paddingBottom: hp(2),
    paddingRight: hp(2),
  },
  likeButton: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: hp(6) / 2,
    height: hp(6),
    width: hp(6),
    alignItems: 'center',
    justifyContent: 'center',
  },
  likeText: {
    ...commonFontStyle('bold', 12, Colors.white),
  },
  LikeView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  audioButton: {
    borderRadius: hp(6) / 2,
    height: hp(6),
    width: hp(6),
  },
  profileButton: {
    borderRadius: hp(6) / 2,
    height: hp(6),
    width: hp(6),
    borderWidth: 1,
    borderColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileImage: {
    height: hp(5.5),
    width: hp(5.5),
    borderRadius: hp(5.5) / 2,
  },
});
