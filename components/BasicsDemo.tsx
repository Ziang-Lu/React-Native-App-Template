import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';

interface BlinkTextProps {
  style: object;
  text: string;
}

interface BlinkTextState {
  showingText: boolean;
}

class BlinkText extends Component<BlinkTextProps, BlinkTextState> {
  public constructor(props: BlinkTextProps) {
    super(props);
    this.state = {
      showingText: true,
    };
  }

  // This method is called after the component output has been to the DOM, for
  // the FIRST TIME.
  public componentDidMount() {
    // Toggle every second, so we need to use setInterval() rather than
    // setTimeout()
    setInterval(
      () =>
        this.setState((prevState: BlinkTextState) => ({
          showingText: !prevState.showingText,
        })),
      1000,
    );
    // When setState() is called, the component will re-render.
    // => DO NOT update this.state directly, since it will NOT TRIGGER the
    //    the component to be re-rendered.
  }

  public render() {
    if (this.state.showingText) {
      return <Text style={this.props.style}>{this.props.text}</Text>;
    } else {
      return null;
    }
  }
}

class LayoutDemo extends Component {
  public render() {
    return (
      <View
        style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <View style={{ flex: 1, backgroundColor: 'powerblue' }} />
        <View style={{ flex: 2, backgroundColor: 'skyblue' }} />
        <View style={{ flex: 3, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

interface Props {}

interface WordReverserState {
  text: string;
}

class WordReverser extends Component<Props, WordReverserState> {
  public constructor(props: Props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  private _reverseStr(str: string): string {
    return str
      .split('')
      .reverse()
      .join('');
  }

  public render() {
    return (
      <View style={{ padding: 50 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate"
          onChangeText={text => this.setState({ text })}
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

export default class BasicsDemo extends Component {
  // Returns JSX, which essentially embeds XML in JavaScript
  public render() {
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

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
  imageSize: {
    width: 193,
    height: 110,
  },
});
