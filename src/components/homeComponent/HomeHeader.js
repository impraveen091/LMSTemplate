import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

// custom imports
import {styles} from '../../themes';
import {NotificationDark, NotificationLight} from '../../assets/svgs';
import CText from '../common/CText';
import {moderateScale} from '../../common/constants';
import {StackNav} from '../../navigation/NavigationKeys';

function HomeHeader() {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);

  const onPressNotification = () => {
    navigation.navigate(StackNav.Notification);
  };

  const onPressProfile = () => {
    // navigation.navigate(TabNav.ProfileTab);
  };
  return (
    <View style={localStyles.headerContainer}>
      <TouchableOpacity onPress={onPressProfile}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60',
          }}
          style={localStyles.userImageStyle}
        />
      </TouchableOpacity>
      <View style={localStyles.textContainer}>
        <CText type="m14" numberOfLines={1} color={colors.primaryTextColor}>
          {'Welcome Back!'}
        </CText>
        <CText type="B20" numberOfLines={1} color={colors.primaryTextColor}>
          {'Duong Khanh'}
        </CText>
      </View>
      <View style={styles.rowCenter}>
        <TouchableOpacity onPress={onPressNotification} style={styles.mh10}>
          {colors.dark ? (
            <NotificationDark
              width={moderateScale(40)}
              height={moderateScale(40)}
            />
          ) : (
            <NotificationLight
              width={moderateScale(40)}
              height={moderateScale(40)}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default React.memo(HomeHeader);

const localStyles = StyleSheet.create({
  headerContainer: {
    ...styles.rowSpaceBetween,
    ...styles.mh20,
    ...styles.mt15,
  },
  userImageStyle: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: moderateScale(25),
  },
  textContainer: {
    ...styles.mh10,
    ...styles.flex,
  },
});
