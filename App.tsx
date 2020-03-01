import 'react-native-gesture-handler';

import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

interface MovieEntry {
  id: string;
  title: string;
  releaseYear: string;
}

export interface Props {}

interface State {
  loading: boolean;
  dataSource: MovieEntry[];
}

export default class MyApp extends Component<Props, State> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }

  private _renderItem({ item }: { item: MovieEntry }) {
    return (
      <Text>
        {item.title}, {item.releaseYear}
      </Text>
    );
  }

  public async componentDidMount() {
    try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const jsonData = await response.json();
      this.setState({
        loading: false,
        dataSource: jsonData.movies,
      });
    } catch (err) {
      return console.error(err);
    }
  }

  public render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    // this.state.loading === false
    return (
      <NavigationContainer>
        <View style={styles.container}>
          <FlatList
            data={this.state.dataSource}
            renderItem={this._renderItem}
            keyExtractor={(item: MovieEntry, index: number) => item.id}
            removeClippedSubviews={true}
          />
        </View>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
