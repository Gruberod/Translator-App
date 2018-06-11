import React from 'react';
import { StyleSheet, Keyboard, Text, TextInput, Button, View } from 'react-native';

export default class App extends React.Component {

  state = {
    toTranslate: '',
    translation: '',
    translationFound: false
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
        <TextInput
        style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(toTranslate) => this.setState({toTranslate})}
        value={this.state.toTranslate}

      />
        <Button
          title="Translate"
          onPress={this.translate}/>
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
  },
});
