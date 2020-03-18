import React from 'react';
import {WebView} from 'react-native-webview';
import {StyleSheet} from 'react-native';

class Preview extends React.Component {
  componentDidMount = () => {};
  render() {
    return <WebView source={{uri: this.props.route.params.url}} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
});
export default Preview;
