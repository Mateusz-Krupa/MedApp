
/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/
import {COMMON_STYLES} from '../../styles/global'
import React, { Component, PropTypes } from 'react';
import BloodExamination from './BloodExamination'
import UrineExamination from './UrineExamination'
import {
  Navigator,
  StyleSheet,
  Text,
} from 'react-native';

export default class ExaminationNavigator extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Examination Modal', index: 0 }}
        renderScene={(route, navigator) => {
          console.log(this.props.modalType === "BLOOD")

          if(this.props.modalType === "BLOOD"){
            return <BloodExamination setModal={ this.props.setModal } ></BloodExamination>
          }

          if(this.props.modalType === "URINE"){
            return <UrineExamination setModal={ this.props.setModal }> </UrineExamination>
          }

        }}
        style={{ }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={{
              LeftButton: (route, navigator, index, navState) =>
              { return; },
              RightButton: (route, navigator, index, navState) =>
              { return (<Text onPress={ () => this.props.setModal("NONE") }
                style={COMMON_STYLES.navigatorElement}>Cancel</Text>); 
              },
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

