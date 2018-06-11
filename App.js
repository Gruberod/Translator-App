import React from 'react';
import { StyleSheet, Keyboard, Text, TextInput, Image, View } from 'react-native';

import backgroundImage from './assets/minions_background.jpg';
import  MyButton from './Components/Button.js'
import MyInput from './Components/Search.js';

export default class App extends React.Component {

  state = {
    toTranslate: '',
    translation: '',
    translationFound: false
  }

  handleChangeText = (toTranslate) => {
    this.setState({toTranslate})
  }
  
  translate = () => {

    Keyboard.dismiss()
    const string = this.state.toTranslate.toLowerCase();

    return fetch('http://api.funtranslations.com/translate/minion.json?text='+string)
      .then((response) => response.json())
      .then((responseJson) => {

        var data = responseJson.contents.translated ? responseJson.contents.translated : false
        console.log(data)

        if (data) {
          this.setState({
            translation: data,
            translationFound: true
          })
        }
      })
        .catch((error) => {
        console.error(error);
    })
  }

  renderContent = () => {
    if(this.state.translation) {
      return <View><Text>{this.state.translation}</Text></View>
    }
    else {
      return (
      <View>
        <Text>No translation found</Text>
      </View>
      )}
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={{position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', opacity: 0.1}}>
          <Image source={backgroundImage} style={{flex: 1, height: null, width: null}}/>
        </View>
        <MyInput
          value={this.state.toTranslate}
          changeText={this.handleChangeText}/>
        <MyButton translate={this.translate}/>
        <View>
        {this.renderContent()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
