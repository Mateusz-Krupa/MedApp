import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global'
import {
  StyleSheet,
  Text,
  View,
  TextInput
} from 'react-native';

export default class UiFormInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.formWrapper} >
        <Text  style={styles.formLabel} >{this.props.label}</Text> 
        <View style={styles.formValue} >
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {this.props.updateText(text)}}
            value={this.props.value}
          />
        </View>
      </View>  
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: 150,
    textAlign: "right"
  },
  formLabel: {
    marginLeft: 30,
  },
  formValue: {
    marginRight: 30
  },
  formWrapper: {
    flexGrow: 1,
    flexDirection: "row",
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC', 
    borderStyle: 'solid'
  }
});

