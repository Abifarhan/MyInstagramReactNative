# Alternative Android Emulators for React Native

## 🚀 Best Alternatives to Android Studio Emulator

### **1. BlueStacks (Already Installed)**
- **Status**: ✅ Installed via winget
- **Pros**: Fast, easy to use, good for testing
- **Setup**:
  1. Open BlueStacks
  2. Go to Settings → Advanced → Enable ADB
  3. Connect: `adb connect 127.0.0.1:5555`
  4. Run: `npx react-native run-android`

### **2. Genymotion (Professional)**
- **Download**: https://www.genymotion.com/
- **Pros**: Fast, reliable, professional grade
- **Free**: Personal use version available
- **Setup**: Easy wizard-based setup

### **3. MEmu (Gaming focused)**
- **Download**: https://www.memuplay.com/
- **Pros**: Lightweight, fast boot, good performance
- **Setup**: Similar to BlueStacks

### **4. NoxPlayer**
- **Download**: https://www.bignox.com/
- **Pros**: Good for development, macro support
- **Setup**: Enable developer options and ADB

### **5. Scrcpy (Use real device wirelessly)**
- **Install**: `winget install Genymobile.scrcpy`
- **Pros**: Uses real Android device, no emulator needed
- **Setup**: Connect phone via USB once, then wireless

## 🔧 Quick Setup for BlueStacks

### Step 1: Open BlueStacks
```bash
# BlueStacks should be in Start Menu now
```

### Step 2: Enable ADB in BlueStacks
1. Open BlueStacks
2. Click Settings (gear icon)
3. Go to Advanced tab
4. Enable "Android Debug Bridge (ADB)"
5. Note the port (usually 5555)

### Step 3: Connect and Run
```bash
# Set environment
$env:PATH += ";$env:LOCALAPPDATA\Android\Sdk\platform-tools"

# Connect to BlueStacks
adb connect 127.0.0.1:5555

# Check connection
adb devices

# Run your app
npx react-native run-android
```

## 📱 Using Real Device (Easiest Option)

### Wireless ADB (No cables needed):
1. Connect phone to same WiFi as computer
2. Enable Developer Options on phone
3. Enable USB Debugging
4. Connect via USB once: `adb tcpip 5555`
5. Get phone's IP address
6. Connect wirelessly: `adb connect PHONE_IP:5555`
7. Disconnect USB cable
8. Run: `npx react-native run-android`

## 🎯 Recommended Approach

**For Development**: Use a **real Android device** with wireless ADB
**For Testing**: Use **BlueStacks** (already installed)
**For Professional**: Use **Genymotion**

Your Metro server is already running at: **http://10.80.4.182:8081**