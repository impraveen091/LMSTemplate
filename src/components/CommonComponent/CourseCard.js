import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from '../../themes';
import {useSelector} from 'react-redux';
import {
  deviceWidth,
  getHeight,
  getWidth,
  moderateScale,
} from '../../common/constants';
import CText from '../common/CText';
import {Star_Icon_Filled, User_Icon} from '../../assets/svgs';

const CourseCard = ({item, index, navigateToCourseDetail, isCompleted}) => {
  const colors = useSelector(state => state.theme.theme);
  return (
    <TouchableOpacity
      onPress={navigateToCourseDetail}
      style={[
        localStyles.courseContainer,
        {
          backgroundColor: colors.categoryColor,
          shadowColor: colors.shadowColor,
        },
      ]}>
      <View style={styles.flexRow}>
        <Image source={item.image} style={localStyles.cardImage} />
        <View
          style={[
            styles.flex,
            styles.ml10,
            {
              gap: moderateScale(5),
            },
          ]}>
          <CText type={'s14'} numberOfLines={2}>
            {item.title}
          </CText>
          {isCompleted && isCompleted ? (
            <View
              style={{
                gap: moderateScale(5),
              }}>
              <CText type={'r12'} numberOfLines={1} color={colors.gray}>
                {'Completed date'} : {item.completed_date}
              </CText>
              <CText type={'r12'} numberOfLines={1} color={colors.gray}>
                {'Grade'} : {item.grade}
              </CText>
            </View>
          ) : (
            <View style={styles.justifyBetween}>
              <CText type={'m14'} numberOfLines={1} color={colors.gray}>
                {'Mattias Adolfsson'}
              </CText>
              <View style={localStyles.ratingDetail}>
                <View style={styles.rowStart}>
                  <View style={styles.rowStart}>
                    <Star_Icon_Filled />
                    <CText type={'m14'} style={styles.ml5}>
                      {'5.0'}
                    </CText>
                  </View>
                  <View style={[styles.rowStart, styles.ml10]}>
                    <User_Icon />
                    <CText type={'m14'} style={styles.ml5}>
                      {'40.000'}
                    </CText>
                  </View>
                </View>
                <CText type={'s15'} color={colors.primary}>
                  {'$ 5.00'}
                </CText>
              </View>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;

const localStyles = StyleSheet.create({
  courseContainer: {
    ...styles.rowSpaceBetween,
    width: deviceWidth - moderateScale(40),
    ...styles.p15,
    ...styles.selfCenter,
    borderRadius: moderateScale(16),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  cardImage: {
    height: getHeight(88),
    borderRadius: moderateScale(12),
    width: getWidth(96),
    resizeMode: 'cover',
  },
  ratingDetail: {
    ...styles.rowSpaceBetween,
    ...styles.mt5,
  },
});
