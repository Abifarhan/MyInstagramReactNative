import React from 'react';
import { ScrollView, SafeAreaView } from 'react-native';
import ProfileHeader from '../organisms/ProfileHeader';
import HighlightsBar from '../organisms/HighlightsBar';
import ProfileDetails from '../organisms/ProfileDetails';
import TabBar from '../organisms/TabBar';
import PostsGrid from '../organisms/PostsGrid';
import { Post, User } from '../../types';

interface Highlight {
  id: string;
  image: string;
  label: string;
}

interface ProfileTemplateProps {
  user: User;
  posts: Post[];
  highlights: Highlight[];
  activeTab: string;
  onTabPress: (id: string) => void;
  onFollow: () => void;
  onMessage: () => void;
  onEmail: () => void;
  onMore: () => void;
  tabIcons: { id: string; icon: string }[];
}

const ProfileTemplate: React.FC<ProfileTemplateProps> = ({
  user,
  posts,
  highlights,
  activeTab,
  onTabPress,
  onFollow,
  onMessage,
  onEmail,
  onMore,
  tabIcons,
}) => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ProfileHeader
        avatarUri={user.photoURL || 'https://via.placeholder.com/100'}
        posts={posts.length}
        followers={user.followers.length}
        following={user.following.length}
        onFollow={onFollow}
        onMessage={onMessage}
        onEmail={onEmail}
        onMore={onMore}
      />
      <ProfileDetails displayName={user.displayName || 'Anonymous'} bio={user.bio || ''} />
      <HighlightsBar highlights={highlights} />
      <TabBar tabs={tabIcons} activeTab={activeTab} onTabPress={onTabPress} />
      <PostsGrid posts={posts} />
    </ScrollView>
  </SafeAreaView>
);

export default ProfileTemplate;
