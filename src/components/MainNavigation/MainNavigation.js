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
import * as actions from '../../actions/NavigationActions';

import { connect } from 'react-redux';


import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TabBarIOS
} from 'react-native';

export class MainNavigation extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {mainNavigationAction, mainNavigation} = this.props;
    
    return (
      <TabBarIOS
        tintColor={styles.navigationButtonText.color}
        barTintColor={styles.navigation.backgroundColor}>
        <TabBarIOS.Item
          title="Status"
          icon={require('./icons/Status.png')}
          selected={mainNavigation === 'Status'}
          onPress={() => {
            mainNavigationAction('Status');
          }} >
          <Status></Status>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Timeline"
          icon={require('./icons/Timeline.png')}
          selected={mainNavigation === 'Timeline'}
          onPress={() => {
            mainNavigationAction('Timeline');
          }} >
          <TimeLineNavigator></TimeLineNavigator>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Results"
          icon={require('./icons/Results.png')}
          selected={mainNavigation === 'Results'}
          onPress={() => {
            mainNavigationAction('Results');
          }}>
          <ResultsNavigator></ResultsNavigator>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Knowledge"
          icon={require('./icons/Knowledge.png')}
          selected={mainNavigation === 'Knowledge'}
          onPress={() => {
            mainNavigationAction('Knowledge');
          }}>
          <Knowledge></Knowledge>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="More"
          icon={require('./icons/More.png')}
          selected={mainNavigation === 'More'}
          onPress={() => {
            mainNavigationAction('More');
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

console.log(actions);
export default connect(state => state.navigation.toJS(), actions)(MainNavigation);