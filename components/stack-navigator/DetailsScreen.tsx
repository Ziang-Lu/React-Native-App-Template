import React from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

export default function DetailsScreen({ route, navigation }) {
  // Add a button on the header
  // TODO: Figure this out
  React.useLayoutEffect(() =>
    navigation.setOptions({
      headerRight: () => (
        <Button
          title="Info"
          color="darkblue"
          onPress={() => Alert.alert('Button is pressed')}></Button>
      ),
    }),
  ),
    [navigation];

  // Get the parameters
  const { itemId, otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>Other parameters: {JSON.stringify(otherParam)}</Text>
      <Button
        title="Go to Details... again!"
        onPress={() => navigation.push('Details')}
      />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
