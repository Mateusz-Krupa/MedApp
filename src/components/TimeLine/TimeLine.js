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
  View,
  ScrollView
} from 'react-native';

export default class TimeLine extends Component {

  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ScrollView style={styles.content} scrollEventThrottle={16} onScroll={(event) => { console.log(event.nativeEvent.contentOffset.y)}}>
        <Text>Status</Text>
        <Text>Status</Text>
        <Text>Status</Text>
        <Text>Status</Text>
        <Text>Status</Text>
        <Text>Status</Text>
        <Text>Status</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

});

