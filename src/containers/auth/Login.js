import {View, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {styles} from '../../themes';
import {Facebook_Icon, Google_Icon, Logo_Icon} from '../../assets/svgs';
import CSafeAreaView from '../../components/common/CSafeAreaView';
import CText from '../../components/common/CText';
import strings from '../../i18n/strings';
import {getHeight, moderateScale} from '../../common/constants';
import CInput from '../../components/common/CInput';
import CKeyBoardAvoidWrapper from '../../components/common/CKeyBoardAvoidWrapper';
import CButton from '../../components/common/CButton';
import {useNavigation} from '@react-navigation/native';
import {StackNav} from '../../navigation/NavigationKeys';

const Login = () => {
  const colors = useSelector(state => state.theme.theme);
  const navigation = useNavigation();
  const [phoneNo, setPhoneNo] = useState('');

  const onChangedPhoneNo = text => setPhoneNo(text);

  const onPressGetStarted = () => {
    navigation.navigate(StackNav.Otpverify);
  };

  return (
    <CSafeAreaView style={localStyles.mainContainer}>
      <CKeyBoardAvoidWrapper containerStyle={styles.ph20}>
        <View style={localStyles.titleContainer}>
          <Logo_Icon
            style={localStyles.logo}
            width={moderateScale(120)}
            height={moderateScale(120)}
          />
          <CText type={'B24'} align={'center'} style={styles.mt30}>
            {strings.signinTitle}
          </CText>
          <CText
            type={'R14'}
            align={'center'}
            style={styles.mt15}
            color={colors.textColor2}>
            {strings.signinSubtitle}
          </CText>
        </View>
        <View style={styles.mt50}>
          <CInput
            required
            label={'Phone number'}
            placeHolder={strings.phoneNumber}
            keyBoardType={'number-pad'}
            _value={phoneNo}
            _maxLength={10}
            toGetTextFieldValue={onChangedPhoneNo}
            inputContainerStyle={[{backgroundColor: colors.inputBg}]}
            labelStyle={styles.ml20}
            inputBoxStyle={styles.ml15}
          />
        </View>
        <CButton
          title={strings.getStarted}
          containerStyle={localStyles.submitButton}
          type={'M18'}
          color={colors.white}
          onPress={onPressGetStarted}
        />
        <View style={localStyles.socialContainer}>
          <CButton
            title={strings.facebook}
            type={'M16'}
            color={colors.textColor}
            frontIcon={
              <Facebook_Icon
                width={moderateScale(24)}
                height={moderateScale(24)}
              />
            }
            containerStyle={localStyles.socialButton}
            bgColor={colors.socialButtonBackground}
            style={styles.ml10}
            // onPress={onPressRightArrow}
          />
          <CButton
            title={strings.google}
            type={'M16'}
            color={colors.textColor}
            frontIcon={
              <Google_Icon
                width={moderateScale(24)}
                height={moderateScale(24)}
              />
            }
            containerStyle={localStyles.socialButton}
            bgColor={colors.socialButtonBackground}
            style={styles.ml10}
            // onPress={onPressRightArrow}
          />
        </View>
      </CKeyBoardAvoidWrapper>
    </CSafeAreaView>
  );
};

const localStyles = StyleSheet.create({
  mainContainer: {
    ...styles.flex,
  },
  titleContainer: {
    marginTop: getHeight(74),
  },
  logo: {
    ...styles.selfCenter,
  },
  submitButton: {
    ...styles.mt40,
  },
  socialContainer: {
    ...styles.mt40,
    ...styles.rowSpaceBetween,
  },
  socialButton: {
    width: moderateScale(156),
    //shadow
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    shadowRadius: 0.5,
  },
});

export default Login;
