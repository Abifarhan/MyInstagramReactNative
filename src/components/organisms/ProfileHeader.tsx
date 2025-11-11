import React from 'react';
import { View, StyleSheet } from 'react-native';
import Avatar from '../atoms/Avatar';
import StatsRow from '../molecules/StatsRow';
import ActionButtonsRow from '../molecules/ActionButtonsRow';

interface ProfileHeaderProps {
  avatarUri: string;
  posts: number;
  followers: number;
  following: number;
  onFollow: () => void;
  onMessage: () => void;
  onEmail: () => void;
  onMore: () => void;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({
  avatarUri,
  posts,
  followers,
  following,
  onFollow,
  onMessage,
  onEmail,
  onMore,
}) => (
  <View style={styles.container}>
    <View style={styles.row}>
      <Avatar uri={avatarUri} showRing size={80} />
      <StatsRow posts={posts} followers={followers} following={following} />
    </View>
    <ActionButtonsRow onFollow={onFollow} onMessage={onMessage} onEmail={onEmail} onMore={onMore} />
  </View>
);

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, paddingBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
});

export default ProfileHeader;
