import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import wallpaper from './assets/images/wallpaper.webp'

export default function App() {
  return (
    <ImageBackground source={wallpaper} style={styles.container}>
      <Text>Open up App.js to start da on your app!</Text>
      <Text>Open up App.js to sart da on your app!</Text>

      <StatusBar style="auto" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
