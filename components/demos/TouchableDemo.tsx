import React, { Component } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export default class TouchableBasics extends Component {
  private _onPressButton(): void {
    Alert.alert('Congrats!', 'You tapped a button!');
  }

  private _onLongPressButton(): void {
    Alert.alert('Congrats!', 'You long-pressed a button!');
  }

  public render() {
    // For more about Touchables, check out:
    // https://reactnative.dev/docs/handling-touches
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="white"
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    textAlign: 'center',
    color: 'white',
  },
});