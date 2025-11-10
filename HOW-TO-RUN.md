# How to Run React Native App

## Current Status
✅ **Metro bundler is running** on port 8081
✅ **Project structure is ready**
✅ **Android files are configured**

## Quick Start Options

### Option A: If you have Android Studio
1. Open Android Studio
2. Create/start an Android emulator
3. Run: `npm run android`

### Option B: Manual APK Install (No emulator needed)
1. Install Android Studio (just for build tools)
2. Build APK: `cd android && ./gradlew assembleDebug`
3. Install APK on phone: `adb install app/build/outputs/apk/debug/app-debug.apk`
4. Set Metro server in app: Your_Computer_IP:8081

### Option C: Physical Device with USB Debugging
1. Enable Developer Options on phone
2. Connect via USB
3. Run: `npm run android`

## Current Metro Server
- **Running at**: http://10.80.4.182:8081
- **Use this IP** in your phone's developer settings

## Project Commands
- `npm start` - Start Metro bundler (already running)
- `npm run android` - Run on Android (needs setup)
- `npm run ios` - Run on iOS (macOS only)

## Troubleshooting
If you see Java/Android errors, you need to install:
- Android Studio
- Java 11+
- Set ANDROID_HOME and JAVA_HOME environment variables