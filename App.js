import React from 'react';
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';

export default class App extends React.Component {

  state = {
    toTranslate: '',
    translation: '',
    translationFound: false
  }

  translate = () => {
    alert('translation in progress')
  }
  

  render() {
    return (
      <View style={styles.container}>
        <TextInput
        style={{marginTop: 150, width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
        value=''
      />
        <Button
          title="Translate"
          onPress={this.translate}/>/>
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
