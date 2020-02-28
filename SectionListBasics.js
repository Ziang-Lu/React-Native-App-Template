import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

export default class SectionListBasics extends Component {
  _renderSectionHeader({ section }) {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  }

  _renderItem({ item }) {
    return <Text style={styles.item}>{item}</Text>;
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            { title: 'D', data: ['Devin', 'Dan', 'Dominic'] },
            {
              title: 'J',
              data: [
                'Jackson',
                'James',
                'Jillian',
                'Jimmy',
                'Joel',
                'John',
                'Julie',
              ],
            },
          ]}
          renderSectionHeader={this._renderSectionHeader}
          renderItem={this._renderItem}
          keyExtractor={(item, index) => index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: 'bold',
    fontSize: 14,
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
  item: {
    padding: 10,
    height: 44,
    fontSize: 18,
  },
});
