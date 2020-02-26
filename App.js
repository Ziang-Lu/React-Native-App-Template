/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Image, View, Text} from 'react-native';

export default class HelloWorldApp extends Component {
  // Returns JSX, which essentially embeds XML in JavaScript
  render() {
    let pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Hello, world! Here is a picture for you:</Text>
        <Image source={pic} style={{width: 193, height: 110}} />
      </View>
    );
  }
}
