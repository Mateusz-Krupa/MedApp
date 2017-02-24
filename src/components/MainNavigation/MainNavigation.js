/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import Status from '../Status/Status';
import TimeLineNavigator from '../TimeLine/TimeLineNavigator';
import ResultsNavigator from '../Results/ResultsNavigator';
import Knowledge from '../Knowledge/Knowledge';
import More from '../More/More';
import configureStore from '../../store';
import * as actions from '../../actions';


import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

export default class MainNavigation extends Component {


  constructor(props) {
    super(props);
    this.store = configureStore();
    this.state = this.store.getState();
  }

  componentDidMount() {
    this.ubsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  setNavigation(value) {
    this.store.dispatch(actions.mainNavigationAction(value));
  }

  render() {
    return (
      <TabBarIOS
        tintColor={styles.navigationButtonText.color}
        barTintColor={styles.navigation.backgroundColor}>
        <TabBarIOS.Item
          title="Status"
          icon={require('./icons/Status.png')}
          selected={this.state.mainNavigation === 'Status'}
          onPress={() => {
            this.setNavigation('Status');
          }} >
          <Status></Status>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Timeline"
          icon={require('./icons/Timeline.png')}
          selected={this.state.mainNavigation === 'Timeline'}
          onPress={() => {
            this.setNavigation('Timeline');
          }} >
          <TimeLineNavigator></TimeLineNavigator>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Results"
          icon={require('./icons/Results.png')}
          selected={this.state.mainNavigation === 'Results'}
          onPress={() => {
            this.setNavigation('Results');
          }}>
          <ResultsNavigator></ResultsNavigator>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Knowledge"
          icon={require('./icons/Knowledge.png')}
          selected={this.state.mainNavigation === 'Knowledge'}
          onPress={() => {
            this.setNavigation('Knowledge');
          }}>
          <Knowledge></Knowledge>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="More"
          icon={require('./icons/More.png')}
          selected={this.state.mainNavigation === 'More'}
          onPress={() => {
            this.setNavigation('More');
          }}>
          <More></More>
        </TabBarIOS.Item>


      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  navigation: {
    shadowColor: '#B2B2B2',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    backgroundColor: 'rgba(250,250,250,0.9)',
    height: 50
  },
  navigationWrapper: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: "row",
  },
  navigationButton: {
    flex: 1,
    alignSelf: 'stretch',
    alignItems: 'stretch'
  },
  navigationButtonText: {
    fontSize: 10,
    textAlign: 'center',
    color: '#929292'
  }
});
