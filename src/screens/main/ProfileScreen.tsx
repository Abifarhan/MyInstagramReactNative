import React, { useState } from 'react';
import { Alert } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import ProfileTemplate from '../../components/templates/ProfileTemplate';
import { useUserProfileViewModel } from '../../viewmodels/useUserProfileViewModel';

const ProfileScreen: React.FC = () => {
  const { userProfile, userPosts, loading } = useUserProfileViewModel();
  const highlights = [
    { id: '1', label: 'Loc journey', image: 'https://via.placeholder.com/60' },
    { id: '2', label: 'wellness', image: 'https://via.placeholder.com/60' },
    { id: '3', label: 'Sonoma', image: 'https://via.placeholder.com/60' },
    { id: '4', label: 'Skincare 2.0', image: 'https://via.placeholder.com/60' },
  ];
  const tabIcons = [
    { id: 'grid', icon: '▦' },
    { id: 'reels', icon: '🎬' },
    { id: 'guides', icon: '📖' },
    { id: 'tagged', icon: '🏷️' },
  ];
  const [activeTab, setActiveTab] = useState('grid');

  const handleSignOut = () => {
    Alert.alert(
      'Sign Out',
      'Are you sure you want to sign out?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Sign Out',
          style: 'destructive',
          onPress: () => signOut(auth),
        },
      ]
    );
  };

  if (loading || !userProfile) {
    return <ProfileTemplate
      user={{
        uid: '',
        email: '',
        displayName: 'Loading...',
        photoURL: '',
        bio: '',
        followers: [],
        following: [],
      }}
      posts={[]}
      highlights={highlights}
      activeTab={activeTab}
      onTabPress={setActiveTab}
      onFollow={() => {}}
      onMessage={() => {}}
      onEmail={() => {}}
      onMore={handleSignOut}
      tabIcons={tabIcons}
    />;
  }

  return <ProfileTemplate
    user={userProfile}
    posts={userPosts}
    highlights={highlights}
    activeTab={activeTab}
    onTabPress={setActiveTab}
    onFollow={() => {}}
    onMessage={() => {}}
    onEmail={() => {}}
    onMore={handleSignOut}
    tabIcons={tabIcons}
  />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#262626',
    textAlign: 'center',
    flex: 1,
  },
  menuIcon: {
    fontSize: 24,
    color: '#262626',
    paddingLeft: 16,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
  avatarContainer: {
    marginRight: 16,
  },
  storyRing: {
    borderWidth: 3,
    borderColor: '#c800ff',
    borderRadius: 50,
    padding: 2,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262626',
  },
  statLabel: {
    fontSize: 13,
    color: '#8e8e8e',
  },
  actionRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 8,
  },
  actionButton: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginHorizontal: 2,
  },
  actionButtonText: {
    fontSize: 15,
    color: '#262626',
    fontWeight: 'bold',
  },
  profileDetails: {
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  displayName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 2,
  },
  bio: {
    fontSize: 14,
    color: '#262626',
    marginBottom: 2,
    lineHeight: 18,
  },
  highlightsRow: {
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  highlightItem: {
    alignItems: 'center',
    marginHorizontal: 8,
  },
  highlightCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d2b48c',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  highlightImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  highlightLabel: {
    fontSize: 12,
    color: '#262626',
    textAlign: 'center',
    maxWidth: 60,
  },
  tabBarRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 6,
    marginBottom: 2,
  },
  tabBarIcon: {
    flex: 1,
    alignItems: 'center',
  },
  tabBarIconText: {
    fontSize: 22,
    color: '#888',
  },
  activeTabBarIcon: {
    color: '#262626',
    fontWeight: 'bold',
  },
  postsSection: {
    flex: 1,
    padding: 8,
  },
  postItem: {
    flex: 1,
    margin: 2,
    aspectRatio: 1,
    borderRadius: 4,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: '100%',
  },
  emptyContainer: {
    alignItems: 'center',
    paddingTop: 50,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#8e8e8e',
  },
});

export default ProfileScreen;