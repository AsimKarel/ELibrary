import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import image from '../assets/logo.png';

class LoginLogo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.icon} source={image} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 300,
    width: 300,
  },
});
export default LoginLogo;
