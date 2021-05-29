import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import { Header } from 'react-native-elements';
import * as Speech from 'expo-speech';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      displayText: '',
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Header
          backgroundColor="crimson"
          centerComponent={{
            text: 'Text To Speech',
            style: {
              color: '#fff', fontSize: 25,
              fontFamily: 'serif', fontWeight: "bold"
            },
          }}
        />


        <Text style={styles.displayText}>Enter the text below</Text>

        <TextInput
          style={styles.inputBox}
          onChangeText={(text) => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            var mean = this.state.text.trim();
            var te = mean.replace(/[^a-zA-Z]/g, '');
            mean === ''
              ? alert('Please enter a word and try!!')
              : Speech.speak(te, { rate: 0.8 });
          }}>
          <Text style={styles.buttonText}>CLICK HERE TO HEAR THE SPEECH</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.ClearButton}
          onPress={() => {
            this.setState({
              text: "",
              displayText: "",
            })
          }}>
          <Text style={styles.buttonText}>CLEAR</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffcccb',
  },
  button: {
    width: '60%',
    height: 65,
    alignSelf: 'center',
    padding: 5,
    margin: 40,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'lightblue',
    borderRadius: 15,
    shadowColor: "blue",
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 8,
    }
  },
  ClearButton: {
    width: '60%',
    height: 35,
    alignSelf: 'center',
    padding: 5,
    marginTop: 10,
    borderWidth: 2,
    borderColor: 'blue',
    backgroundColor: 'lightblue',
    borderRadius: 15,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    fontFamily: 'Calibri',
    fontWeight: 'bold',
    color: 'green',
    borderRadius: 20
  },
  inputBox: {
    marginTop: 15,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'purple',
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 8,
    }
  },
  displayText: {
    flex: 0.1,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'darkblue',
    textDecorationLine: 'underline',
    marginTop: 10,

  },
  displayText1: {
    flex: 0.1,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#000080',
    textDecorationLine: 'underline',
    marginTop: 5,
    shadowColor: "black"
  },
});
