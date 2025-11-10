@echo off
echo === React Native Wireless Setup ===
echo.

:: Set environment
set PATH=%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools

echo 1. Connect your phone via USB cable
echo 2. Make sure USB Debugging is enabled
echo 3. Press any key when ready...
pause

echo.
echo Setting up wireless ADB...
adb tcpip 5555

echo.
echo Now disconnect the USB cable and enter your phone's IP address.
echo You can find it in: Settings → WiFi → Advanced → IP Address
echo.
set /p PHONE_IP="Enter your phone's IP address: "

echo.
echo Connecting to %PHONE_IP%:5555...
adb connect %PHONE_IP%:5555

echo.
echo Checking connection...
adb devices

echo.
echo Starting React Native app...
npx react-native run-android

pause