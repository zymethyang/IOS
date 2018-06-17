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


export default class ProfileTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 2, justifyContent: 'center', alignContent: 'center' }}>
                    <Image source={{ uri: 'https://firebasestorage.googleapis.com/v0/b/demofirebase-97584.appspot.com/o/avatars%2FWgpvh14DGG31046.jpg?alt=media&token=1b11f9c9-7915-4d67-b0ef-7a1c1f271e2f' }} style={{ height: 100, width: 100, borderRadius: 100 }} />
                </View>
                <View style={{ flex: 8 }}>
                    <Text style={{ marginLeft: 60, fontSize: 18, fontWeight: 'bold', color: 'white' }}>Dung12</Text>
                    <Text style={{ marginLeft: 60, fontSize: 18, fontWeight: 'bold', color: 'white' }}>dung12@gmail.com</Text>
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
        backgroundColor: '#424455',
    }
});
