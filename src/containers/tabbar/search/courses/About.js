import {StyleSheet, View} from 'react-native';
import React from 'react';
import CText from '../../../../components/common/CText';
import {styles} from '../../../../themes';
import {useSelector} from 'react-redux';
import strings from '../../../../i18n/strings';
import {moderateScale} from '../../../../common/constants';
import {
  Bag,
  Lesson_Icon,
  Mic,
  Procreate,
  User_Multiple_Icon,
} from '../../../../assets/svgs';

const About = () => {
  const colors = useSelector(state => state.theme.theme);

  const Title = ({title}) => {
    return <CText type={'m16'}>{title}</CText>;
  };

  const Detail = ({icon, data}) => {
    return (
      <View style={localStyles.detailsContainer}>
        {icon}
        <CText style={styles.flex} numberOfLines={1} type={'m14'}>
          {data}
        </CText>
      </View>
    );
  };

  return (
    <View style={localStyles.root}>
      <View style={localStyles.section}>
        <Title title={strings.introduction} />
        <CText type={'r14'} ellipsizeMode={'tail'} numberOfLines={3}>
          {strings.introductionCourse}
          <CText type={'s14'} color={colors.primary}>
            {strings.readMore}
          </CText>
        </CText>
      </View>
      <View style={localStyles.section}>
        <Title title={strings.details} />
        <View style={localStyles.detailContainer}>
          <View style={localStyles.detailSection}>
            <Detail
              icon={<User_Multiple_Icon />}
              data={'Beginner BeginnerBeginnerBeginnerBeginnerBeginner'}
            />
            <Detail icon={<Mic />} data={'English'} />
          </View>
          <View style={localStyles.detailSection}>
            <Detail icon={<Lesson_Icon />} data={'17 Lessons (4h14m)'} />
            <Detail icon={<Bag />} data={'18 Additional resources'} />
          </View>
        </View>
      </View>
      <View style={localStyles.section}>
        <Title title={strings.aboutTeacher} />

        <CText type={'r14'} ellipsizeMode={'tail'} numberOfLines={3}>
          {strings.about}
          <CText type={'s14'} color={colors.primary}>
            {strings.readMore}
          </CText>
        </CText>
      </View>
      <View style={localStyles.section}>
        <Title title={strings.toolsYouNeed} />
        <View style={localStyles.toolContainer}>
          <Procreate />
          <CText type={'m14'}>Procreate</CText>
        </View>
      </View>
    </View>
  );
};

export default About;

const localStyles = StyleSheet.create({
  root: {
    ...styles.mt25,
    gap: moderateScale(25),
    ...styles.ph20,
    ...styles.flex,
  },
  section: {
    gap: moderateScale(8),
  },
  detailContainer: {
    ...styles.flexRow,
    ...styles.flex,
    gap: moderateScale(30),
  },
  detailSection: {
    ...styles.flex,
    gap: moderateScale(8),
  },
  detailsContainer: {
    ...styles.flexRow,
    ...styles.flex,
    ...styles.itemsCenter,
    gap: moderateScale(8),
  },
  toolContainer: {
    ...styles.flexRow,
    ...styles.itemsCenter,
    gap: moderateScale(8),
  },
});
