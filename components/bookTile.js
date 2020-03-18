import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const BookTile = ({book, onPress, style = style}) => (
  <TouchableOpacity style={[styles.container]} onPress={onPress}>
    <View>
      <View style={styles.iconContainer}>
        <Image style={styles.icon} source={{uri: book.formats['image/jpeg']}} />
      </View>
      <View style={{height: 35}}>
        <Text style={styles.text}>{book.title}</Text>
        {book.authors.length > 0 && (
          <Text style={styles.subtext}>{book.authors[0].name}</Text>
        )}
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 25,
    borderRadius: 8,
    height: 200,
    marginRight: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
    padding: 0,
    width: 114,
  },
  iconContainer: {
    width: 114,
    height: 162,
  },
  icon: {
    width: undefined,
    height: undefined,
    borderRadius: 8,
    flex: 1,
  },
  text: {
    fontSize: 13,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    fontFamily: 'Montserrat-Medium',
  },
  subtext: {
    fontSize: 12,
    textAlign: 'left',
    fontFamily: 'Montserrat-Regular',
  },
});

export default BookTile;
