// Libraries import
import {
  Pressable,
  StyleSheet,
  View,
  Platform,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useEffect, useRef, useState, useCallback} from 'react';
import Video from 'react-native-video';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';
import {FlashList} from '@shopify/flash-list';

// Local import
import {commonColor, styles} from '../../../themes';
import {
  isAndroid,
  moderateScale,
  screenFullHeight,
} from '../../../common/constants';
import {videoData} from '../../../api/constant';
import CText from '../../../components/common/CText';
import {
  Comment_Icon,
  Like_Icon,
  Option_Icon,
  Share_Icon,
} from '../../../assets/svgs';

export default function ReelTab() {
  const isFocused = useIsFocused();

  const [videoPlay, setVideoPlay] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [extraData, setExtraData] = useState(true);
  const [videoId, setVideoId] = useState('');

  useEffect(() => {
    setExtraData(!extraData);
  }, [videoPlay, activeVideoIndex, isFocused, videoId]);

  const viewConfig = useRef({viewAreaCoveragePercentThreshold: 50}).current;
  const keyExtractor = useCallback((item, index) => {
    return `item-${item?.id}`;
  }, []);

  const viewableItemsChanged = useRef(({viewableItems}) => {
    if (!!viewableItems?.length) {
      setVideoId(viewableItems[0]?.item?.id);
      setActiveVideoIndex(viewableItems[0].index);
      setVideoPlay(false);
    }
  }).current;

  const onSetLayout = e => setLayoutHeight(e.nativeEvent.layout.height);

  const renderItem = ({item, index}) => (
    <RenderReelComponent
      item={item}
      index={index}
      layoutHeight={layoutHeight}
      isFocused={isFocused}
      activeVideoIndex={activeVideoIndex}
      videoPlay={videoPlay}
    />
  );

  return (
    <View style={styles.flex}>
      <FlashList
        data={videoData}
        extraData={extraData}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        pagingEnabled={Platform.OS === 'ios'}
        viewabilityConfig={viewConfig}
        onViewableItemsChanged={viewableItemsChanged}
        onLayout={onSetLayout}
        drawDistance={layoutHeight}
        snapToInterval={Platform.OS === 'android' ? layoutHeight : undefined}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        disableIntervalMomentum={true}
        estimatedItemSize={!!layoutHeight ? layoutHeight : 300}
      />
    </View>
  );
}

const RenderReelComponent = React.memo(
  ({item, index, layoutHeight, isFocused, activeVideoIndex, videoPlay}) => {
    const colors = useSelector(state => state.theme.theme);

    const videoError = error => console.log('videoError', error);

    const RenderVideoItem = ({icon, onPress, data, size, color}) => {
      return (
        <Pressable onPress={onPress} style={localStyles.renderIconContainer}>
          {icon}
          {!!data && (
            <CText
              type="m14"
              style={styles.flex}
              color={colors.white}
              numberOfLines={1}>
              {data}
            </CText>
          )}
        </Pressable>
      );
    };

    return (
      <View
        style={{
          height: layoutHeight,
          backgroundColor: colors.darkBg,
        }}>
        <Pressable>
          {isFocused && (
            <Video
              source={{uri: item?.uri}}
              style={[
                localStyles.imageContainer,
                {backgroundColor: colors.darkBg},
              ]}
              // poster={item?.poster}
              posterResizeMode="cover"
              resizeMode="cover"
              repeat={true}
              onError={videoError}
              seekColor={colors.primary}
              playWhenInactive={false}
              paused={activeVideoIndex !== index || videoPlay}
              playInBackground={false}
            />
          )}
          <View style={localStyles.bottomContainer}>
            <View style={styles.flex}>
              <View style={styles.rowCenter}>
                <TouchableOpacity
                  // onPress={() =>
                  //   onPressProfile(item?.channelName, item?.avatarUri)
                  // }
                  style={styles.mb10}>
                  <Image
                    resizeMode="cover"
                    source={{uri: item?.avatarUri}}
                    style={localStyles.userImage}
                  />
                </TouchableOpacity>
                <View style={[styles.mh20, styles.flex]}>
                  <CText type="b18" numberOfLines={1} color={colors.white}>
                    {item?.channelName}
                  </CText>
                  <CText
                    type="m14"
                    style={styles.mt5}
                    numberOfLines={1}
                    color={colors.white}>
                    {item?.categoty}
                  </CText>
                </View>
              </View>
              <CText
                type="m14"
                color={colors.white}
                style={styles.mb20}
                numberOfLines={2}>
                {item?.caption}
              </CText>
              <TouchableOpacity
                // onPress={onPressMusic}
                style={localStyles.musicContainer}>
                <CText
                  type="m14"
                  style={styles.flex}
                  color={colors.white}
                  numberOfLines={1}>
                  {item?.musicName}
                </CText>
              </TouchableOpacity>
            </View>
            <View style={localStyles.verticalContainer}>
              <RenderVideoItem
                icon={<Like_Icon />}
                data={item?.likes}
                size={moderateScale(24)}
                // onPress={onPressReport}
              />
              <RenderVideoItem
                icon={<Comment_Icon />}
                data={item?.likes}
                // color={isLike ? colors.primary : colors.white}
                // onPress={onPressLike}
              />
              <RenderVideoItem
                icon={<Share_Icon />}
                data={item?.comments}
                // onPress={onPressComment}
              />
              <RenderVideoItem
                icon={<Option_Icon />}
                data={item?.bookmark}
                // onPress={onPressBookmark}
              />
            </View>
          </View>
        </Pressable>
      </View>
    );
  },
);

const localStyles = StyleSheet.create({
  imageContainer: {
    height: '100%',
    width: '100%',
  },
  muteIcon: {
    position: 'absolute',
    top: screenFullHeight / 2 - moderateScale(30),
    ...styles.selfCenter,
    borderRadius: moderateScale(100),
    backgroundColor: 'rgba(52, 52, 52, 0.4)',
  },
  topHeader: {
    position: 'absolute',
    top: isAndroid ? moderateScale(10) : moderateScale(50),
    left: moderateScale(20),
    right: 0,
    zIndex: 1,
    ...styles.pr10,
    ...styles.pt15,
  },
  headerContainer: {
    position: 'absolute',
    top: moderateScale(50),
    ...styles.ph20,
    ...styles.flex,
    ...styles.rowSpaceBetween,
  },
  headerInnerContainer: {
    ...styles.flex,
    ...styles.rowCenter,
  },
  headerCetegoryItemContainer: {
    ...styles.mh10,
    ...styles.pb15,
    borderBottomWidth: moderateScale(1),
  },
  bottomContainer: {
    position: 'absolute',
    bottom: moderateScale(10),
    ...styles.ph10,
    ...styles.flexRow,
    ...styles.itemsEnd,
  },
  userImage: {
    width: moderateScale(60),
    height: moderateScale(60),
    borderRadius: moderateScale(30),
    borderWidth: moderateScale(2),
    borderColor: commonColor.primary,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  musicImage: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: moderateScale(15),
    ...styles.mr25,
  },
  musicIcon1: {
    position: 'absolute',
    width: moderateScale(16),
    height: moderateScale(16),
    left: moderateScale(25),
    bottom: moderateScale(35),
  },
  musicContainer: {
    ...styles.rowCenter,
  },
  descriptionStyle: {
    height: moderateScale(48),
  },
  verticalContainer: {
    ...styles.pl5,
    width: moderateScale(65),
    ...styles.alignCenter,
  },
  renderIconContainer: {
    ...styles.itemsCenter,
    ...styles.mt20,
  },
  followContainer: {
    ...styles.ph15,
    ...styles.pv10,
    ...styles.itemsCenter,
    borderRadius: moderateScale(22),
    backgroundColor: commonColor.primary,
  },
});
