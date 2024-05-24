import {FlatList, StyleSheet} from 'react-native';
import React from 'react';
import {reviewArray} from '../../../../api/constant';
import {styles} from '../../../../themes';
import {moderateScale} from '../../../../common/constants';
import ReviewComponent from '../../../../components/reviewComponent/ReviewComponent';

const Reviews = () => {
  const renderReview = ({item, index}) => {
    return <ReviewComponent item={item} index={index} />;
  };
  return (
    <FlatList
      scrollEnabled={false}
      data={reviewArray}
      renderItem={renderReview}
      contentContainerStyle={localStyles.review}
    />
  );
};

export default Reviews;

const localStyles = StyleSheet.create({
  review: {
    ...styles.pv25,
    gap: moderateScale(25),
  },
});
