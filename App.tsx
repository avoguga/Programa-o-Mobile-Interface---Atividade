import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FirstSection from './src/FirstSection';
import SecondSection from './src/SecondSection';

export default function App() {
  return (
    <View style={styles.container}>
      <FirstSection/>
      <SecondSection/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7EBE8"
  },
});
