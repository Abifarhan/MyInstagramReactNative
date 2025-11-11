// Navigation param list types for React Navigation
import { NavigatorScreenParams } from '@react-navigation/native';

export type MainTabParamList = {
  Feed: undefined;
  Search: undefined;
  AddPost: undefined;
  Profile: undefined;
};

export type RootStackParamList = {
  Main: NavigatorScreenParams<MainTabParamList>;
  Login: undefined;
  Register: undefined;
  DashboardLandingPage: undefined;
};

// User type
export type User = {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  bio?: string;
  followers: string[];
  following: string[];
};

// Post type for FeedScreen
export type Post = {
  id: string;
  username: string;
  userPhoto?: string;
  imageUrl: string;
  caption?: string;
  likes: string[];
  createdAt: number | string;
};
