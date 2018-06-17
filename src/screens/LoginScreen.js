/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button
} from 'react-native';


export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Text>Book App</Text>
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
            onChangeText={(username) => this.setState({ username })}
            value={this.state.username}
          />
        </View>
        <View style={{ flex: 1 }}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: 200 }}
            onChangeText={(password) => this.setState({ password })}
            value={this.state.password}
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => this.onPressLearnMore()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => this.onPressLearnMore()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => this.onPressLearnMore()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => this.onPressLearnMore()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            onPress={() => this.onPressLearnMore()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4E485B',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
