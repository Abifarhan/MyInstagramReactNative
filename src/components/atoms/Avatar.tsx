import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

interface AvatarProps {
  uri: string;
  size?: number;
  showRing?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ uri, size = 80, showRing = false }) => (
  <View style={[showRing && styles.storyRing, { padding: showRing ? 2 : 0 }]}> 
    <Image source={{ uri }} style={{ width: size, height: size, borderRadius: size / 2 }} />
  </View>
);

const styles = StyleSheet.create({
  storyRing: {
    borderWidth: 3,
    borderColor: '#c800ff',
    borderRadius: 50,
  },
});

export default Avatar;
