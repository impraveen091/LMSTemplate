import {
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ImageBackground,
} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {MyWishList} from '../../../api/constant';
import {styles} from '../../../themes';
import CText from '../../../components/common/CText';
import {moderateScale} from '../../../common/constants';
import {StackNav} from '../../../navigation/NavigationKeys';
import CSafeAreaView from '../../../components/common/CSafeAreaView';

const SaveTab = () => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();

  const navigateToCourseList = item => {
    navigation.navigate(StackNav.SavedCourseList, {
      title: item.collection_title,
    });
  };

  const renderCoursesItem = ({item, index}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigateToCourseList(item);
        }}
        style={localStyles.collection}>
        <ImageBackground
          source={item.collection_image}
          imageStyle={{borderRadius: moderateScale(15)}}
          style={localStyles.imageBackground}>
          <CText
            type="m14"
            color={colors.white}
            style={[styles.mh15, styles.mb15]}>
            {item.collection_title}
          </CText>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  const renderHeader = () => {
    return (
      <CText type="s30" style={localStyles.headerStyle}>
        My Wish List
      </CText>
    );
  };
  return (
    <CSafeAreaView>
      <FlatList
        data={MyWishList}
        showsVerticalScrollIndicator={false}
        renderItem={renderCoursesItem}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={renderHeader}
        numColumns={2}
        style={styles.ph20}
      />
    </CSafeAreaView>
  );
};

export default SaveTab;
const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.ph10,
  },
  headerStyle: {
    ...styles.ph10,
    ...styles.mv20,
  },
  collection: {
    ...styles.flex,
    marginHorizontal: '2%',
    marginVertical: '4%',
    borderRadius: moderateScale(15),
  },
  imageBackground: {
    width: moderateScale(155),
    height: moderateScale(128),
    ...styles.justifyEnd,
  },
});
