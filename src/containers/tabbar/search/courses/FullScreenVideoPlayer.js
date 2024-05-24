import {
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {useSelector} from 'react-redux';
import Slider from '@react-native-community/slider';
import Video from 'react-native-video';
import {styles} from '../../../../themes';
import {isAndroid, moderateScale} from '../../../../common/constants';
import {
  Arrow_Drop_Down,
  Forward,
  FullScreen,
  Play_Button,
  Play_Circle,
  Rewind,
  Share_Dark,
  Share_Light,
} from '../../../../assets/svgs';
import CText from '../../../../components/common/CText';

const FullScreenVideoPlayer = ({setFullScreen}) => {
  const colors = useSelector(state => state.theme.theme);
  const videoRef = useRef(null);

  const [videoPaused, setVideoPaused] = useState(true);
  const [showControl, setShowControl] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);

  useEffect(() => {
    if (showControl) {
      setTimeout(() => {
        setShowControl(!showControl);
      }, 2000);
    }
  }, [showControl]);
  const onshowControl = () => {
    setShowControl(!showControl);
  };
  const videoFullScreen = () => {
    if (isAndroid) {
      setFullScreen(false);
    }
  };
  const onPlayPausePress = () => {
    setVideoPaused(!videoPaused);
  };
  const rewindVideo = () => {
    videoRef.current.seek(currentTime - 10);
  };
  const forwardVideo = () => {
    videoRef.current.seek(currentTime + 10);
  };
  const ControlVideo = ({onPress, icon}) => {
    return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
  };
  const handleSeek = value => {
    if (videoRef.current) {
      videoRef.current.seek(value);
      setCurrentTime(value);
    }
  };

  const onSliderValueChange = value => {
    setCurrentTime(value);
  };

  const onSlidingComplete = value => {
    setIsSeeking(false);
    handleSeek(value);
  };
  return (
    <TouchableWithoutFeedback onPress={onshowControl}>
      <View>
        <Video
          ref={videoRef}
          paused={videoPaused}
          resizeMode={'contain'}
          onLoad={data => {
            setDuration(data.duration);
          }}
          onProgress={data => {
            if (!isSeeking) {
              setCurrentTime(data.currentTime);
            }
          }}
          repeat={true}
          controls={true}
          source={{
            uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
          }}
          style={localStyles.video}
        />
        {videoPaused || showControl ? (
          <View style={localStyles.videoControl}>
            <View style={[localStyles.videoControlContainer]}>
              {colors.dark == 'dark' ? <Share_Dark /> : <Share_Light />}
            </View>
            <TouchableOpacity
              onPress={onPlayPausePress}
              style={localStyles.playButtonContainer}>
              <Play_Button />
            </TouchableOpacity>
            <View>
              <View style={styles.rowSpaceBetween}>
                <Slider
                  style={localStyles.slider}
                  value={currentTime}
                  minimumValue={0}
                  maximumValue={duration}
                  minimumTrackTintColor={colors.primary}
                  maximumTrackTintColor={colors.primary30}
                  thumbTintColor={colors.primary}
                  onValueChange={onSliderValueChange}
                  onSlidingComplete={onSlidingComplete}
                  onTouchStart={() => setIsSeeking(true)}
                />
              </View>
              <View
                style={[
                  localStyles.videoControlContainer2,
                  {
                    backgroundColor: colors.primary,
                  },
                ]}>
                <View style={localStyles.controlStyle}>
                  <ControlVideo
                    onPress={rewindVideo}
                    icon={
                      <Rewind
                        width={moderateScale(26)}
                        height={moderateScale(26)}
                      />
                    }
                  />
                  <ControlVideo
                    onPress={onPlayPausePress}
                    icon={
                      <Play_Circle
                        width={moderateScale(26)}
                        height={moderateScale(26)}
                      />
                    }
                  />
                  <ControlVideo
                    onPress={forwardVideo}
                    icon={
                      <Forward
                        width={moderateScale(26)}
                        height={moderateScale(26)}
                      />
                    }
                  />
                </View>
                <View style={localStyles.controlStyle}>
                  <View style={styles.rowSpaceBetween}>
                    <CText type={'m12'} color={colors.white}>
                      1080P
                    </CText>
                    <Arrow_Drop_Down
                      width={moderateScale(26)}
                      height={moderateScale(26)}
                    />
                  </View>
                  <TouchableOpacity onPress={videoFullScreen}>
                    <FullScreen
                      width={moderateScale(26)}
                      height={moderateScale(26)}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        ) : null}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FullScreenVideoPlayer;

const localStyles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
  videoControl: {
    position: 'absolute',
    ...styles.p20,
    ...styles.pb30,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    ...styles.justifyBetween,
  },
  videoControlContainer: {
    ...styles.selfEnd,
  },
  playButtonContainer: {
    ...styles.selfCenter,
  },
  slider: {
    flex: 1,
    width: '100%',
    ...styles.mv20,
  },
  videoControlContainer2: {
    ...styles.rowSpaceBetween,
    ...styles.pv10,
    borderRadius: moderateScale(10),
  },
  controlStyle: {
    ...styles.rowSpaceBetween,
    gap: moderateScale(10),
  },
});
