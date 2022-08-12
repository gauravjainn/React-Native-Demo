import {View, StatusBar, Dimensions, Animated, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNewVideo} from '../../Redux/Actions/VideoAction';
import {useRef} from 'react';
import VideoRaw from './VideoRaw';
import Colors from '../../Themes/Colors';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const videoData = useSelector(e => e.common.videoData);
  const refFlatList = useRef();
  const [scrollY] = useState(new Animated.Value(0));
  const [scrollInfo, setScrollInfo] = useState({isViewable: true, index: 0});
  const [displayHeight, setDisplayHeight] = useState(
    Dimensions.get('window').height,
  );
  const [mute, setMute] = useState(false);
  const next_page_url = useSelector(e => e.common.next_page_url);

  const viewabilityConfig = {viewAreaCoveragePercentThreshold: 80};
  const onViewableItemsChanged = useRef(viewableItems => {
    const info = {
      isViewable: viewableItems.changed[0].isViewable,
      index: viewableItems.changed[0].index,
    };
    setScrollInfo(info);
  });
  const transitionAnimation = index => {
    const rowHeight = displayHeight * index;
    return {
      opacity: scrollY.interpolate({
        inputRange: [
          rowHeight,
          rowHeight + displayHeight / 2,
          rowHeight + displayHeight,
        ],
        outputRange: [1, 0.2, 0],
        useNativeDriver: true,
        extrapolate: 'clamp',
      }),
    };
  };

  const getItemLayout = (item, index) => ({
    length: displayHeight,
    offset: displayHeight * index,
    index,
  });

  const onLayout = ({nativeEvent}) => {
    setDisplayHeight(
      (!Platform.OS == 'ios' && nativeEvent.layout.height) ||
        Dimensions.get('window').height,
    );
  };

  const onEndReached = () => {
    // make api call here
    console.log('hereeee end', next_page_url);
    dispatch(getNewVideo(next_page_url));
  };

  const keyExtractor = (item, index) => {
    return `${item.id}`;
  };

  useEffect(() => {
    dispatch(getNewVideo('https://stg.starzly.io/api/featured-videos?page=1'));
  }, []);

  const renderItem = ({item, index}) => {
    const scrollIndex = scrollInfo?.index || 0;
    const isNext = index >= scrollIndex - 1 && index <= scrollIndex + 1;
    return (
      <VideoRaw
        item={item}
        index={index}
        visible={scrollInfo}
        isVisible={scrollIndex === index}
        mute={mute}
        setMute={type => setMute(type)}
      />
    );
  };

  return (
    <View onLayout={onLayout}>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {videoData && (
        <Animated.FlatList
          pagingEnabled
          showsVerticalScrollIndicator={false}
          ref={refFlatList}
          automaticallyAdjustContentInsets={true}
          onViewableItemsChanged={onViewableItemsChanged.current}
          viewabilityConfig={viewabilityConfig}
          onScroll={Animated.event(
            [
              {
                nativeEvent: {contentOffset: {y: scrollY}},
              },
            ],
            {
              useNativeDriver: false,
            },
          )}
          data={videoData}
          renderItem={renderItem}
          getItemLayout={getItemLayout}
          keyExtractor={keyExtractor}
          onEndReachedThreshold={0.3}
          onEndReached={({distanceFromEnd}) => {
            console.log(distanceFromEnd);
            onEndReached();
          }}
          removeClippedSubviews={true}
        />
      )}
    </View>
  );
}
