import React from 'react';
import { Button, TextInput } from 'react-native';

export default function CreatePostScreeen({ route, navigation }) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        placeholder="What's on your mind?"
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Post!"
        onPress={() => {
          // Pass params (data) back to home screen
          navigation.navigate('Home', { post: postText });
        }}
      />
    </>
  );
}
