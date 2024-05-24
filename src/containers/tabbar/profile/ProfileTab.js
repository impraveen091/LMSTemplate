import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Drawer} from 'react-native-drawer-layout';
import {useSelector, useDispatch} from 'react-redux';

import {THEME, moderateScale} from '../../../common/constants';
import {MyProfile} from '../../../api/constant';
import CText from '../../../components/common/CText';
import strings from '../../../i18n/strings';
import Projects from './profileTabs/Projects';
import Courses from './profileTabs/Courses';
import {
  Cross_Close_Dark_Icon,
  Cross_Close_Icon,
  Dark_Mode,
  Help_Dark,
  Help_Light,
  Light_Mode,
  Notification_Dark_2,
  Notification_Light_2,
  Right_Arrow_Icon,
  Security_Dark,
  Security_Light,
  Setting_Dark,
  Setting_Light,
  Toggle_Off,
  Toggle_On,
} from '../../../assets/svgs';
import {changeThemeAction} from '../../../redux/action/themeAction';
import {StackNav} from '../../../navigation/NavigationKeys';
import CButton from '../../../components/common/CButton';
import {setAsyncStorageData} from '../../../utils/helpers';
import {colors as themeColor, styles} from '../../../themes';

const ProfileTab = () => {
  const navigation = useNavigation();
  const colors = useSelector(state => state.theme.theme);
  const dispatch = useDispatch();

  const [openSetting, setOpenSetting] = useState(false);
  const [pushNotification, setPushNotification] = useState(false);
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: strings.projects,
      selected: true,
      component: <Projects />,
    },
    {
      id: 2,
      title: strings.courses,
      selected: false,
      component: <Courses />,
    },
  ]);

  const ProfileInfo = ({title, data}) => {
    return (
      <View>
        <CText type="m20" align="center">
          {data}
        </CText>
        <CText type="r12" align="center">
          {title}
        </CText>
      </View>
    );
  };

  const changeTab = index => {
    const newTabs = tabs.map(item => {
      return {
        ...item,
        selected: !item.selected,
      };
    });
    setTabs(newTabs);
  };

  const renderTab = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[
          localStyles.tabItem,
          {
            backgroundColor: item.selected ? colors.primary : colors.inputBg,
          },
        ]}
        onPress={() => changeTab(index)}>
        <CText
          type={'m14'}
          color={item.selected ? colors.white : colors.notSelectedTextColor}>
          {item.title}
        </CText>
      </TouchableOpacity>
    );
  };

  const ListHeaderComponent = () => {
    return (
      <View style={styles.ph25}>
        <CText type="s20" align="center">
          {MyProfile.full_name}
        </CText>
        <CText type="r12" align="center" style={styles.mt10}>
          {MyProfile.bio_description}
        </CText>
        <View style={localStyles.infoContainer}>
          <ProfileInfo title={strings.following} data={MyProfile.following} />
          <ProfileInfo title={strings.followers} data={MyProfile.followers} />
          <ProfileInfo title={strings.likes} data={MyProfile.likes} />
        </View>
      </View>
    );
  };

  const ListFooterComponent = () => {
    return (
      <View style={styles.ph20}>
        {tabs.map(item => {
          return item.selected ? item.component : null;
        })}
      </View>
    );
  };

  const onPressClose = () => {
    setOpenSetting(false);
  };

  const changeTheme = () => {};
  const onPressLightTheme = () => {
    setAsyncStorageData(THEME, 'light');
    dispatch(changeThemeAction(themeColor.light));
  };

  const onPressDarkTheme = () => {
    setAsyncStorageData(THEME, 'dark');
    dispatch(changeThemeAction(themeColor.dark));
  };

  const toggleSwitch = () => {
    if (colors?.dark == 'dark') {
      onPressLightTheme();
    } else {
      onPressDarkTheme();
    }
  };

  const notificationOnOff = () => {
    setPushNotification(!pushNotification);
  };
  const navigateTo = path => {
    navigation.navigate(path);
  };
  const logOut = () => {
    navigation.navigate(StackNav.Auth);
  };

  const Menu = ({
    darkIcon,
    lightIcon,
    label,
    endIcon,
    onPress,
    navigate,
    path,
  }) => {
    return (
      <View style={styles.mt20}>
        <TouchableOpacity
          style={localStyles.settingList}
          onPress={
            navigate
              ? () => {
                  navigate(path);
                }
              : onPress
          }>
          <View style={styles.flexRow}>
            {colors.dark == 'dark' ? darkIcon : lightIcon}
            <CText type="m14" color={colors.textColor} style={styles.ml20}>
              {label}
            </CText>
          </View>
          {endIcon}
        </TouchableOpacity>
      </View>
    );
  };

  const DrawerComponent = () => {
    return (
      <View style={styles.ph20}>
        <TouchableOpacity style={localStyles.header} onPress={onPressClose}>
          {colors.dark == 'dark' ? (
            <Cross_Close_Dark_Icon
              width={moderateScale(24)}
              height={moderateScale(24)}
            />
          ) : (
            <Cross_Close_Icon
              width={moderateScale(24)}
              height={moderateScale(24)}
            />
          )}
        </TouchableOpacity>
        <View style={[styles.itemsCenter, styles.flexRow]}>
          <Image
            resizeMode="cover"
            source={MyProfile.profile_image}
            style={[localStyles.drawerProfileImage]}
          />
          <CText type="s20" align="center" style={styles.ml20}>
            {MyProfile.full_name}
          </CText>
        </View>
        <Menu
          label={strings.myLearning}
          darkIcon={<Setting_Dark />}
          lightIcon={<Setting_Light />}
          endIcon={<Right_Arrow_Icon />}
          navigate={navigateTo}
          path={StackNav.MyLearning}
        />
        <Menu
          label={strings.settingsAndPrivacy}
          darkIcon={<Setting_Dark />}
          lightIcon={<Setting_Light />}
          endIcon={<Right_Arrow_Icon />}
        />
        <Menu
          label={strings.helpAndSupport}
          darkIcon={<Help_Dark />}
          lightIcon={<Help_Light />}
          endIcon={<Right_Arrow_Icon />}
        />
        <Menu
          label={strings.securityAccess}
          darkIcon={<Security_Dark />}
          lightIcon={<Security_Light />}
          endIcon={<Right_Arrow_Icon />}
        />
        <Menu
          label={strings.pushNotifications}
          darkIcon={<Notification_Dark_2 />}
          lightIcon={<Notification_Light_2 />}
          endIcon={pushNotification ? <Toggle_On /> : <Toggle_Off />}
          onPress={notificationOnOff}
        />
        <Menu
          label={strings.darkMode}
          darkIcon={<Light_Mode />}
          lightIcon={<Dark_Mode />}
          endIcon={colors.dark == 'dark' ? <Toggle_On /> : <Toggle_Off />}
          onPress={toggleSwitch}
        />
        <View style={localStyles.logOutBtnContainer}>
          <CButton
            title={strings.logout}
            type="s16"
            onPress={logOut}
            bgColor={colors.primary}
            containerStyle={localStyles.logOutBtn}
          />
        </View>
      </View>
    );
  };

  const openCloseSettingModal = () => {
    setOpenSetting(!openSetting);
  };

  return (
    <Drawer
      drawerStyle={[
        localStyles.drawerStyle,
        {backgroundColor: colors.backgroundColor},
      ]}
      open={openSetting}
      onOpen={() => setOpenSetting(true)}
      onClose={() => setOpenSetting(false)}
      drawerType="front"
      renderDrawerContent={DrawerComponent}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        style={[localStyles.root, {backgroundColor: colors.backgroundColor}]}>
        <Image
          resizeMode="cover"
          source={MyProfile.cover_image}
          style={localStyles.profileCover}
        />
        <TouchableOpacity
          onPress={openCloseSettingModal}
          style={localStyles.absoluteTopRight}>
          <Setting_Dark />
        </TouchableOpacity>
        <View
          style={[
            localStyles.container,
            {backgroundColor: colors.backgroundColor},
          ]}>
          <Image
            resizeMode="cover"
            source={MyProfile.profile_image}
            style={[localStyles.profileImage, {borderColor: colors.white}]}
          />
          <View style={localStyles.innerContainer}>
            <FlatList
              data={tabs}
              renderItem={renderTab}
              ListHeaderComponent={ListHeaderComponent}
              ListFooterComponent={ListFooterComponent}
              showsHorizontalScrollIndicator={false}
              numColumns={2}
              columnWrapperStyle={[
                localStyles.list,
                {backgroundColor: colors.inputBg},
              ]}
            />
          </View>
        </View>
      </ScrollView>
    </Drawer>
  );
};

export default ProfileTab;

const localStyles = StyleSheet.create({
  root: {
    ...styles.flex,
  },
  container: {
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    top: moderateScale(-30),
  },
  profileCover: {
    width: '100%',
    height: moderateScale(170),
  },
  absoluteTopRight: {
    position: 'absolute',
    top: moderateScale(20),
    right: moderateScale(20),
  },
  profileImage: {
    width: moderateScale(100),
    height: moderateScale(100),
    borderRadius: moderateScale(50),
    borderWidth: moderateScale(2),
    top: moderateScale(-50),
    ...styles.selfCenter,
    position: 'absolute',
  },
  innerContainer: {
    ...styles.mt50,
    ...styles.pt10,
  },
  infoContainer: {
    ...styles.mt10,
    ...styles.rowSpaceAround,
  },
  list: {
    ...styles.mh25,
    ...styles.mv10,
    borderRadius: moderateScale(50),
    ...styles.p5,
  },
  tabItem: {
    borderRadius: moderateScale(50),
    ...styles.flex,
    ...styles.itemsCenter,
    ...styles.pv10,
  },
  modalStyle: {
    ...styles.flex,
  },
  drawerStyle: {
    width: '85%',
    borderTopRightRadius: moderateScale(20),
    borderBottomRightRadius: moderateScale(20),
  },
  header: {
    ...styles.mv20,
    ...styles.rowEnd,
  },
  drawerProfileImage: {
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: moderateScale(25),
  },
  settingList: {
    ...styles.rowSpaceBetween,
  },
  logOutBtnContainer: {
    ...styles.mt20,
    ...styles.pv15,
  },
  logOutBtn: {
    width: '70%',
    height: moderateScale(48),
  },
});
