import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../themes';
import {getHeight, moderateScale} from '../../common/constants';
import {useSelector} from 'react-redux';
import CText from '../common/CText';
import {Star_Icon_Filled, User_Icon} from '../../assets/svgs';

const CourseCard = ({item, showProgress, onPressCard = () => {}}) => {
  const colors = useSelector(state => state.theme.theme);
  const detailComponent = () => {
    if (!!showProgress) {
      return (
        <View style={styles.rowSpaceBetween}>
          <View
            style={[
              localStyles.progressBar,
              {backgroundColor: colors.primary20},
            ]}>
            <View
              style={[
                localStyles.progressBar,
                {
                  width: `${item.progress}%`,
                  backgroundColor: colors.primary,
                },
              ]}></View>
          </View>
          <CText type={'m12'}>{item.progress}%</CText>
        </View>
      );
    } else {
      return (
        <View style={localStyles.ratingDetail}>
          <View style={styles.rowStart}>
            <View style={styles.rowStart}>
              <Star_Icon_Filled />
              <CText type={'m14'} style={styles.ml5}>
                {'5.0'}
              </CText>
            </View>
            <View style={[styles.rowStart, styles.ml15]}>
              <User_Icon />
              <CText type={'m14'} style={styles.ml5}>
                {'40,000'}
              </CText>
            </View>
          </View>
          <CText type={'s15'} color={colors.primary}>
            {'$ 5.00'}
          </CText>
        </View>
      );
    }
  };
  return (
    <TouchableOpacity
      onPress={onPressCard}
      style={[
        localStyles.cardContainer,
        {
          backgroundColor: colors.socialButtonBackground,
        },
      ]}>
      <Image source={item.image} style={localStyles.cardImage} />
      <View style={styles.mt10}>
        <View
          style={{
            height: getHeight(50),
          }}>
          <CText type={'s14'} numberOfLines={2}>
            {item?.title}
          </CText>
        </View>
        <CText type={'r14'} style={styles.mt5} color={colors.gray}>
          {'Mattias Adolfsson'}
        </CText>
        {detailComponent()}
      </View>
    </TouchableOpacity>
  );
};

const localStyles = StyleSheet.create({
  cardContainer: {
    ...styles.p15,
    ...styles.mr25,
    borderRadius: moderateScale(24),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 10,
    width: moderateScale(288),
  },
  cardImage: {
    height: getHeight(144),
    borderRadius: moderateScale(16),
    width: '100%',
    resizeMode: 'cover',
  },
  ratingDetail: {
    ...styles.rowSpaceBetween,
    ...styles.mt5,
  },
  progressBar: {
    height: moderateScale(4),
    width: '85%',
    borderRadius: moderateScale(4),
  },
});

export default CourseCard;
