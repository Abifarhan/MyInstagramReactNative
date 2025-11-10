// Types for Instagram app

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL?: string;
  bio?: string;
  followers: string[];
  following: string[];
  postsCount: number;
  createdAt: Date;
}

export interface Post {
  id: string;
  userId: string;
  username: string;
  userPhoto?: string;
  caption: string;
  imageUrl: string;
  likes: string[];
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  userId: string;
  username: string;
  text: string;
  createdAt: Date;
}

export interface Story {
  id: string;
  userId: string;
  username: string;
  userPhoto?: string;
  imageUrl: string;
  createdAt: Date;
  expiresAt: Date;
}

// Navigation types
export type RootStackParamList = {
  Auth: undefined;
  Main: undefined;
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Feed: undefined;
  Search: undefined;
  AddPost: undefined;
  Activity: undefined;
  Profile: undefined;
};