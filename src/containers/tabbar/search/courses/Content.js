import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {lessonArray} from '../../../../api/constant';
import LessonComponent from '../../../../components/lessonComponent/LessonComponent';
import {moderateScale} from '../../../../common/constants';
import {styles} from '../../../../themes';

const Content = () => {
  const renderLesson = ({item, index}) => {
    return <LessonComponent item={item} index={index} />;
  };

  return (
    <FlatList
      scrollEnabled={false}
      data={lessonArray}
      renderItem={renderLesson}
      contentContainerStyle={localStyles.videoDetails}
    />
  );
};

export default Content;

const localStyles = StyleSheet.create({
  videoDetails: {
    ...styles.pv25,
    gap: moderateScale(25),
  },
});
