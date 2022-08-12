import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../Themes/Colors';
import {commonFontStyle} from '../Themes/Fonts';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

export default function Talent({talent, onPressCart, duration, progress}) {
  return (
    <View style={styles.talentView}>
      <View style={styles.innerViewTalent}>
        <View style={styles.talentImageView}>
          <AnimatedCircularProgress
            size={60}
            width={2}
            fill={progress * 100}
            tintColor={'transparent'}
            rotation={-180}
            backgroundColor={Colors.pink}>
            {fill => (
              <Image
                source={{uri: talent.avatar_url}}
                style={styles.talentImage}
              />
            )}
          </AnimatedCircularProgress>

          <View style={styles.talentMIddleView}>
            <Text style={styles.talentPrice}>${talent.cost}</Text>
            <Text style={styles.talentPrice}>#{talent.name_en}</Text>
            <Text style={styles.notes}>Top Notes: bio_en</Text>
          </View>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => onPressCart()}
            style={styles.cartButtonView}>
            <View style={styles.cartButton}>
              <Text style={styles.cartText}>ADD TO</Text>
              <Text style={styles.cartText}>CART</Text>
            </View>
            <View style={styles.bottomLine}></View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  talentView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginHorizontal: hp(2),
    borderRadius: 15,
  },
  innerViewTalent: {
    padding: hp(2),
    width: Dimensions.get('window').width - hp(4),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  talentImage: {
    resizeMode: 'cover',
    height: 60,
    width: 60,
    borderWidth: 1.5,
    borderRadius: 60 / 2,
    borderColor: Colors.pink,
  },
  talentImageView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  talentPrice: {
    ...commonFontStyle('bold', 16, Colors.white),
  },
  talentMIddleView: {
    marginLeft: hp(2),
  },
  notes: {
    ...commonFontStyle('400', 12, Colors.white),
  },
  cartButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: hp(2.5),
  },
  cartText: {
    ...commonFontStyle('bold', 12, Colors.white),
  },
  cartButtonView: {
    backgroundColor: Colors.pink,
    // height: '100%',
    justifyContent: 'space-between',
    flexDirection: 'column',
    paddingTop: hp(1),
    borderRadius: 10,
  },
  bottomLine: {
    backgroundColor: Colors.darkPinkOpacity,
    height: 4,
    // width: '100%',
    borderRadius: 20,
    marginBottom: 3,
    marginHorizontal: 5,
    marginTop: hp(1),
  },
});
