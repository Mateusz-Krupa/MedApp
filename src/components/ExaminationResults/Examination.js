
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  DatePickerIOS,
  Heading,
  TextInput,
  Switch
} from 'react-native';
import UiFormDate from '../../ui/form/UiFormDate'
import UiFormSwitch from '../../ui/form/UiFormSwitch'
import UiFormInput from '../../ui/form/UiFormInput'
import UiFormHeader from '../../ui/form/UiFormHeader'
import UiFormTextArea from '../../ui/form/UiFormTextArea'
import UiActionBtn from '../../ui/form/UiActionBtn'



export default class Examination extends Component {

  constructor(props) {
    super(props);
    this.state = {
     addToCalendar: true
    }
     this.handleSwitchChange = this.handleSwitchChange.bind(this);
  }
  

  handleSwitchChange(value){
    this.setState({ addToCalendar: value });
  }

  render() {
    return (
      <View style={styles.view}>
        <ScrollView>
          <UiFormHeader label="Overview"></UiFormHeader>
          <UiFormDate label={"Date"} value={"Mon, 22 Jan 2017 10:20"}></UiFormDate>
          <UiFormInput label={"Location"} value={"None"}></UiFormInput>
          <UiFormSwitch label={"Add to calendar"} value={this.state.addToCalendar} 
            onChange={ this.handleSwitchChange } ></UiFormSwitch>   
          <UiFormHeader label="Results"></UiFormHeader>
          <UiFormInput label={"Creatine"} value={"mg/dl"}></UiFormInput>
          <UiFormInput label={"Potassium"} value={"mg/dl"}></UiFormInput>
          <UiFormInput label={"Sodium"} value={"mg/dl"}></UiFormInput>
          <UiFormHeader label="Notes"></UiFormHeader>
          <UiFormTextArea value="write"></UiFormTextArea>
        </ScrollView>
        <UiActionBtn label="update" onPressAction={() => alert("updated")} ></UiActionBtn>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 60
  }
});

