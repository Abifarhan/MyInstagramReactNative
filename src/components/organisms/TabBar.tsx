import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import TabIcon from '../atoms/TabIcon';

interface TabBarProps {
  tabs: { id: string; icon: string }[];
  activeTab: string;
  onTabPress: (id: string) => void;
}

const TabBar: React.FC<TabBarProps> = ({ tabs, activeTab, onTabPress }) => (
  <View style={styles.row}>
    {tabs.map((tab) => (
      <TouchableOpacity key={tab.id} style={styles.icon} onPress={() => onTabPress(tab.id)}>
        <TabIcon icon={tab.icon} active={activeTab === tab.id} />
      </TouchableOpacity>
    ))}
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingVertical: 6,
    marginBottom: 2,
  },
  icon: {
    flex: 1,
    alignItems: 'center',
  },
});

export default TabBar;
