import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StackRoute} from '../NavigationRoutes';
import {StackNav} from '../NavigationKeys';
import AuthStack from './AuthStack';

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={StackNav.Splash}>
      <Stack.Screen name={StackNav.Splash} component={StackRoute.Splash} />
      <Stack.Screen
        name={StackNav.OnBoarding}
        component={StackRoute.OnBoarding}
      />
      <Stack.Screen name={StackNav.Auth} component={AuthStack} />
      <Stack.Screen name={StackNav.TabBar} component={StackRoute.TabBar} />
      <Stack.Screen
        name={StackNav.Categories}
        component={StackRoute.Categories}
      />
      <Stack.Screen name={StackNav.Courses} component={StackRoute.Courses} />
      <Stack.Screen
        name={StackNav.Notification}
        component={StackRoute.Notification}
      />
      <Stack.Screen name={StackNav.Filter} component={StackRoute.Filter} />
      <Stack.Screen
        name={StackNav.CourseDetail}
        component={StackRoute.CourseDetail}
      />
      <Stack.Screen
        name={StackNav.EnrollCourse}
        component={StackRoute.EnrollCourse}
      />
      <Stack.Screen
        name={StackNav.PaymentSuccess}
        component={StackRoute.PaymentSuccess}
      />
      <Stack.Screen
        name={StackNav.AddNewCard}
        component={StackRoute.AddNewCard}
      />
      <Stack.Screen
        name={StackNav.MyLearning}
        component={StackRoute.MyLearning}
      />
      <Stack.Screen
        name={StackNav.SavedCourseList}
        component={StackRoute.SavedCourseList}
      />
      <Stack.Screen
        name={StackNav.RateCourse}
        component={StackRoute.RateCourse}
      />
    </Stack.Navigator>
  );
}
