import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { launchImageLibrary, launchCamera, ImagePickerResponse } from 'react-native-image-picker';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { auth, storage, firestore } from '../../config/firebase';

const AddPostScreen: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [caption, setCaption] = useState('');
  const [uploading, setUploading] = useState(false);

  const selectImage = () => {
    Alert.alert(
      'Select Image',
      'Choose from where you want to select an image',
      [
        { text: 'Camera', onPress: openCamera },
        { text: 'Gallery', onPress: openGallery },
        { text: 'Cancel', style: 'cancel' },
      ]
    );
  };

  const openCamera = () => {
    launchCamera(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      handleImageResponse
    );
  };

  const openGallery = () => {
    launchImageLibrary(
      {
        mediaType: 'photo',
        quality: 0.7,
      },
      handleImageResponse
    );
  };

  const handleImageResponse = (response: ImagePickerResponse) => {
    if (response.didCancel || response.errorMessage) {
      return;
    }

    if (response.assets && response.assets[0]) {
      setSelectedImage(response.assets[0].uri || null);
    }
  };

  const uploadPost = async () => {
    if (!selectedImage || !auth.currentUser) {
      Alert.alert('Error', 'Please select an image');
      return;
    }

    setUploading(true);
    try {
      // Upload image to Firebase Storage
      const response = await fetch(selectedImage);
      const blob = await response.blob();
      
      const imageRef = ref(storage, `posts/${Date.now()}_${auth.currentUser.uid}`);
      await uploadBytes(imageRef, blob);
      const imageUrl = await getDownloadURL(imageRef);

      // Create post document in Firestore
      await addDoc(collection(firestore, 'posts'), {
        userId: auth.currentUser.uid,
        username: auth.currentUser.displayName || 'Anonymous',
        userPhoto: auth.currentUser.photoURL || '',
        caption: caption,
        imageUrl: imageUrl,
        likes: [],
        comments: [],
        createdAt: new Date(),
      });

      // Reset form
      setSelectedImage(null);
      setCaption('');
      Alert.alert('Success', 'Post uploaded successfully!');
    } catch (error: any) {
      Alert.alert('Upload Error', error.message);
    } finally {
      setUploading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>New Post</Text>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.imagePicker} onPress={selectImage}>
          {selectedImage ? (
            <Image source={{ uri: selectedImage }} style={styles.selectedImage} />
          ) : (
            <View style={styles.placeholderContainer}>
              <Text style={styles.placeholderIcon}>📷</Text>
              <Text style={styles.placeholderText}>Tap to select image</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.formContainer}>
          <TextInput
            style={styles.captionInput}
            placeholder="Write a caption..."
            value={caption}
            onChangeText={setCaption}
            multiline
            textAlignVertical="top"
          />

          <TouchableOpacity
            style={[
              styles.uploadButton,
              (!selectedImage || uploading) && styles.uploadButtonDisabled,
            ]}
            onPress={uploadPost}
            disabled={!selectedImage || uploading}>
            <Text style={styles.uploadButtonText}>
              {uploading ? 'Uploading...' : 'Share Post'}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#262626',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  imagePicker: {
    aspectRatio: 1,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    marginBottom: 20,
    overflow: 'hidden',
  },
  selectedImage: {
    width: '100%',
    height: '100%',
  },
  placeholderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderIcon: {
    fontSize: 48,
    marginBottom: 8,
  },
  placeholderText: {
    fontSize: 16,
    color: '#8e8e8e',
  },
  formContainer: {
    flex: 1,
  },
  captionInput: {
    borderWidth: 1,
    borderColor: '#dbdbdb',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    minHeight: 100,
    marginBottom: 20,
  },
  uploadButton: {
    backgroundColor: '#3897f0',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  uploadButtonDisabled: {
    backgroundColor: '#b3d4fc',
  },
  uploadButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AddPostScreen;