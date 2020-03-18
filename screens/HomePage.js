import React from 'react';
import {
  View,
  Keyboard,
  TouchableWithoutFeedback,
  StyleSheet,
} from 'react-native';
import TopicButton from '../components/topicButton';
import Header from '../components/homePageHeader';
import Fiction from '../assets/Fiction.png';
import Drama from '../assets/Drama.png';
import Humor from '../assets/Humour.png';
import Politics from '../assets/Politics.png';
import Philosophy from '../assets/Philosophy.png';
import History from '../assets/History.png';
import Adventure from '../assets/Adventure.png';

class HomePage extends React.Component {
  gotoTopic = category => {
    this.props.navigation.navigate('Books', {category});
  };

  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <Header />
          </View>
          <View style={styles.buttonsContainer}>
            <TopicButton
              text="Fiction"
              image={Fiction}
              onPress={() => {
                this.gotoTopic('Fiction');
              }}
            />
            <TopicButton
              text="Drama"
              image={Drama}
              onPress={() => {
                this.gotoTopic('Drama');
              }}
            />
            <TopicButton
              text="Humor"
              image={Humor}
              onPress={() => {
                this.gotoTopic('Humor');
              }}
            />
            <TopicButton
              text="Politics"
              image={Politics}
              onPress={() => {
                this.gotoTopic('Politics');
              }}
            />
            <TopicButton
              text="Philosophy"
              image={Philosophy}
              onPress={() => {
                this.gotoTopic('Philosophy');
              }}
            />
            <TopicButton
              text="History"
              image={History}
              onPress={() => {
                this.gotoTopic('History');
              }}
            />
            <TopicButton
              text="Adventure"
              image={Adventure}
              onPress={() => {
                this.gotoTopic('Adventure');
              }}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: '#F8F7FF',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  buttonsContainer: {
    flex: 2,
  },
  icon: {
    width: undefined,
    height: undefined,
    flex: 1,
  },
});
export default HomePage;
