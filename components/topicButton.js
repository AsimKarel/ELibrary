import React from 'react';
import {TouchableOpacity, StyleSheet, Text, Image, View} from 'react-native';
import Next from '../assets/Next.png';

const TopicButton = ({onPress, text, image}) => (
  <TouchableOpacity style={[styles.button]} onPress={onPress}>
    <View style={styles.iconContainer}>
      <Image style={styles.icon} source={image} />
    </View>
    <Text style={styles.buttonText}>{text}</Text>
    <View style={styles.arrowContainer}>
      <Image style={styles.icon} source={Next} />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    marginBottom: 15,
    paddingVertical: 5,
    alignItems: 'center',
    borderColor: 'white',
    borderRadius: 4,
    width: '90%',
    flexDirection: 'row',
    height: 50,
    elevation: 5,
    shadowColor: '#d3d1ee',
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    backgroundColor: 'white',
  },
  buttonText: {
    padding: 10,
    fontSize: 20,
    flex: 6,
  },
  iconContainer: {
    width: 45,
    height: 45,
    padding: 10,
  },
  arrowContainer: {
    width: 40,
    height: 40,
    padding: 10,
  },
  icon: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
});

export default TopicButton;
