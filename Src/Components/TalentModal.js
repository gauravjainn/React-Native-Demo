import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Colors from '../Themes/Colors';
import ApplicationStyles from '../Themes/ApplicationStyles';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {useState} from 'react';
import {commonFontStyle} from '../Themes/Fonts';

function CarouselPagination(props) {
  const {activeSlide, length} = props;

  return (
    <Pagination
      dotsLength={length}
      activeDotIndex={activeSlide}
      dotContainerStyle={{marginHorizontal: 3}}
      containerStyle={{
        bottom: 0,
        position: 'absolute',
        width: '100%',
        paddingVertical: 5,
      }}
      dotStyle={{
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
      }}
      inactiveDotStyle={{
        width: 8,
        height: 8,
        borderRadius: 8 / 2,
      }}
      inactiveDotOpacity={0.4}
      inactiveDotScale={1}
      inactiveDotColor={Colors.gray}
      dotColor={Colors.black}
    />
  );
}

export default function TalentModal({visible, onClose, talent}) {
  const data = [0, 1, 2, 3, 4, 5];
  const layout = useWindowDimensions();
  const [activeSlide, setActiveCarousel] = useState(0);
  const RenderCarouselItem = ({item, index}) => {
    return (
      <View>
        <Image
          style={styles.imageCarousel}
          source={require('../Icons/sampleImage.jpeg')}
        />
      </View>
    );
  };
  return (
    <View>
      <Modal
        avoidKeyboard={true}
        style={styles.modal}
        isVisible={visible}
        onBackdropPress={() => onClose()}>
        <View style={styles.modalContainer}>
          <TouchableOpacity
            onPress={() => onClose()}
            style={styles.closeImageView}>
            <Image
              source={require('../Icons/close/close.png')}
              style={ApplicationStyles.closeImage}
            />
          </TouchableOpacity>
          <View style={styles.carouselView}>
            <Carousel
              sliderWidth={layout.width - hp(4)}
              itemWidth={layout.width - hp(4)}
              data={data}
              renderItem={RenderCarouselItem}
              inactiveSlideOpacity={1}
              //   autoplay={true}
              //   loop={true}
              horizontal={true}
              autoplayDelay={1000}
              useNativeDriver={true}
              autoplayInterval={1000}
              enableMomentum={false}
              lockScrollWhileSnapping={true}
              inactiveSlideScale={1}
              onSnapToItem={index => setActiveCarousel(index)}
            />
            <View>
              <CarouselPagination
                activeSlide={activeSlide}
                length={data.length}
              />
            </View>
          </View>
          <View style={styles.mainContent}>
            <View style={styles.topHeader}>
              <Text style={styles.noteTExt}>
                Top Notes: Bergamot, Grape Fruit, Apple
              </Text>
              <View style={styles.exclusiveView}>
                <Text style={styles.exclusiveText}>EXCLUSIVE</Text>
              </View>
            </View>
            <View style={styles.titleMainView}>
              <Text style={styles.title}>{talent.name_en}</Text>
              <View style={styles.priceView}>
                <Text style={styles.Price}>${talent.price.cost_business}</Text>
                <Text style={styles.salePrice}>${talent.price.cost}</Text>
              </View>
            </View>
            <View style={styles.line}></View>
            <View style={[styles.titleMainView, {alignItems: 'center'}]}>
              <View style={styles.priceView}>
                <Image
                  source={{uri: talent.user.avatar_url}}
                  style={styles.profileImage}
                />
                <View>
                  <Text style={styles.name}>By Maged el Masry </Text>
                  <Text style={styles.nameDes}>Actors Egypt</Text>
                </View>
              </View>
              <View style={{alignItems: 'center'}}>
                <View style={styles.priceView}>
                  <Image source={require('../Icons/star/starSolid.png')} />
                  <Text style={styles.ratingText}>4.9</Text>
                </View>
                <Text style={styles.noteTExt}>33 Reviews</Text>
              </View>
            </View>
            <View style={styles.desView}>
              <Text style={styles.title}>Description</Text>
              <Text style={styles.desText} numberOfLines={4}>
                {talent.bio_en}
              </Text>
            </View>
            <View style={styles.bottomButtons}>
              <TouchableOpacity style={styles.addVideoButton}>
                <Image source={require('../Icons/addVideo/addVideo.png')} />
                <View>
                  <Text style={styles.buttonText}>ADD VIDEO</Text>
                  <Text style={styles.buttonText}>REVIEW</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={styles.addCartButton}>
                <Image source={require('../Icons/cart/cart.png')} />
                <View>
                  <Text style={styles.buttonText}>ADD TO CART</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    paddingVertical: hp(2.5),
    paddingHorizontal: hp(2),
    backgroundColor: Colors.white,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 4,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
  },
  closeImageView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  carouselView: {
    marginTop: hp(2),
  },
  imageCarousel: {
    width: '100%',
    height: hp(20),
    resizeMode: 'contain',
  },
  mainContent: {
    paddingVertical: hp(2),
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noteTExt: {
    ...commonFontStyle('bold', 12, Colors.darkGray),
  },
  exclusiveView: {
    backgroundColor: Colors.pink,
    paddingVertical: 2,
    paddingHorizontal: 9,
    borderRadius: 3,
  },
  exclusiveText: {
    ...commonFontStyle('bold', 10, Colors.white),
  },
  titleMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(1),
  },
  title: {
    ...commonFontStyle('bold', 16, Colors.black),
    width: '60%',
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  Price: {
    ...commonFontStyle('bold', 20, Colors.black),
    textDecorationLine: 'line-through',
  },
  salePrice: {
    ...commonFontStyle('bold', 20, Colors.pink),
    marginLeft: hp(1.5),
  },
  line: {
    height: 1,
    width: '100%',
    backgroundColor: Colors.gray,
    marginVertical: hp(1),
  },
  profileImage: {
    height: 55,
    width: 55,
    resizeMode: 'cover',
    borderRadius: 55 / 2,
  },
  name: {
    marginLeft: hp(1.5),
    ...commonFontStyle('bold', 16, Colors.black),
  },
  nameDes: {
    marginLeft: hp(1.5),
    ...commonFontStyle('400', 16, Colors.black),
  },
  ratingText: {
    ...commonFontStyle('bold', 14, Colors.black),
    marginLeft: hp(1),
  },
  desView: {
    paddingVertical: hp(1.5),
  },
  desText: {
    ...commonFontStyle('400', 14, Colors.darkGray),
    marginTop: 5,
  },
  bottomButtons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flex: 1,
  },
  addVideoButton: {
    backgroundColor: Colors.black,
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: hp(2),
    height: '100%',
    width: '37%',
    justifyContent: 'center',
  },
  buttonText: {
    ...commonFontStyle('bold', 12, Colors.white),
    marginLeft: hp(2),
  },
  addCartButton: {
    backgroundColor: Colors.pink,
    paddingHorizontal: hp(1.5),
    paddingVertical: hp(1),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: hp(2),
    height: '100%',
    width: '57%',
  },
});
