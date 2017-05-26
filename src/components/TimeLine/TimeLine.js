/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import AddModal from '../Add/AddModal';
import ExaminationModal from '../ExaminationResults/ExaminationModal'
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import * as actions from '../../actions/ModalActions';
import { connect } from 'react-redux';

export class TimeLine extends Component {


  constructor(props) {
    super(props);
  }

  render() {
    const {setModal, setModalType} = this.props;
    return (
      <View style={styles.timeLineContainer}>
        <ScrollView stye={styles.timeLine}>
          <View style={styles.timeLineHeader}>
            <Text>WENESDAY, DEC, 12, 2016</Text>
          </View>
          <View style={styles.timeLineWrapper}>
            <View style={styles.timeLineResults}>
              {/*HEADER */}
              <View style={styles.timeLineBar}></View>
              <View style={styles.timeLineIcon}>
                <Image
                  source={require('../../assets/icons/DropUrine.png')}
                />
              </View>
              <View style={styles.timeLineText}>
                <Text style={styles.timeLineTextHeader}> Protein in urine 24h</Text>
                <Text style={styles.timeLineTextDetails}> 10:00, Lux Med </Text>
              </View>
              <View style={styles.timeLineActions}>
                {/*<Text style={styles.timeLineActionsText}> ADD RESULTS </Text>*/}
              </View>
            </View>

            <View style={styles.timeLineResults}>
              {/*HEADER */}
              <View style={[styles.timeLineBar, styles.timeLineBarRed]}></View>
              <View style={styles.timeLineIcon}>
                <Image
                  source={require('../../assets/icons/Drop.png')}
                />
              </View>
              <View style={styles.timeLineText}>
                <Text style={styles.timeLineTextHeader}> Protein in urine 24h</Text>
                <Text style={styles.timeLineTextDetails}> 10:00, Lux Med </Text>
              </View>
              <View style={styles.timeLineActions}>
                <TouchableHighlight onPress={() => {
                      this.props.setModal("BLOOD_TEST_NEW")
                      this.props.setModalType("BLOOD");
                  }}>
                  <Text style={styles.timeLineActionsText}> ADD RESULTS </Text>
                </TouchableHighlight>
              </View>
            </View>

          </View>

          <View style={styles.timeLineHeader}>
            <Text>WENESDAY, DEC, 12, 2016</Text>
          </View>
          <View style={styles.timeLineWrapper}>

            <View style={styles.timeLineResults}>
              {/*HEADER */}
              <View style={[styles.timeLineBar, styles.timeLineBarRed]}>
              </View>
              <View style={styles.timeLineIcon}>
                <Image
                  source={require('../../assets/icons/Drop.png')}
                />
              </View>
              <View style={styles.timeLineText}>
                <Text style={styles.timeLineTextHeader}> Protein in urine 24h</Text>
                <Text style={styles.timeLineTextDetails}> 10:00, Lux Med </Text>
              </View>
              <View style={styles.timeLineActions}>
                {/*<Text style={styles.timeLineActionsText}> ADD RESULTS </Text>*/}
              </View>
            </View>
          </View>
        </ScrollView>
        <TouchableHighlight style={styles.addNewButton} onPress={() => { setModal("ADD_MODAL") }}>
          <Image
            source={require('../../assets/icons/add.png')}
          />
        </TouchableHighlight>
        <AddModal></AddModal>
        <ExaminationModal></ExaminationModal>
      </View>

    );
  }
}

export default connect(state => state.add.toJS(), actions)(TimeLine);

const styles = StyleSheet.create({
  timeLineContainer: {
    flex: 1
  },
  addNewButton: {
    height: 80,
    width: 80,
    position: 'absolute',
    bottom: 50,
    right: 10
  },
  timeLine: {
    // flex: 1,
    marginTop: 60

  },
  timeLineWrapper: {
    flexGrow: 1,
    flexDirection: 'column',
  },
  timeLineHeader: {
    backgroundColor: "#F2F2F2",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 18,
    paddingRight: 18
  },
  timeLineTextHeader: {
    fontSize: 17
  },
  timeLineTextDetails: {
    fontSize: 12,
    color: "#8F8E94"
  },
  timeLineResults: {
    backgroundColor: '#fff',
    flexGrow: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  timeLineBarRed: {
    backgroundColor: '#EF3835'
  },
  timeLineBar: {
    width: 5,
    height: 80,
    backgroundColor: "#FED131"
  },
  timeLineIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    width: 29,
    height: 80
  },
  timeLineText: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    height: 80
  },
  timeLineActions: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 80,
    marginRight: 15,

  },
  timeLineActionsText: {
    textAlign: "center",
    color: '#9B9B9B',
    fontSize: 11,
  }
});

