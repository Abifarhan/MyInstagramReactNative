import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface StatProps {
  number: number;
  label: string;
}

const Stat: React.FC<StatProps> = ({ number, label }) => (
  <View style={styles.container}>
    <Text style={styles.number}>{number}</Text>
    <Text style={styles.label}>{label}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: 'center', marginHorizontal: 8 },
  number: { fontSize: 18, fontWeight: 'bold', color: '#262626' },
  label: { fontSize: 13, color: '#8e8e8e' },
});

export default Stat;
