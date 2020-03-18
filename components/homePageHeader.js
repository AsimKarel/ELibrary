import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import Pattern from '../assets/Pattern.png';

const Header = props => {
  return (
    <ImageBackground source={Pattern} style={styles.image}>
      <View style={styles.view}>
        <Text style={styles.title}>Gutenberg Project</Text>
        <Text style={styles.subtitle}>
          A social cataloging website that allows you to freely search its
          database of books, annotations, and reviews.
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = {
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  title: {
    paddingTop: 30,
    fontSize: 50,
    width: '90%',
    alignSelf: 'center',
    color: '#5E56E7',
    fontFamily: 'Montserrat-SemiBold',
  },
  subtitle: {
    paddingTop: 20,
    fontSize: 16,
    width: '90%',
    alignSelf: 'center',
    fontFamily: 'Montserrat-Regular',
  },
  image: {width: '100%', height: '100%'},
  view: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
};

export default Header;
