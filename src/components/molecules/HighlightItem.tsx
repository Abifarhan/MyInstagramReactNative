import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Avatar from '../atoms/Avatar';

interface HighlightItemProps {
  image: string;
  label: string;
}

const HighlightItem: React.FC<HighlightItemProps> = ({ image, label }) => (
  <View style={styles.container}>
    <View style={styles.circle}>
      <Avatar uri={image} size={54} />
    </View>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginHorizontal: 8 },
  circle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#d2b48c',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  label: { fontSize: 12, color: '#262626', textAlign: 'center', maxWidth: 60 },
});

export default HighlightItem;
