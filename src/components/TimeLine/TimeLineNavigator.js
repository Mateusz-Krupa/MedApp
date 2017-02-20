
import { COMMON_STYLES } from '../../styles/global';
import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Navigator
} from 'react-native';
import {TimeLine} from './TimeLine'


export default class TimeLineNavigator extends Component {

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Awesome Scene', index: 0 }}
        renderScene={(route, navigator) =>
             <View><TimeLine /></View>
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
              { return (<Text style={COMMON_STYLES.navigatorElement}>TimeLine</Text>); },
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
