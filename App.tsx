// Instagram Clone App
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from './src/config/firebase';

// Import screens
import LoginScreen from './src/screens/auth/LoginScreen';
import RegisterScreen from './src/screens/auth/RegisterScreen';
import FeedScreen from './src/screens/main/FeedScreen';
import SearchScreen from './src/screens/main/SearchScreen';
import AddPostScreen from './src/screens/main/AddPostScreen';
import ProfileScreen from './src/screens/main/ProfileScreen';
import DashboardLandingPage from './src/screens/main/DashboardLandingPage';
import { RootStackParamList, MainTabParamList } from './src/types';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

// Main tab navigator for authenticated users
function MainTabNavigator() {
  // Dummy component for testing
  const DummyScreen = () => (
    <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 20 }}>Dummy Tab Works!</Text>
  );
  return (
    <Tab.Navigator>
      <Tab.Screen name="Feed" component={DummyScreen} />
    </Tab.Navigator>
  );
}

function App() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      setUser(authUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  if (loading) {
    return (
      <SafeAreaProvider>
        <Text style={{ textAlign: 'center', marginTop: 50, fontSize: 20 }}>Loading...</Text>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <Stack.Screen name="DashboardLandingPage" component={DashboardLandingPage} />
          ) : (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;