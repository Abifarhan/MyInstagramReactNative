import React from 'react';
import { View, StyleSheet } from 'react-native';
import ActionButton from '../atoms/ActionButton';

interface ActionButtonsRowProps {
  onFollow: () => void;
  onMessage: () => void;
  onEmail: () => void;
  onMore: () => void;
}

const ActionButtonsRow: React.FC<ActionButtonsRowProps> = ({ onFollow, onMessage, onEmail, onMore }) => (
  <View style={styles.row}>
    <ActionButton label="Follow" onPress={onFollow} />
    <ActionButton label="Message" onPress={onMessage} />
    <ActionButton label="Email" onPress={onEmail} />
    <ActionButton label="⋯" onPress={onMore} />
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 8,
  },
});

export default ActionButtonsRow;
