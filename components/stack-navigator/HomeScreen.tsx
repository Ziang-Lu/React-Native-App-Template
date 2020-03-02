import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const [titleInput, setTitleInput] = React.useState('');

  // TODO: Figure this out
  React.useEffect(() => {
    if (route.params?.post) {
      // Feel free to do something with route.params.post
    }
  }, [route.params?.post]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          // Pass parameters to another screen
          // -> Add the parameters as a second parameter to
          //    navigation.navigate() method
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'Some other parameter...',
          });
        }}
      />

      <TextInput
        placeholder="Type the new title here..."
        onChangeText={text => setTitleInput(text)}
        value={titleInput}></TextInput>
      <Button
        title="Change Title"
        onPress={() => {
          // Dynamically update the options of the current screen
          navigation.setOptions({ title: titleInput });
        }}
      />

      <Button
        title="Create Post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
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
