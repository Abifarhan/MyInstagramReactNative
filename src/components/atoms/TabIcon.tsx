import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TabIconProps {
  icon: string;
  active?: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, active }) => (
  <Text style={[styles.icon, active && styles.active]}>{icon}</Text>
);

const styles = StyleSheet.create({
  icon: { fontSize: 22, color: '#888' },
  active: { color: '#262626', fontWeight: 'bold' },
});

export default TabIcon;
