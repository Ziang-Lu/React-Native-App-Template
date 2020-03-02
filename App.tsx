import 'react-native-gesture-handler';

import React, { Component } from 'react';

import StackNavigatorApp from './components/stack-navigator/StackNavigatorApp';
import TabNavigatorApp from './components/tab-navigator/TabNavigatorApp';

export default class MyApp extends Component {
  public render() {
    return <StackNavigatorApp></StackNavigatorApp>;
    // return <TabNavigatorApp></TabNavigatorApp>;
  }
}
