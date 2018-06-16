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
  View
} from 'react-native';
import firebaseConf from '../shared/firebaseConf';
import MenuTab from '../components/MenuTab';
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
      <ScrollView>
        {this.renderMenu(menu)}
      </ScrollView>
    );
  }
  renderMenu = (menus) => {
    let result = null;
    result = menus.map((menu, index) => {
      return (<MenuTab menu={menu} key={index} />);
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
