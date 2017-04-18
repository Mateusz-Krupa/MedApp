
/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
import {COMMON_STYLES} from '../../styles/global'
import React, { Component, PropTypes } from 'react';
import Examination from './Examination'
import {
  Navigator,
  StyleSheet,
  Text,
} from 'react-native';

export default class ExaminationNavigator extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <Examination></Examination>
        }
        style={{ }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              { return; },
              RightButton: (route, navigator, index, navState) =>
              { return (<Text style={COMMON_STYLES.navigatorElement}>Cancel</Text>); },
              Title: (route, navigator, index, navState) =>
              { return (<Text style={COMMON_STYLES.navigatorElement}>New Blood Test</Text>); },
            }}
            style={COMMON_STYLES.navigatorModal}
            />
        }
        />
    );
  }
}

const styles = StyleSheet.create({

});

