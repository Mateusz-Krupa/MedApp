/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import Status from '../Status/Status';
import TimeLine from '../TimeLine/TimeLine';
import ResultsNavigator from '../Results/ResultsNavigator';
import Knowledge from '../Knowledge/Knowledge';
import More from '../More/More';

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
    this.state = {
      selectedTab: 'Results'
    }
  }

  render() {
    return (
      <TabBarIOS
        tintColor={styles.navigationButtonText.color}
        barTintColor={styles.navigation.backgroundColor}>
        <TabBarIOS.Item
          title="Status"
          icon={require('./icons/Status.png')}
          selected={this.state.selectedTab === 'Status'}
          onPress={() => {
            this.setState({
              selectedTab: 'Status',
            });
          } } >
          <Status></Status>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Timeline"
          icon={require('./icons/Timeline.png')}
          selected={this.state.selectedTab === 'Timeline'}
          onPress={() => {
            this.setState({
              selectedTab: 'Timeline',
            });
          } } >
          <TimeLine></TimeLine>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Results"
          icon={require('./icons/Results.png')}
          selected={this.state.selectedTab === 'Results'}
          onPress={() => {
            this.setState({
              selectedTab: 'Results',
            });
          } } >
          <ResultsNavigator></ResultsNavigator>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="Knowledge"
          icon={require('./icons/Knowledge.png')}
          selected={this.state.selectedTab === 'Knowledge'}
          onPress={() => {
            this.setState({
              selectedTab: 'Knowledge',
            });
          } } >
          <Knowledge></Knowledge>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="More"
          icon={require('./icons/More.png')}
          selected={this.state.selectedTab === 'More'}
          onPress={() => {
            this.setState({
              selectedTab: 'More',
            });
          } } >
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
