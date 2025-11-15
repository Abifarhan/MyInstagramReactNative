import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { firestore } from '../../config/firebase';
import { Post } from '../../types';

const mockPosts: Post[] = [
  {
    id: '1',
    user: { name: 'Andrey', avatar: '' },
    timestamp: '14:00',
    text: 'Text, Text, Text Text, Text, Text Text, Text, Text',
    comments: ['Comment 1', 'Comment 2'],
    likes: 5,
  },
  {
    id: '2',
    user: { name: 'Jin', avatar: '' },
    timestamp: '10:00',
    text: '',
    image: 'https://via.placeholder.com/150',
    comments: ['Comment 1'],
    likes: 2,
  },
  {
    id: '3',
    user: { name: 'Max', avatar: '' },
    timestamp: '04.05',
    text: 'Text, Text, Text Text, Text, Text Text, Text, Text',
    comments: ['Comment 1', 'Comment 2', 'Comment 3'],
    likes: 3,
  },
  {
    id: '4',
    user: { name: 'Kate', avatar: '' },
    timestamp: '03.05',
    text: 'Text',
    video: 'https://sample-videos.com/video123/mp4/240/big_buck_bunny_240p_1mb.mp4',
    comments: [],
    likes: 1,
  },
];

const FeedScreen: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    const postsQuery = query(
      collection(firestore, 'posts'),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const postsData: Post[] = [];
      snapshot.forEach((doc) => {
        postsData.push({ id: doc.id, ...doc.data() } as Post);
      });
      setPosts(postsData);
      setRefreshing(false);
    });

    return unsubscribe;
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    // The onSnapshot listener will automatically update the posts
  };

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      {/* Post Header */}
      <View style={styles.postHeader}>
        <Image
          source={{ uri: item.userPhoto || 'https://via.placeholder.com/40' }}
          style={styles.userPhoto}
        />
        <Text style={styles.username}>{item.username}</Text>
      </View>

      {/* Post Image */}
      <Image source={{ uri: item.imageUrl }} style={styles.postImage} />

      {/* Post Actions */}
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>♥</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>💬</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text style={styles.actionText}>📤</Text>
        </TouchableOpacity>
      </View>

      {/* Post Info */}
      <View style={styles.postInfo}>
        <Text style={styles.likes}>{item.likes.length} likes</Text>
        {item.caption ? (
          <View style={styles.captionContainer}>
            <Text style={styles.captionUsername}>{item.username}</Text>
            <Text style={styles.caption}> {item.caption}</Text>
          </View>
        ) : null}
        <Text style={styles.timeAgo}>
          {new Date(item.createdAt).toLocaleDateString()}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Instagram</Text>
      </View>
      
      <FlatList
        data={mockPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No posts yet</Text>
            <Text style={styles.emptySubtext}>Start following people to see their posts</Text>
          </View>
        }
      />
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#262626',
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  userPhoto: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#262626',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  postActions: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  actionButton: {
    marginRight: 16,
  },
  actionText: {
    fontSize: 24,
  },
  postInfo: {
    paddingHorizontal: 16,
  },
  likes: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 4,
  },
  captionContainer: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  captionUsername: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#262626',
  },
  caption: {
    fontSize: 14,
    color: '#262626',
    flex: 1,
  },
  timeAgo: {
    fontSize: 12,
    color: '#8e8e8e',
    marginTop: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#262626',
    marginBottom: 8,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#8e8e8e',
    textAlign: 'center',
  },
});

export default FeedScreen;