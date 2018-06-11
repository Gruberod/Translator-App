import React, { Component } from 'react';
import { Button } from 'react-native';

export default class MyButton extends Component {
    render() {
        return (
        <Button
          title="Get quote"
          onPress={this.props.getQuote}/>
        )
    }
}