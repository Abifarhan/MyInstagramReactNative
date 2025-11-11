import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ActionButtonProps {
  label: string;
  onPress: () => void;
}

const ActionButton: React.FC<ActionButtonProps> = ({ label, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 18,
    marginHorizontal: 2,
  },
  text: {
    fontSize: 15,
    color: '#262626',
    fontWeight: 'bold',
  },
});

export default ActionButton;
