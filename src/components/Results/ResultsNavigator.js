
/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
import {COMMON_STYLES} from '../../styles/global'
import React, { Component, PropTypes } from 'react';
import Results from './Results'
import {
  Navigator,
  StyleSheet,
  Text
} from 'react-native';

export default class ResultsNavigator extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <Results></Results>
        }
        style={{ }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              { return; },
              RightButton: (route, navigator, index, navState) =>
              { return; },
              Title: (route, navigator, index, navState) =>
              { return (<Text style={COMMON_STYLES.navigatorElement}>Results</Text>); },
            }}
            style={COMMON_STYLES.navigator}
            />
        }
        />
    );
  }
}

const styles = StyleSheet.create({

});

