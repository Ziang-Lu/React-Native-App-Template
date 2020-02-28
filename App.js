import React, {Component} from 'react';
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  SectionList,
  Text,
  TouchableHighlight,
  View,
  TextInput,
} from 'react-native';
import {
  styles,
  buttonDemoStyles,
  touchableDemoStyles,
  sectionListDemoStyles,
} from './styles';

class BlinkText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingText: true,
    };
  }

  // This method is called after the component output has been to the DOM, for
  // the FIRST TIME.
  componentDidMount() {
    // Toggle every second, so we need to use setInterval() rather than
    // setTimeout()
    setInterval(
      () =>
        this.setState(prevState => ({
          showingText: !prevState.showingText,
        })),
      1000,
    );
    // When setState() is called, the component will re-render.
    // => DO NOT update this.state directly, since it will NOT TRIGGER the
    //    the component to be re-rendered.
  }

  render() {
    if (this.state.showingText) {
      return <Text style={this.props.style}>{this.props.text}</Text>;
    } else {
      return null;
    }
  }
}

class LayoutDemo extends Component {
  render() {
    return (
      <View
        style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
        <View style={{flex: 1, backgroundColor: 'powerblue'}} />
        <View style={{flex: 2, backgroundColor: 'skyblue'}} />
        <View style={{flex: 3, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

class WordReverser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  _reverseStr(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }

  render() {
    return (
      <View style={{padding: 50}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate"
          onChangeText={text => this.setState({text})}
        />
        <Text>
          {this.state.text
            .split(' ')
            .map(this._reverseStr)
            .join(' ')}
        </Text>
      </View>
    );
  }
}

class BasicsDemo extends Component {
  // Returns JSX, which essentially embeds XML in JavaScript
  render() {
    const pic = {
      uri:
        'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg',
    };
    return (
      <View style={styles.background}>
        <BlinkText text="I love to blink" style={styles.bigBlue} />
        <BlinkText text="Yes blinking is so great" style={styles.red} />
        <BlinkText
          text="This should be a mixed style"
          style={[styles.bigBlue, styles.red]}
        />{' '}
        <Image source={pic} style={styles.imageSize} />
        {/* <WordReverser /> */}
      </View>
    );
  }
}

class SectionListBasics extends Component {
  _renderSectionHeader({section}) {
    return (
      <Text style={sectionListDemoStyles.sectionHeader}>{section.title}</Text>
    );
  }

  _renderItem({item}) {
    return <Text style={sectionListDemoStyles.item}>{item}</Text>;
  }

  render() {
    return (
      <View style={sectionListDemoStyles.container}>
        <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
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

class ButtonBasics extends Component {
  _onPressButton() {
    alert('You tapped a button!');
  }

  render() {
    return (
      <View style={buttonDemoStyles.container}>
        <View style={buttonDemoStyles.buttonContainer}>
          <Button title="Press Me" onPress={this._onPressButton} />
        </View>
        <View style={buttonDemoStyles.buttonContainer}>
          <Button
            title="Press Me"
            color="#841584"
            onPress={this._onPressButton}
          />
        </View>
        <View style={buttonDemoStyles.altButtonContainer}>
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

class TouchableBasics extends Component {
  _onPressButton() {
    alert('You tapped a button!');
  }

  _onLongPressButton() {
    alert('You long-pressed a button!');
  }

  render() {
    // For more about Touchables, check out:
    // https://reactnative.dev/docs/handling-touches
    return (
      <View style={touchableDemoStyles.container}>
        <TouchableHighlight
          onPress={this._onPressButton}
          onLongPress={this._onLongPressButton}
          underlayColor="white">
          <View style={touchableDemoStyles.button}>
            <Text style={touchableDemoStyles.buttonText}>
              TouchableHighlight
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class FetchDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource: [],
    };
  }

  _renderItem({item}) {
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
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    // this.state.loading === false
    return (
      <View style={{flex: 1, paddingTop: 20}}>
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
