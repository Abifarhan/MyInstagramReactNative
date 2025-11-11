import { useEffect, useState } from 'react';
import { doc, getDoc, collection, query, where, onSnapshot } from 'firebase/firestore';
import { auth, firestore } from '../config/firebase';
import { User, Post } from '../types';

export function useUserProfileViewModel() {
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [userPosts, setUserPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (auth.currentUser) {
      loadUserProfile();
      loadUserPosts();
    }
  }, []);

  const loadUserProfile = async () => {
    try {
      const userDoc = await getDoc(doc(firestore, 'users', auth.currentUser!.uid));
      if (userDoc.exists()) {
        setUserProfile(userDoc.data() as User);
      }
    } catch (err) {
      setError('Error loading user profile');
    } finally {
      setLoading(false);
    }
  };

  const loadUserPosts = () => {
    const postsQuery = query(
      collection(firestore, 'posts'),
      where('userId', '==', auth.currentUser!.uid)
    );
    const unsubscribe = onSnapshot(postsQuery, (snapshot) => {
      const posts: Post[] = [];
      snapshot.forEach((doc) => {
        posts.push({ id: doc.id, ...doc.data() } as Post);
      });
      setUserPosts(posts.sort((a, b) => {
        const aTime = typeof a.createdAt === 'string' ? new Date(a.createdAt).getTime() : a.createdAt;
        const bTime = typeof b.createdAt === 'string' ? new Date(b.createdAt).getTime() : b.createdAt;
        return bTime - aTime;
      }));
    });
    return unsubscribe;
  };

  return {
    userProfile,
    userPosts,
    loading,
    error,
  };
}
