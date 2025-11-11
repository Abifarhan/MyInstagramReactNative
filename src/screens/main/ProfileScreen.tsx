import React, { useState } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../../config/firebase';
import { useNavigation } from '@react-navigation/native';
import ProfileTemplate from '../../components/templates/ProfileTemplate';
import { useUserProfileViewModel } from '../../viewmodels/useUserProfileViewModel';

const ProfileScreen: React.FC = () => {
  const navigation = useNavigation<any>();

  const handleSignOut = async () => {
    console.log('Sign Out button pressed');
    try {
      console.log('Attempting Firebase signOut...');
      await signOut(auth);
      console.log('Sign out successful, navigating to Login...');
      navigation.navigate('Login');
    } catch (error) {
      console.log('Sign out error:', error);
    }
  };

  return (
    <TouchableOpacity
      style={{
        alignSelf: 'center',
        marginTop: 40,
        backgroundColor: '#3897f0',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
      }}
      onPress={handleSignOut}
    >
      <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>Sign Out</Text>
    </TouchableOpacity>
  );
};



export default ProfileScreen;