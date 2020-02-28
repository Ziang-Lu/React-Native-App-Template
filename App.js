import React, { Component } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class FetchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }

  _renderItem({ item }) {
    return (
      <Text>
        {item.title}, {item.releaseYear}
      </Text>
    );
  }

  async componentDidMount() {
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

  render() {
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator />
        </View>
      );
    }
    // this.state.loading === false
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => item.id}
          removeClippedSubviews={true}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});
