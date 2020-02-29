import React, { Component } from 'react';
import { SectionList, StyleSheet, Text, View } from 'react-native';

interface Section {
  title: string;
  data: string[];
}

export default class SectionListBasics extends Component {
  private _renderSectionHeader({ section }: { section: Section }) {
    return <Text style={styles.sectionHeader}>{section.title}</Text>;
  }

  private _renderItem({ item }: { item: string }) {
    return <Text style={styles.item}>{item}</Text>;
  }

  public render() {
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
          keyExtractor={(item: string, index: number) => index.toString()}
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
