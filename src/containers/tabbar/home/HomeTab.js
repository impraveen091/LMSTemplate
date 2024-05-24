import {
  View,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useSelector} from 'react-redux';
import React, {createRef} from 'react';

import HomeHeader from '../../../components/homeComponent/HomeHeader';
import {styles} from '../../../themes';
import CSafeAreaView from '../../../components/common/CSafeAreaView';
import images from '../../../assets/images';
import {deviceWidth, getHeight, moderateScale} from '../../../common/constants';
import CButton from '../../../components/common/CButton';
import {DownArrowIcon} from '../../../assets/svgs';
import LearningModel from '../../../components/homeComponent/LearningModel';
import {
  Categories,
  Featured,
  Popular,
  Recommended,
} from '../../../api/constant';
import CText from '../../../components/common/CText';
import strings from '../../../i18n/strings';
import {StackNav} from '../../../navigation/NavigationKeys';
import CardListHorizontal from '../../../components/homeComponent/CardListHorizontal';

const HomeTab = ({navigation}) => {
  const colors = useSelector(state => state.theme.theme);
  const learningSheetRef = createRef();

  const onPressLearningPath = () => {
    learningSheetRef?.current.show();
  };

  const onPressSeeAllCategory = () => {
    navigation.navigate(StackNav.Categories);
  };

  const CategoryHeader = () => {
    return (
      <View style={localStyles.categoryHeader}>
        <CText type={'s16'}>{strings.categories}</CText>
        <TouchableOpacity onPress={onPressSeeAllCategory}>
          <CText type={'s16'} color={colors.primary}>
            {strings.seeAll}
          </CText>
        </TouchableOpacity>
      </View>
    );
  };

  const renderCategory = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onPressSeeAll(item.title, Recommended)}
        style={localStyles.categoryItmMainContainer}>
        <View style={localStyles.iconStyle}>{item.icon}</View>
        <CText align={'center'} type={'r12'} style={styles.mt10}>
          {item.title}
        </CText>
      </TouchableOpacity>
    );
  };

  const onPressSeeAll = (title = '', data = []) => {
    navigation.navigate(StackNav.Courses, {
      title: title,
      data: data,
    });
  };

  return (
    <CSafeAreaView style={localStyles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <HomeHeader />
        <View style={styles.flex}>
          <View style={styles.mh20}>
            <View>
              <Image
                source={images.dashboardBanner}
                style={localStyles.bannerContainer}
              />
              <View style={localStyles.btnContainer}>
                <CButton
                  type={'S16'}
                  title={strings.getLearningPath}
                  color={colors.placeHolderColor}
                  bgColor={colors.inputBg}
                  onPress={onPressLearningPath}
                  containerStyle={localStyles.btnContainerStyle}
                  icon={<DownArrowIcon />}
                />
              </View>
            </View>
            <CategoryHeader />
          </View>
          <View>
            <FlatList
              data={Categories}
              renderItem={renderCategory}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.m10}
            />
          </View>
          <CardListHorizontal
            cardData={Recommended}
            title={'Recommended'}
            onPressSeeAll={() => onPressSeeAll('Recommended', Recommended)}
          />
          <CardListHorizontal
            cardData={Popular}
            title={'Popular'}
            onPressSeeAll={() => onPressSeeAll('Popular', Popular)}
          />
          <CardListHorizontal
            cardData={Featured}
            title={'Featured'}
            onPressSeeAll={() => onPressSeeAll('Featured', Featured)}
          />
        </View>
      </ScrollView>
      <LearningModel SheetRef={learningSheetRef} />
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  bannerContainer: {
    width: '100%',
    height: getHeight(175),
    resizeMode: 'contain',
  },
  btnContainerStyle: {
    ...styles.mh15,
    width: '100%',
    height: getHeight(48),
    ...styles.rowSpaceBetween,
    ...styles.ph25,
  },
  btnContainer: {
    position: 'absolute',
    bottom: moderateScale(15),
    width: deviceWidth - moderateScale(70),
  },
  categoryHeader: {
    ...styles.rowSpaceBetween,
    ...styles.mt25,
  },
  iconStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
  },
  categoryItmMainContainer: {
    width: moderateScale(85),
    ...styles.itemsCenter,
    ...styles.mr10,
    ...styles.mt15,
  },
  recommendedContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mh20,
    ...styles.mt25,
  },
  cardImage: {
    height: getHeight(144),
    borderRadius: moderateScale(16),
    width: '100%',
    resizeMode: 'cover',
  },
});

export default HomeTab;
