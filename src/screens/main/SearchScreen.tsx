import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SearchScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Placeholder data for the grid
  const exploreData = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    imageUrl: `https://picsum.photos/200/200?random=${index}`,
  }));

  const renderGridItem = ({ item, index }: { item: any; index: number }) => (
    <TouchableOpacity style={styles.gridItem}>
      <Image source={{ uri: item.imageUrl }} style={styles.gridImage} />
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchContainer}>
          <Text style={styles.searchIcon}>🔍</Text>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholderTextColor="#8e8e8e"
          />
        </View>
      </View>

      <View style={styles.content}>
        {searchQuery ? (
          <View style={styles.resultsContainer}>
            <Text style={styles.resultsText}>
              Search results for "{searchQuery}"
            </Text>
            {/* Add search results here */}
          </View>
        ) : (
          <FlatList
            data={exploreData}
            renderItem={renderGridItem}
            keyExtractor={(item) => item.id}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.grid}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  searchIcon: {
    fontSize: 16,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#262626',
  },
  content: {
    flex: 1,
  },
  resultsContainer: {
    padding: 16,
  },
  resultsText: {
    fontSize: 16,
    color: '#262626',
    textAlign: 'center',
  },
  grid: {
    padding: 2,
  },
  gridItem: {
    flex: 1,
    margin: 1,
    aspectRatio: 1,
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
});

export default SearchScreen;