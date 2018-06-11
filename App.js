import React from 'react';
import { StyleSheet, Keyboard, Text, Image, View } from 'react-native';

import backgroundImage from './assets/chuck_image.jpg';
import  MyButton from './Components/Button.js'
import MyInput from './Components/Search.js';

export default class App extends React.Component {

  state = {
    keyWord: '',
    quote: '',
    quoteFound: false
  }

  handleChangeText = (keyWord) => {
    this.setState({keyWord})
  }
  
  getQuote = () => {

    Keyboard.dismiss()
    const string = this.state.keyWord.toLowerCase();

    return fetch('https://api.chucknorris.io/jokes/search?query='+string)
      .then((response) => response.json())
      .then((responseJson) => {

        var data = responseJson.result[0].value ? responseJson.result[0].value : false
        console.log(data)

        if (data) {
          this.setState({
            quote: data,
            quoteFound: true
          })
        }
      })
        .catch((error) => {
        console.error(error);
    })
  }

  renderContent = () => {
    if(this.state.quote) {
      return <View><Text>{this.state.quote}</Text></View>
    }
    else {
      return (
      <View>
        <Text>No quote found</Text>
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
          value={this.state.keyWord}
          changeText={this.handleChangeText}/>
        <MyButton getQuote={this.getQuote}/>
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
