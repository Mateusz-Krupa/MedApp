import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ListView,
  StatusBar,
  Modal,
  Navigator,
  ScrollView
} from 'react-native';

import ResultList from './ResultList'



export default class Results extends Component {


  constructor(props) {
    super(props);
    this.config = {
      height: 140,
    }

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows([{ date: "01.05.2016", value: "124" }, { date: "02.05.2016", value: "134" }]),
    }
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.resultsModalVisible}
        onRequestClose={() => { alert("Modal has been closed.") } }
        >
        <StatusBar
          barStyle="dark-content"
          />
        <Navigator
          initialRoute={{ title: 'Modal', index: 0 }}
          renderScene={(route, navigator) =>
            <View>
              <View style={styles.legend}>
                <Text style={styles.legendText}>[mg/dl]</Text>
              </View>
              <ScrollView style={styles.viewContainer}>
                <ResultList />
              </ScrollView>
            </View>
          }
          navigationBar={
            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  return (<Text onPress={() => { this.props.setResultsModalVisible(false) } }
                    style={[COMMON_STYLES.navigatorModalElement, styles.greyNavigationButton]}>Back</Text>);
                },
                RightButton: (route, navigator, index, navState) =>
                { return; },
                Title: (route, navigator, index, navState) =>
                { return (<Text style={COMMON_STYLES.navigatorModalElement}>Results</Text>) },
              }}
              style={COMMON_STYLES.navigatorModal}
              />
          }
          />
      </Modal>
    );
  };
}


const styles = StyleSheet.create({
  legend: {
    backgroundColor: '#EFEFF4',
    marginTop: 64,
    height: 50,
  },
  legendText: {
    color: '#A4AAB3',
    textAlign: 'right',
    margin: 20
  },
  viewContainer: {
    backgroundColor: '#EFEFF4',
  },
  greyNavigationButton: {
    fontSize: 16,
    color: '#FE2851'

  }
});
