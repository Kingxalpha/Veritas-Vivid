import { StatusBar } from 'expo-status-bar';
import {Text, View } from 'react-native';
import MyStack from './Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
