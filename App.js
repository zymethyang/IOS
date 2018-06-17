// You can import Ionicons from @expo/vector-icons if you use Expo or
// react-native-vector-icons/Ionicons otherwise.
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Root from './Root';
import LoginScreen from './src/screens/LoginScreen';


export default class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Root />
      </View>
    );
  }
}