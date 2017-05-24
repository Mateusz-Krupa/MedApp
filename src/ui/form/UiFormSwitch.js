import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global'
import {
  StyleSheet,
  Text,
  View,
  Switch
} from 'react-native';

export default class UiFormSwitch extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.formWrapper}> 
        <Text style={styles.formLabel} >{this.props.label}</Text> 
        <View style={styles.formValue} >
          <Switch
            onValueChange={(value) => { this.props.onChange(value)}}
            style={{marginBottom: 10}}
            value={this.props.value}></Switch>
        </View>
      </View> 
    );
  }
}

const styles = StyleSheet.create({
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

