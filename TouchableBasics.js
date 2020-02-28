import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';

export default class TouchableBasics extends Component {
  _onPressButton() {
    alert('You tapped a button!');
  }

  _onLongPressButton() {
    alert('You long-pressed a button!');
  }

  render() {
    // For more about Touchables, check out:
    // https://reactnative.dev/docs/handling-touches
    return (
      <View style={styles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white">
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
