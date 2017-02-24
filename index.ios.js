/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import MainNavigation from './src/components/MainNavigation/MainNavigation';
import configureStore from './src/store';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import {Provider} from 'react-redux';

export default class MedApp extends Component {

  constructor(){
    super();
    this.store = configureStore();
  } 

  render() {
    return (
      <Provider store={this.store}>
        <View style={styles.container}>
          <MainNavigation></MainNavigation>
        </View>
      </Provider>
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
