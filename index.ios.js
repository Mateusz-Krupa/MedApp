/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import MainNavigation from './src/components/MainNavigation/MainNavigation'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

export default class MedApp extends Component {

  render() {
    return (
      <View style={styles.container}>
        <MainNavigation></MainNavigation>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 20,
  }
});

AppRegistry.registerComponent('MedApp', () => MedApp);
