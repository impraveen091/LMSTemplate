import {View, StyleSheet, FlatList, Image} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import CSafeAreaView from '../../../../components/common/CSafeAreaView';
import {styles} from '../../../../themes';
import CHeader from '../../../../components/common/CHeader';
import strings from '../../../../i18n/strings';
import {useSelector} from 'react-redux';
import {getHeight, getWidth, moderateScale} from '../../../../common/constants';
import {Search_Icon} from '../../../../assets/svgs';
import CInput from '../../../../components/common/CInput';
import CourseCard from '../../../../components/CommonComponent/CourseCard';
import {StackNav} from '../../../../navigation/NavigationKeys';

const Courses = ({route}) => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const title = route.params.title;
  const data = route.params.data;

  const [searchCourse, setSearchCourse] = useState('');

  const onChangedSearchText = text => setSearchCourse(text);

  const renderCategoryItem = ({item, index}) => {
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
    <CSafeAreaView style={localStyles.root}>
      <CHeader
        title={title}
        isHideBack={false}
        customTextStyle={localStyles.headerText}
      />
      <View style={styles.mh25}>
        <CInput
          placeHolder={strings.searchForCourses}
          _value={searchCourse}
          _maxLength={10}
          toGetTextFieldValue={onChangedSearchText}
          inputContainerStyle={[{backgroundColor: colors.inputBg}]}
          labelStyle={styles.ml20}
          inputBoxStyle={styles.ml15}
          insideLeftIcon={() => <Search_Icon />}
        />
      </View>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          gap: moderateScale(25),
          ...styles.pv25,
        }}
      />
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  headerText: {
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
  },
  categoryContainer: {
    ...styles.rowSpaceBetween,
    ...styles.p15,
    ...styles.mh25,
    ...styles.mb25,
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

export default Courses;
