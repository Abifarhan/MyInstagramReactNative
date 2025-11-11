import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ProfileDetailsProps {
  displayName: string;
  bio: string;
}

const ProfileDetails: React.FC<ProfileDetailsProps> = ({ displayName, bio }) => (
  <View style={styles.container}>
    <Text style={styles.displayName}>{displayName}</Text>
    <Text style={styles.bio}>{bio}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { paddingHorizontal: 16, marginBottom: 8 },
  displayName: { fontSize: 16, fontWeight: 'bold', color: '#262626', marginBottom: 2 },
  bio: { fontSize: 14, color: '#262626', marginBottom: 2, lineHeight: 18 },
});

export default ProfileDetails;
