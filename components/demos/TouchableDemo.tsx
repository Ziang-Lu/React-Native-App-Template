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
    alignItems: 'center',
    paddingTop: 60,
  },
  button: {
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
});
