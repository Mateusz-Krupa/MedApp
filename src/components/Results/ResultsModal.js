import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  Button,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Modal,
  Navigator,
  ScrollView
} from 'react-native';
import ResultList from './ResultList'
import * as actions from '../../actions/ResultsActions';
import { connect } from 'react-redux';


export default class ResultsModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={this.props.resultsModalVisible}
        onRequestClose={() => { alert("Modal has been closed.") }}
      >
        <StatusBar
          barStyle="dark-content"
        />
        <Navigator
          initialRoute={{ title: 'Modal', index: 0 }}
          style={styles.viewContainer}
          renderScene={(route, navigator) =>
            <View style={styles.viewContainer}>
              <View style={styles.legend}>
                <Text style={styles.legendText}>{this.props.unit}</Text>
              </View>
              <ScrollView>
                <ResultList data={this.props.data} />
              </ScrollView>
            </View>
          }
          navigationBar={

            <Navigator.NavigationBar
              routeMapper={{
                LeftButton: (route, navigator, index, navState) => {
                  return (<Text onPress={() => { this.props.setResultsModalVisible(false) }}
                    style={[COMMON_STYLES.navigatorModalElement, styles.greyNavigationButton]}>Back</Text>);
                },
                RightButton: (route, navigator, index, navState) =>
                { return; },
                Title: (route, navigator, index, navState) =>
                { return (<Text style={COMMON_STYLES.navigatorModalElement}> {this.props.title} </Text>) },
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
