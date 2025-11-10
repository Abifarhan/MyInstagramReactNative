@echo off
echo Setting up React Native environment...

:: Set environment variables
set JAVA_HOME=C:\Program Files\Microsoft\jdk-17.0.17.10-hotspot
set ANDROID_HOME=%LOCALAPPDATA%\Android\Sdk
set PATH=%PATH%;%JAVA_HOME%\bin;%ANDROID_HOME%\platform-tools;%ANDROID_HOME%\emulator

echo Java version:
java -version
echo.

echo ADB version:
adb version
echo.

echo Checking for Android devices:
adb devices
echo.

echo Starting React Native Metro bundler...
start "Metro" cmd /k "npm start"

echo.
echo Waiting 5 seconds for Metro to start...
timeout /t 5 /nobreak

echo.
echo Running React Native app on Android...
npx react-native run-android

pause