import {View, Text, StatusBar, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getNewVideo} from '../../Redux/Actions/VideoAction';
import Video from 'react-native-video';
import {styles} from './styles';
import Talent from '../../Components/Talent';
import ApplicationStyles from '../../Themes/ApplicationStyles';
import TalentModal from '../../Components/TalentModal';

export default function HomeScreen() {
  const dispatch = useDispatch();
  const videoData = useSelector(e => e.common.videoData);
  const [videoDuration, setVideoDuration] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    dispatch(getNewVideo());
  }, []);

  const onLoad = data => {
    setVideoDuration(data.duration);
  };

  const handleEnd = () => {};

  const handleProgress = progress => {
    setProgress(progress.currentTime / videoDuration);
  };

  return (
    <View>
      <StatusBar backgroundColor="transparent" translucent={true} />
      {videoData && videoData.data && (
        <View>
          <Video
            repeat={true}
            resizeMode="cover"
            style={styles.videoView}
            source={{uri: videoData.data[0].url}}
            // paused={true}
            poster={videoData.data[0].thumbnail}
            posterResizeMode={'cover'}
            onLoad={onLoad}
            onProgress={handleProgress}
            onEnd={handleEnd}
          />
          <View style={styles.absoluteView}>
            <View style={styles.buttonsMainView}>
              <View style={styles.LikeView}>
                <TouchableOpacity style={styles.likeButton}>
                  <Image
                    source={require('../../Icons/like/like.png')}
                    style={[ApplicationStyles.iconImage]}
                  />
                </TouchableOpacity>
                <Text style={styles.likeText}>27.2K</Text>
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
                  source={{uri: videoData.data[0].talent.user.avatar_url}}
                  style={styles.profileImage}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonsMainView}>
              <TouchableOpacity>
                <Image
                  source={require('../../Icons/audiMute/audiMute.png')}
                  style={styles.audioButton}
                />
              </TouchableOpacity>
            </View>
            <Talent
              talent={videoData.data[0].talent}
              onPressCart={() => setModalVisible(true)}
              duration={videoDuration}
              progress={progress}
            />
          </View>
        </View>
      )}
      {videoData && videoData.data && (
        <TalentModal
          talent={videoData.data[0].talent}
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
        />
      )}
    </View>
  );
}
