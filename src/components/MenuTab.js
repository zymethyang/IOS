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
    Image
} from 'react-native';


export default class MenuTab extends Component {
    render() {
        let { icon, text } = this.props.menu;
        console.log(this.props);
        return (
            <View style={styles.container}>
                <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                    <Image source={{ uri: icon }} style={{ height: 40, width: 40 }} />
                </View>
                <View style={{ flex: 9 }}>
                    <Text style={{ marginLeft: 20, fontSize: 18, fontWeight: 'bold' }}>{text}</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
