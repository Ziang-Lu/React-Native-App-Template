import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import CreatePostScreen from './CreatePostScreen';
import DetailsScreen from './DetailsScreen';
import HomeScreen from './HomeScreen';

const Stack = createStackNavigator();

export default class StackNavigatorApp extends Component {
  public render() {
    // Notice how we pass initial parameters to a screen
    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#f4511e' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
          }}
          initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Overview' }}></Stack.Screen>
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            initialParams={{ itemId: 42 }}></Stack.Screen>
          <Stack.Screen
            name="CreatePost"
            component={CreatePostScreen}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
