import React from 'react';
import { Alert, Button, Text, TouchableOpacity, View } from 'react-native';

function StyledButton({ onPress, text }) {
  return (
    <TouchableOpacity style={{ paddingVertical: 20 }} onPress={onPress}>
      <View style={{ padding: 10, backgroundColor: 'skyblue' }}>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default function DetailsScreen({ route, navigation }) {
  // Add a button on the header
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
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>Other parameters: {JSON.stringify(otherParam)}</Text>
      <StyledButton
        onPress={() => navigation.push('Details')}
        text={'Go to Details AGAIN'}></StyledButton>
      <View
        style={{
          flexDirection: 'row',
        }}>
        <StyledButton
          onPress={navigation.goBack}
          text={'Go Back'}></StyledButton>
        <StyledButton
          onPress={() => navigation.navigate('Home')}
          text={'Go Home'}></StyledButton>
      </View>
    </View>
  );
}
