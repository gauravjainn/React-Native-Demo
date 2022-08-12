import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Animated,
  StatusBar,
} from 'react-native';
import React, {useState, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Video from 'react-native-video';
import {styles} from './styles';
import Talent from '../../Components/Talent';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import TalentModal from '../../Components/TalentModal';
import {LIKE_VIDEO} from '../../Redux/Types';

export default function VideoRaw({item, isVisible, index, mute, setMute}) {
  const dispatch = useDispatch();
  const [videoDuration, setVideoDuration] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const videoError = error => {
    // Manage error here
  };

  const onLoad = data => {
    setVideoDuration(data.duration);
  };

  const handleEnd = () => {};

  const handleProgress = progress => {
    setProgress(progress.currentTime / videoDuration);
  };

  const onLikeVideo = () => {
    dispatch({type: LIKE_VIDEO, payload: index});
  };
  return (
    <View>
      <Video
        ref={videoRef}
        fullscreenAutorotate={true}
        source={{uri: item.url}}
        autoPlay={true}
        repeat={true}
        onError={videoError}
        resizeMode={'cover'}
        muted={(!isVisible && true) || mute}
        style={styles.videoView}
        playInBackground={false}
        paused={!isVisible}
        onLoad={onLoad}
        onProgress={handleProgress}
        poster={item.thumbnail}
        posterResizeMode={'cover'}
        removeClippedSubviews={true}
      />
      <View style={styles.absoluteView}>
        <View style={styles.buttonsMainView}>
          <View style={styles.LikeView}>
            <TouchableOpacity
              onPress={() => onLikeVideo()}
              style={styles.likeButton}>
              <Image
                source={require('../../Icons/like/like.png')}
                style={[ApplicationStyles.iconImage]}
              />
            </TouchableOpacity>
            <Text style={styles.likeText}>{item.likeCount}</Text>
          </View>
        </View>
        <View style={styles.buttonsMainView}>
          <View style={styles.LikeView}>
            <TouchableOpacity style={styles.likeButton}>
              <Image
                source={require('../../Icons/comments/comments.png')}
                style={[ApplicationStyles.iconImage]}
              />
            </TouchableOpacity>
            <Text style={styles.likeText}>27.2K</Text>
          </View>
        </View>
        <View style={styles.buttonsMainView}>
          <TouchableOpacity style={styles.profileButton}>
            <Image
              source={{uri: item.talent.user.avatar_url}}
              style={styles.profileImage}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.buttonsMainView}>
          <TouchableOpacity onPress={() => setMute(!mute)}>
            <Image
              source={require('../../Icons/audiMute/audiMute.png')}
              style={styles.audioButton}
            />
          </TouchableOpacity>
        </View>
        <Talent
          talent={item.talent}
          onPressCart={() => setModalVisible(true)}
          duration={videoDuration}
          progress={progress}
        />
      </View>

      <TalentModal
        talent={item.talent}
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}
