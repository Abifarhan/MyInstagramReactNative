import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FeedScreen from './FeedScreen';

// Placeholder components for tabs that don't exist yet
const SearchScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f8f8' }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>🔍 Search Screen</Text>
    <Text style={{ fontSize: 16, color: '#666', marginTop: 10 }}>Find users and posts here</Text>
  </View>
);

const AddPostScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff' }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>➕ Add Post Screen</Text>
    <Text style={{ fontSize: 16, color: '#666', marginTop: 10 }}>Create and share your posts</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff8f0' }}>
    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#333' }}>👤 Profile Screen</Text>
    <Text style={{ fontSize: 16, color: '#666', marginTop: 10 }}>View and edit your profile</Text>
  </View>
);

const DashboardLandingPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Feed');

  const handleTabPress = (tabName: string) => {
    console.log(`Switching to tab: ${tabName}`);
    setActiveTab(tabName);
  };

  const renderActiveScreen = () => {
    console.log(`Rendering screen for tab: ${activeTab}`);
    switch (activeTab) {
      case 'Feed':
        return <FeedScreen />;
      case 'Search':
        return <SearchScreen />;
      case 'AddPost':
        return <AddPostScreen />;
      case 'Profile':
        return <ProfileScreen />;
      default:
        return <FeedScreen />;
    }
  };

  const TabButton = ({ name, icon, label }: { name: string; icon: string; label: string }) => (
    <TouchableOpacity
      style={[styles.tabButton, activeTab === name && styles.activeTabButton]}
      onPress={() => handleTabPress(name)}
    >
      <Text style={[styles.tabIcon, activeTab === name && styles.activeTabIcon]}>{icon}</Text>
      <Text style={[styles.tabLabel, activeTab === name && styles.activeTabLabel]}>{label}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        {renderActiveScreen()}
      </View>
      
      <View style={styles.tabBar}>
        <TabButton name="Feed" icon="🏠" label="Feed" />
        <TabButton name="Search" icon="🔍" label="Search" />
        <TabButton name="AddPost" icon="➕" label="Add" />
        <TabButton name="Profile" icon="👤" label="Profile" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e1e1e1',
    paddingVertical: 10,
    paddingHorizontal: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderRadius: 8,
  },
  activeTabButton: {
    backgroundColor: '#f5f5f5',
  },
  tabIcon: {
    fontSize: 24,
    color: '#888',
    marginBottom: 4,
  },
  activeTabIcon: {
    color: '#007AFF',
  },
  tabLabel: {
    fontSize: 12,
    color: '#888',
    fontWeight: '500',
  },
  activeTabLabel: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
});

export default DashboardLandingPage;
