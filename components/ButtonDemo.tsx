import React, { Component } from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export default class ButtonDemo extends Component {
  private _onPressButton(): void {
    Alert.alert('Congrats!', 'You tapped a button!');
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button title="Press Me" onPress={this._onPressButton} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Press Me"
            color="#841584"
            onPress={this._onPressButton}
          />
        </View>
        <View style={styles.altButtonContainer}>
          <Button title="This Looks Great!" onPress={this._onPressButton} />
          <Button
            title="How About This One?"
            color="#841584"
            onPress={this._onPressButton}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonContainer: {
    margin: 20,
  },
  altButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
