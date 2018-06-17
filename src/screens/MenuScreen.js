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
  ScrollView,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import firebaseConf from '../shared/firebaseConf';
import MenuTab from '../components/MenuTab';
import ProfileTab from '../components/ProfileTab';
var database = firebaseConf.database();


export default class MenuScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: []
    }
  }

  componentDidMount() {
    database.ref('/system_settings/menu_config/normal').once('value').then(data => {
      this.setState({
        menu: data.val()
      })
    });
  }
  render() {
    let { menu } = this.state;
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 2 }}>
          <ProfileTab />
        </View>
        <View style={{ flex: 7 }}>
          <ScrollView>
            {this.renderMenu(menu)}
          </ScrollView>
        </View>
      </View>
    );
  }
  renderMenu = (menus) => {
    let result = null;
    result = menus.map((menu, index) => {
      return (
        <TouchableWithoutFeedback key={index} onPress={() => this.props.navigation.navigate('CreateBookScreen', { 'username': 'user' })}>
          <View style={{ flex: 1 }}>
            <MenuTab menu={menu} />
          </View>
        </TouchableWithoutFeedback>
      );
    })
    return result;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
