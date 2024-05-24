// // Tab Routes
import HomeTab from '../containers/tabbar/home/HomeTab';
import ProfileTab from '../containers/tabbar/profile/ProfileTab';
import SaveTab from '../containers/tabbar/save/SaveTab';
import SearchTab from '../containers/tabbar/search/SearchTab';
import ReelTab from '../containers/tabbar/reel/ReelTab';

// // Screens Route
import Splash from '../containers/auth/Splash';
import OnBoarding from '../containers/OnBoarding';
import Login from '../containers/auth/Login';
import Otpverify from '../containers/auth/Otpverify';
import CreatePassword from '../containers/auth/CreatePassword';
import Success from '../containers/auth/Success';
import TabBar from './Type/TabBarNavigation';
import Categories from '../containers/tabbar/home/screens/Categories';
import Courses from '../containers/tabbar/home/screens/Courses';
import Notification from '../containers/tabbar/home/screens/Notification';
import Filter from '../containers/tabbar/search/Filter';
import CourseDetail from '../containers/tabbar/search/courses/CourseDetail';
import EnrollCourse from '../containers/tabbar/search/courses/EnrollCourse';
import PaymentSuccess from '../containers/tabbar/search/courses/PaymentSuccess';
import AddNewCard from '../containers/tabbar/search/courses/AddNewCard';
import MyLearning from '../containers/tabbar/profile/MyLearning/MyLearning';
import SavedCourseList from '../containers/tabbar/save/SavedCourseList';
import RateCourse from '../containers/tabbar/profile/MyLearning/RateCourse';

export const TabRoute = {
  HomeTab,
  SaveTab,
  ReelTab,
  SearchTab,
  ProfileTab,
};

export const StackRoute = {
  Splash,
  OnBoarding,
  Login,
  Otpverify,
  CreatePassword,
  Success,
  TabBar,
  Categories,
  Courses,
  Notification,
  Filter,
  CourseDetail,
  EnrollCourse,
  PaymentSuccess,
  AddNewCard,
  MyLearning,
  SavedCourseList,
  RateCourse,
};
