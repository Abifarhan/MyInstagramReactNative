# React Native App

# Instagram Clone - React Native & Firebase

A full-featured Instagram clone built with React Native and Firebase.

## Features

- ✅ User Authentication (Login/Register)
- ✅ Photo Upload from Camera/Gallery
- ✅ Feed with Posts
- ✅ User Profiles
- ✅ Search/Explore
- ✅ Real-time Updates
- ✅ Like Posts
- ✅ Comments (coming soon)
- ✅ Stories (coming soon)

## Tech Stack

- **Frontend**: React Native, TypeScript, Expo
- **Backend**: Firebase (Authentication, Firestore, Storage)
- **Navigation**: React Navigation v6
- **State Management**: React Hooks
- **Image Handling**: react-native-image-picker

## Setup Instructions

### 1. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable the following services:
   - Authentication (Email/Password)
   - Firestore Database
   - Storage

4. Get your Firebase config from Project Settings > General > Web apps
5. Replace the config in `src/config/firebase.ts`

### 2. Install Dependencies

```bash
npm install --legacy-peer-deps
```

### 3. Run the App

```bash
# Start Metro bundler
npm start

# Or run with Expo
npx expo start --tunnel
```

### 4. Firebase Security Rules

#### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own user document
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Anyone can read posts, authenticated users can write
    match /posts/{postId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

#### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /posts/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Project Structure

```
src/
├── config/
│   └── firebase.ts          # Firebase configuration
├── screens/
│   ├── auth/
│   │   ├── LoginScreen.tsx   # Login screen
│   │   └── RegisterScreen.tsx # Register screen
│   └── main/
│       ├── FeedScreen.tsx    # Home feed
│       ├── SearchScreen.tsx  # Search/Explore
│       ├── AddPostScreen.tsx # Create new post
│       └── ProfileScreen.tsx # User profile
├── types/
│   └── index.ts             # TypeScript types
└── components/              # Reusable components (future)
```

## Usage

1. **Sign Up**: Create a new account with email and password
2. **Login**: Sign in with your credentials
3. **Add Post**: Tap the + tab to upload photos from camera or gallery
4. **Browse Feed**: See posts from all users in chronological order
5. **Profile**: View your profile and posts
6. **Search**: Explore posts (currently shows placeholder grid)

## Firebase Data Models

### User Document
```typescript
{
  uid: string,
  email: string,
  displayName: string,
  photoURL?: string,
  bio?: string,
  followers: string[],
  following: string[],
  postsCount: number,
  createdAt: Date
}
```

### Post Document
```typescript
{
  id: string,
  userId: string,
  username: string,
  userPhoto?: string,
  caption: string,
  imageUrl: string,
  likes: string[],
  comments: Comment[],
  createdAt: Date
}
```

## Future Enhancements

- [ ] Stories functionality
- [ ] Comments system
- [ ] Push notifications
- [ ] Direct messaging
- [ ] Advanced search filters
- [ ] Following/Followers system
- [ ] Image filters
- [ ] Video posts
- [ ] Hashtags
- [ ] User mentions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is for educational purposes only.

## Project Structure

```
ReactNative/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── CustomButton.tsx # Custom button component
│   └── screens/             # Application screens
│       └── HomeScreen.tsx   # Main home screen
├── App.tsx                  # Main application entry point
├── index.js                 # App registration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (>= 14)
- npm or yarn
- React Native development environment
- Android Studio (for Android development)
- Xcode (for iOS development on macOS)

### Installation

1. Install dependencies:
```bash
npm install
```

### Running the App

1. Start the Metro bundler:
```bash
npm start
```

2. Run on Android (in a new terminal):
```bash
npm run android
```

3. Run on iOS (in a new terminal, macOS only):
```bash
npm run ios
```

## Features

- Basic navigation setup with React Navigation
- Simple home screen with welcome message
- Reusable components structure
- TypeScript support
- Modern React Native project structure

## Development

- The main app logic is in `App.tsx`
- Add new screens in `src/screens/`
- Create reusable components in `src/components/`
- Follow React Native and TypeScript best practices

## Available Scripts

- `npm start` - Start the Metro bundler
- `npm run android` - Run the app on Android device/emulator
- `npm run ios` - Run the app on iOS device/simulator
- `npm run lint` - Run ESLint
- `npm test` - Run tests

## 📱 Wireless Debugging (No Expo Required)

### Method 1: ADB over WiFi (Android 11+)
1. Enable **Developer Options** on your phone (tap Build Number 7 times)
2. Enable **USB Debugging** and **Wireless Debugging**
3. Connect phone via USB first
4. Run: `adb tcpip 5555`
5. Disconnect USB, run: `adb connect YOUR_PHONE_IP:5555`
6. Run: `npm run android`

### Method 2: Manual Network Setup
1. Start Metro: `npm start`
2. Install the APK on your phone manually
3. Shake phone to open developer menu
4. Go to **Settings > Debug server host & port**
5. Enter: `10.80.4.182:8081` (your computer's IP)
6. Reload the app

### Method 3: QR Code (Alternative)
1. Install a QR code app that can generate APK download links
2. Build and host your APK locally
3. Scan QR code to download and install

## Learn More

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [React Navigation](https://reactnavigation.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ADB Wireless Setup](https://developer.android.com/studio/command-line/adb#wireless)