import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

import {StackNav} from '../../../../navigation/NavigationKeys';
import {Recommended} from '../../../../api/constant';
import {moderateScale} from '../../../../common/constants';
import {styles} from '../../../../themes';
import CourseCard from '../../../../components/CommonComponent/CourseCard';

const Courses = () => {
  const navigation = useNavigation();

  const renderCoursesItem = ({item, index}) => {
    return (
      <CourseCard
        item={item}
        index={index}
        navigateToCourseDetail={navigateToCourseDetail}
      />
    );
  };

  const navigateToCourseDetail = () => {
    navigation.navigate(StackNav.CourseDetail, {BtnTitle: strings.enrollNow});
  };

  return (
    <FlatList
      data={Recommended}
      showsVerticalScrollIndicator={false}
      renderItem={renderCoursesItem}
      keyExtractor={(item, index) => index.toString()}
      style={localStyles.list}
    />
  );
};

export default Courses;

const localStyles = StyleSheet.create({
  list: {
    gap: moderateScale(25),
    ...styles.pv10,
  },
});
