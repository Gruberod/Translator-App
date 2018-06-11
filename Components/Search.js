import React, { Component } from 'react';
import { TextInput } from 'react-native';

export default class MyInput extends Component {

    render() {
        return (
            <TextInput
            style={{width: 150, height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={this.props.changeText}
            value={this.props.value}
          />
        )
    }
}