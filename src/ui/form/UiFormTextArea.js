import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class UiFormTextArea extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={styles.fullInput}
        onChangeText={(text) => {this.props.updateText(text)}}
        value={this.props.value}
        multiline={true}
      />
    );
  }
}

const styles = StyleSheet.create({
   fullInput: {
    height: 200,
    paddingTop: 10,
    paddingRight: 30,
    paddingLeft: 30
   }
});

