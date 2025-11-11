import React from 'react';
import { View, FlatList, TouchableOpacity, Image, StyleSheet, Text } from 'react-native';
import { Post } from '../../types';

interface PostsGridProps {
  posts: Post[];
}

const renderPost = ({ item }: { item: Post }) => (
  <TouchableOpacity style={styles.postItem}>
    <Image source={{ uri: item.imageUrl }} style={styles.postImage} />
  </TouchableOpacity>
);

const PostsGrid: React.FC<PostsGridProps> = ({ posts }) => (
  <View style={styles.container}>
    <FlatList
      data={posts}
      renderItem={renderPost}
      keyExtractor={(item) => item.id}
      numColumns={3}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No posts yet</Text>
          <Text style={styles.emptySubtext}>Share your first post!</Text>
        </View>
      }
    />
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, padding: 8 },
  postItem: { flex: 1, margin: 2, aspectRatio: 1, borderRadius: 4, overflow: 'hidden' },
  postImage: { width: '100%', height: '100%' },
  emptyContainer: { alignItems: 'center', paddingTop: 50 },
  emptyText: { fontSize: 18, fontWeight: 'bold', color: '#262626', marginBottom: 8 },
  emptySubtext: { fontSize: 14, color: '#8e8e8e' },
});

export default PostsGrid;
