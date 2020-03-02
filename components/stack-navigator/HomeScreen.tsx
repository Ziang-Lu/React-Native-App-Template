import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const [titleInput, setTitleInput] = React.useState('');
  return (
    <View style={styles.container}>
      <View style={[styles.container, { paddingTop: 100 }]}>
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
      </View>

      <View style={styles.container}>
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
      </View>

      <View style={styles.container}>
        <Button
          title="Create Post"
          onPress={() => navigation.navigate('CreatePost')}
        />
        <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
      </View>
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
