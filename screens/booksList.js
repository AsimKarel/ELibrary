import {FlatList, StyleSheet, View, TextInput} from 'react-native';
import React, {Component} from 'react';
import BookTile from '../components/bookTile';

class BooksList extends React.Component {
  constructor(props) {
    return super(props);
  }
  state = {
    books: [],
    searchText: '',
  };
  componentDidMount() {
    this.getBooks('');
  }

  search = text => {
    this.setState({searchText: text});
    this.getBooks(this.state.searchText);
  };

  getBooks(searchQuery) {
    return fetch(
      'http://skunkworks.ignitesol.com:8000/books?mime_type=image&topic=' +
        this.props.route.params.category +
        '&search=' +
        searchQuery,
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.results);
        this.setState({books: responseJson.results});
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.container}>
          <TextInput
            placeholder={'Type here to search'}
            style={styles.inputBox}
            value={this.state.searchText}
            onChangeText={this.search}
          />
          <FlatList
            data={this.state.books}
            renderItem={book => (
              <BookTile
                book={book.item}
                key={book.item.name}
                onPress={() => {
                  const htmlKey = Object.keys(book.item.formats).find(key => {
                    return key.startsWith('text/html');
                  });
                  if (htmlKey) {
                    this.props.navigation.navigate('Preview', {
                      url: book.item.formats[htmlKey],
                    });
                    return;
                  }
                  const pdfKey = Object.keys(book.item.formats).find(key => {
                    return key.startsWith('application/pdf');
                  });
                  if (pdfKey) {
                    this.props.navigation.navigate('Preview', {
                      url: book.item.formats[pdfKey],
                    });
                    return;
                  }
                  const txtKey = Object.keys(book.item.formats).find(key => {
                    return key.startsWith('text/plain');
                  });
                  if (txtKey) {
                    this.props.navigation.navigate('Preview', {
                      url: book.item.formats[txtKey],
                    });
                    return;
                  }
                  const zipKey = Object.keys(book.item.formats).find(key => {
                    return key.startsWith('application/zip');
                  });
                  if (zipKey) {
                    alert('Zip Files are not supported');
                    return;
                  }
                  alert('Preview not available');
                }}
              />
            )}
            numColumns={3}
            ListHeaderComponent={this.renderHeader}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    backgroundColor: '#F8F7FF',
  },
  container: {
    marginHorizontal: 25,
    backgroundColor: '#F8F7FF',
  },
  head: {
    fontSize: 20,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  inputBox: {
    backgroundColor: '#F0F0F6',
    padding: 15,
    fontSize: 16,
    textAlign: 'center',
    borderRadius: 10,
  },
});

export default BooksList;
