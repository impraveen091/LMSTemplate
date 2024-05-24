import {
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Slider from '@react-native-community/slider';
import {useSelector} from 'react-redux';
import Video from 'react-native-video';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../../themes';

import {
  Arrow_Drop_Down,
  Back_Dark_Icon,
  Back_Light_Icon,
  Forward,
  FullScreen,
  Lesson_Icon,
  Play_Button,
  Play_Circle,
  Rewind,
  Save,
  Share_Dark,
  Share_Light,
  Star_Icon_Filled,
  User_Multiple_Icon,
} from '../../../../assets/svgs';
import {
  getHeight,
  isAndroid,
  moderateScale,
} from '../../../../common/constants';
import CText from '../../../../components/common/CText';
import About from './About';
import Content from './Content';
import Reviews from './Reviews';
import CButton from '../../../../components/common/CButton';
import strings from '../../../../i18n/strings';
import CSafeAreaView from '../../../../components/common/CSafeAreaView';
import {StackNav} from '../../../../navigation/NavigationKeys';
import FullScreenVideoPlayer from './FullScreenVideoPlayer';

const CourseDetail = ({route}) => {
  const {BtnTitle} = route.params;
  const videoRef = useRef(null);
  const navigation = useNavigation();
  const [videoPaused, setVideoPaused] = useState(true);
  const [showControl, setShowControl] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [currentTab, setCurrentTab] = useState('About');
  const [fullScreen, setFullScreen] = useState(false);

  const colors = useSelector(state => state.theme.theme);

  const onPlayPausePress = () => {
    setVideoPaused(!videoPaused);
  };
  const onshowControl = () => {
    setShowControl(!showControl);
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

  useEffect(() => {
    if (showControl) {
      setTimeout(() => {
        setShowControl(!showControl);
      }, 2000);
    }
  }, [showControl]);

  const goBack = () => {
    navigation.goBack();
  };
  const navigateNext = () => {
    if (BtnTitle == strings.enrollNow) {
      navigation.navigate('EnrollCourse');
    } else if (BtnTitle == strings.letsLearning) {
      videoRef.current.presentFullscreenPlayer();
      videoRef.current.seek(0);
    }
  };
  const CourseDetailInfo = ({icon, data}) => {
    return (
      <View style={localStyles.detailInfo}>
        {icon}
        <CText type={'r14'}>{data}</CText>
      </View>
    );
  };

  const navigateToRateUS = () => {
    navigation.navigate(StackNav.RateCourse);
  };

  const TabTitle = ({title}) => {
    return (
      <TouchableOpacity
        onPress={() => setCurrentTab(title)}
        style={[
          localStyles.tabTitle,
          {
            backgroundColor:
              currentTab == title ? colors.primary : colors.tranparent,
          },
        ]}>
        <CText
          type={'m14'}
          color={
            currentTab == title ? colors.white : colors.notSelectedTextColor
          }>
          {title}
        </CText>
      </TouchableOpacity>
    );
  };

  const ControlVideo = ({onPress, icon}) => {
    return <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>;
  };
  const videoFullScreen = () => {
    if (isAndroid) {
      setFullScreen(true);
    } else {
      videoRef.current.presentFullscreenPlayer();
    }
  };
  const rewindVideo = () => {
    videoRef.current.seek(currentTime - 10);
  };
  const forwardVideo = () => {
    videoRef.current.seek(currentTime + 10);
  };
  return (
    <CSafeAreaView style={localStyles.root}>
      <TouchableWithoutFeedback onPress={onshowControl}>
        <View style={localStyles.videoContainer}>
          <Video
            resizeMode={'cover'}
            ref={videoRef}
            paused={videoPaused}
            onLoad={data => {
              setDuration(data.duration);
            }}
            onProgress={data => {
              if (!isSeeking) {
                setCurrentTime(data.currentTime);
              }
            }}
            repeat={true}
            // controls={true}
            source={{
              uri: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
            }}
            style={[localStyles.courseVideo]}
          />
          {videoPaused || showControl ? (
            <View style={localStyles.videoControl}>
              <View style={localStyles.videoControlContainer}>
                <TouchableOpacity onPress={goBack}>
                  {colors.dark == 'dark' ? (
                    <Back_Dark_Icon />
                  ) : (
                    <Back_Light_Icon />
                  )}
                </TouchableOpacity>
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
                <View style={localStyles.videoControlContainer2}>
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
      <View
        style={[
          localStyles.container2,
          {backgroundColor: colors.backgroundColor},
        ]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={localStyles.titleContainer}>
            <CText type={'s24'}>Illustration: Find your Art Style</CText>
            <View style={styles.rowSpaceBetween}>
              <View style={styles.rowSpaceBetween}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1638727295415-286409421143?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
                  }}
                  resizeMode="cover"
                  style={localStyles.avatar}
                />
                <View style={styles.p10}>
                  <CText type={'m14'}>John Doe</CText>
                  <CText type={'r12'} color={colors.gray}>
                    Illustrator
                  </CText>
                </View>
              </View>
              <View>
                {BtnTitle == strings.enrollNow ? (
                  <View>
                    <CText type={'b16'}>$50.00</CText>
                    <CText
                      type={'r14'}
                      color={colors.gray}
                      align="right"
                      style={{
                        textDecorationLine: 'line-through',
                        textDecorationColor: colors.gray,
                        textDecorationStyle: 'solid',
                      }}>
                      $55.00
                    </CText>
                  </View>
                ) : null}
              </View>
            </View>
            <View>
              <TouchableOpacity
                onPress={navigateToRateUS}
                style={styles.rowSpaceBetween}>
                <CText type={'s14'} color={colors.primary}>
                  Rate Course!!
                </CText>
              </TouchableOpacity>
            </View>
          </View>
          <View style={localStyles.detailContainer}>
            <CourseDetailInfo icon={<Star_Icon_Filled />} data={'5.0'} />
            <CourseDetailInfo icon={<Lesson_Icon />} data={'12 Lessons'} />
            <CourseDetailInfo
              icon={<User_Multiple_Icon />}
              data={'49.091 students'}
            />
          </View>
          <View style={localStyles.tabContainer}>
            <View
              style={[localStyles.tabBar, {backgroundColor: colors.inputBg}]}>
              <TabTitle title="About" />
              <TabTitle title="Content" />
              <TabTitle title="Reviews" />
            </View>
            {currentTab == 'About' ? <About /> : null}
            {currentTab == 'Content' ? <Content /> : null}
            {currentTab == 'Reviews' ? <Reviews /> : null}
          </View>
        </ScrollView>
      </View>
      <View
        style={[
          localStyles.bottomContainer,
          {backgroundColor: colors.backgroundColor},
        ]}>
        <CButton
          icon={<Save />}
          type="s16"
          bgColor={'transparent'}
          containerStyle={[
            localStyles.saveBtn,
            {
              borderColor: colors.primary,
            },
          ]}
        />
        <CButton
          onPress={navigateNext}
          title={BtnTitle}
          type="s16"
          containerStyle={localStyles.enrollBtn}
        />
      </View>
      <Modal visible={fullScreen} onRequestClose={() => setFullScreen(false)}>
        <FullScreenVideoPlayer setFullScreen={setFullScreen} />
      </Modal>
    </CSafeAreaView>
  );
};

export default CourseDetail;
const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  courseVideo: {
    width: '100%',
    height: '100%',
  },
  videoContainer: {
    width: '100%',
    height: getHeight(244),
  },
  videoControl: {
    position: 'absolute',
    ...styles.p20,
    ...styles.pb30,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent',
    ...styles.justifyBetween,
  },
  videoControlContainer: {
    ...styles.rowSpaceBetween,
  },
  playButtonContainer: {
    ...styles.selfCenter,
  },
  slider: {
    flex: 1,
  },
  videoControlContainer2: {
    ...styles.rowSpaceBetween,
  },
  controlStyle: {
    ...styles.rowSpaceBetween,
    gap: moderateScale(10),
  },
  container2: {
    ...styles.flex,
    top: -moderateScale(20),
    borderTopEndRadius: moderateScale(20),
    borderTopStartRadius: moderateScale(20),
    ...styles.pb60,
    ...styles.pv20,
  },
  titleContainer: {
    ...styles.mh20,
  },
  avatar: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(20),
  },
  detailContainer: {
    ...styles.flexRow,
    gap: moderateScale(10),
    ...styles.mh20,
  },
  detailInfo: {
    gap: moderateScale(5),
    ...styles.flexRow,
    ...styles.itemsCenter,
  },
  tabBar: {
    borderRadius: moderateScale(50),
    ...styles.rowSpaceBetween,
    padding: moderateScale(8),
    ...styles.mt25,
    ...styles.mh20,
  },
  tabTitle: {
    ...styles.p10,
    ...styles.center,
    ...styles.flex,
    borderRadius: moderateScale(50),
  },
  bottomContainer: {
    ...styles.rowSpaceBetween,
    position: 'absolute',
    bottom: 0,
    width: '100%',
    ...styles.p10,
    ...styles.ph20,
  },
  saveBtn: {
    borderWidth: moderateScale(1),
    width: moderateScale(48),
    borderRadius: moderateScale(18),
    height: moderateScale(48),
  },
  enrollBtn: {
    width: '80%',
    height: moderateScale(48),
  },
});
