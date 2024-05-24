import {StyleSheet, FlatList} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Recommended} from '../../../api/constant';
import CourseCard from '../../../components/CommonComponent/CourseCard';
import CHeader from '../../../components/common/CHeader';
import {styles} from '../../../themes';
import {moderateScale} from '../../../common/constants';
import {StackNav} from '../../../navigation/NavigationKeys';
import CSafeAreaView from '../../../components/common/CSafeAreaView';

const SavedCourseList = ({route}) => {
  const {title} = route.params;
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <CHeader
        title={title}
        showBackButton={true}
        customTextStyle={localStyles.headerText}
      />
    );
  };
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
    navigation.navigate(StackNav.CourseDetail, {
      BtnTitle: strings.letsLearning,
    });
  };
  return (
    <CSafeAreaView>
      <FlatList
        data={Recommended}
        showsVerticalScrollIndicator={false}
        renderItem={renderCoursesItem}
        ListHeaderComponent={renderHeader}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={localStyles.list}
      />
    </CSafeAreaView>
  );
};

export default SavedCourseList;

const localStyles = StyleSheet.create({
  headerText: {
    ...styles.selfCenter,
    ...styles.flex,
    textAlign: 'center',
  },
  list: {
    gap: moderateScale(25),
    ...styles.pb20,
  },
});
