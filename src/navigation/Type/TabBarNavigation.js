import {TouchableOpacity, StyleSheet, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TabNav} from '../NavigationKeys';
import {TabRoute} from '../NavigationRoutes';
import {colors, styles} from '../../themes';
import {moderateScale} from '../../common/constants';
import {
  Home_Light_Fill_Icon,
  Home_Light_UnFill_Icon,
  Profile_Light_Fill_Icon,
  Profile_Light_UnFill_Icon,
  Reel_Icon,
  Save_Light_Fill_Icon,
  Save_Light_UnFill_Icon,
  Search_Light_Fill_Icon,
  Search_Light_UnFill_Icon,
  Home_Dark_Fill_Icon,
  Home_Dark_UnFill_Icon,
  Profile_Dark_Fill_Icon,
  Profile_Dark_UnFill_Icon,
  Save_Dark_UnFill_Icon,
  Save_Dark_Fill_Icon,
  Search_Dark_Fill_Icon,
  Search_Dark_UnFill_Icon,
} from '../../assets/svgs';
import {useSelector} from 'react-redux';

export default function TabBarNavigation({navigation}) {
  const colors = useSelector(state => state.theme.theme);
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors?.backgroundColor,
          height: moderateScale(48),
        },
        tabBarShowLabel: false,
      }}
      initialRouteName={TabNav.HomeTab}>
      <Tab.Screen
        name={TabNav.HomeTab}
        component={TabRoute.HomeTab}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Home_Dark_Fill_Icon />
                ) : (
                  <Home_Light_Fill_Icon />
                )}
              </View>
            ) : (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Home_Dark_UnFill_Icon />
                ) : (
                  <Home_Light_UnFill_Icon />
                )}
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabNav.SaveTab}
        component={TabRoute.SaveTab}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Save_Dark_Fill_Icon />
                ) : (
                  <Save_Light_Fill_Icon />
                )}
              </View>
            ) : (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Save_Dark_UnFill_Icon />
                ) : (
                  <Save_Light_UnFill_Icon />
                )}
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabNav.ReelTab}
        component={TabRoute.ReelTab}
        options={{
          tabBarIconStyle: localStyle.tabBarScanIconStyle,
          tabBarIcon: () => (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigation.navigate(TabNav.ReelTab)}
              style={localStyle.iconContainer}>
              <Reel_Icon />
            </TouchableOpacity>
          ),
        }}
      />
      <Tab.Screen
        name={TabNav.SearchTab}
        component={TabRoute.SearchTab}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Search_Dark_Fill_Icon />
                ) : (
                  <Search_Light_Fill_Icon />
                )}
              </View>
            ) : (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Search_Dark_UnFill_Icon />
                ) : (
                  <Search_Light_UnFill_Icon />
                )}
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={TabNav.ProfileTab}
        component={TabRoute.ProfileTab}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Profile_Dark_Fill_Icon />
                ) : (
                  <Profile_Light_Fill_Icon />
                )}
              </View>
            ) : (
              <View style={styles.itemsCenter}>
                {colors.dark == 'dark' ? (
                  <Profile_Dark_UnFill_Icon />
                ) : (
                  <Profile_Light_UnFill_Icon />
                )}
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
}

const localStyle = StyleSheet.create({
  tabBarScanIconStyle: {
    top: 0,
  },
  iconContainer: {
    position: 'absolute',
    top: -moderateScale(20),
    borderColor: colors.white,
  },
});
