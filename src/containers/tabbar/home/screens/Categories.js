import {View, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from '../../../../themes';
import CSafeAreaView from '../../../../components/common/CSafeAreaView';
import CHeader from '../../../../components/common/CHeader';
import strings from '../../../../i18n/strings';
import {
  Categories as CategoryData,
  Recommended,
} from '../../../../api/constant';
import CText from '../../../../components/common/CText';
import {moderateScale} from '../../../../common/constants';
import {Right_Arrow_Icon} from '../../../../assets/svgs';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../../../navigation/NavigationKeys';

const Categories = () => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressCategory = (title = '', data = []) => {
    navigation.navigate(StackNav.Courses, {
      title: title,
      data: data,
    });
  };

  const renderCategoryItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressCategory(item.title, Recommended)}
        style={[
          localStyles.categoryContainer,
          {
            backgroundColor: colors.inputBg,
          },
        ]}>
        <View style={styles.rowStart}>
          <View style={localStyles.iconStyle}>{item.icon}</View>
          <CText type={'m14'} style={styles.ml10}>
            {item.title}
          </CText>
        </View>
        <Right_Arrow_Icon />
      </TouchableOpacity>
    );
  };
  return (
    <CSafeAreaView style={localStyles.root}>
      <CHeader
        title={strings.categories}
        isHideBack={false}
        customTextStyle={localStyles.headerText}
      />
      <FlatList
        data={CategoryData}
        renderItem={renderCategoryItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  iconStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  categoryContainer: {
    ...styles.rowSpaceBetween,
    ...styles.p15,
    ...styles.mh25,
    ...styles.mb25,
    borderRadius: moderateScale(16),
  },
  headerText: {
    alignSelf: 'center',
    flex: 1,
    textAlign: 'center',
  },
});

export default Categories;
