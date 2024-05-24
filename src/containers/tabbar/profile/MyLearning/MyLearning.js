import {StyleSheet, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {styles} from '../../../../themes';
import CText from '../../../../components/common/CText';
import CardListHorizontal from '../../../../components/homeComponent/CardListHorizontal';
import {Achievements, MyLearningCourse} from '../../../../api/constant';
import MyLearningCardList from '../../../../components/CommonComponent/MyLearningCardList';
import {StackNav} from '../../../../navigation/NavigationKeys';
import strings from '../../../../i18n/strings';
import CSafeAreaView from '../../../../components/common/CSafeAreaView';

const MyLearning = () => {
  const navigation = useNavigation();
  const [myAchievements, setMyAchievements] = useState(
    Achievements.slice(0, 2),
  );
  const [myDownload, setMyDownload] = useState(MyLearningCourse.slice(0, 2));

  const onPressSeeAll = (title = '', data = []) => {
    navigation.navigate(StackNav.Courses, {
      title: title,
      data: data,
    });
  };
  return (
    <CSafeAreaView style={localStyles.root}>
      <ScrollView>
        <CText type="s30" style={styles.ph20}>
          {strings.myLearning}
        </CText>
        <CardListHorizontal
          cardData={MyLearningCourse}
          title={strings.myCourses}
          onPressSeeAll={() => onPressSeeAll('My Courses', MyLearningCourse)}
          showProgress={true}
        />
        <MyLearningCardList
          cardData={myAchievements}
          title={strings.achievements}
          onPressSeeAll={() => onPressSeeAll('Achievements', Achievements)}
          isCompleted={true}
          scrollEnabled={false}
          BtnTitle={strings.letsLearning}
        />
        <MyLearningCardList
          cardData={myDownload}
          title={strings.downloaded}
          onPressSeeAll={() => onPressSeeAll('Downloaded', MyLearningCourse)}
          scrollEnabled={false}
          BtnTitle={strings.letsLearning}
        />
      </ScrollView>
    </CSafeAreaView>
  );
};

export default MyLearning;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
    ...styles.ph10,
  },
});
