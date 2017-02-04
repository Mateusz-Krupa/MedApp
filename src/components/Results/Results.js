import BarChart from '../../ui/BarChart';
import BoxLinkBar from '../../ui/BoxLinkBar';
import TopBar from '../../ui/TopBar';
import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableHighlight,
  StatusBar
} from 'react-native';

export default class Results extends Component {
  constructor(props) {
    super(props);
    this.data = [
      { frequency: 2, letter: "1" },
      { frequency: 5, letter: "2" },
      { frequency: 4, letter: "3" },
      { frequency: 1, letter: '4' },
      { frequency: 2, letter: "5" },
      { frequency: 3, letter: "6" },
      { frequency: 1, letter: "7" },
      { frequency: 2, letter: "8" },
      { frequency: 3, letter: '9' },
      { frequency: 1, letter: '10' },
      { frequency: 2, letter: '11' },
      { frequency: 3, letter: '12' }
    ]
    this.config = {
      height: 140,
      colors: {
        text: 'black',
        lineColor: '#ccc',
        bar: '#FED131',
        selected: 'red'
      }
    }
  }

  onPress(){
    alert("ble");
  }

  render() {
    return (
      <ScrollView style={COMMON_STYLES.scrollView}>
        <View style={COMMON_STYLES.pageWrapper}>
          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Protein in urine 24h (mg)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={this.data} config={this.config}></BarChart>
            </View>
            <BoxLinkBar text="See all entries" onPress={this.onPress}> </BoxLinkBar>
          </View>


          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Creatinine (ug/dl)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={this.data} config={this.config}></BarChart>
            </View>
            <BoxLinkBar text="See all entries" onPress={this.onPress}> </BoxLinkBar>
          </View>
        </View>
      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  graphBox: {
    marginTop: 10
  },
  box: {
    backgroundColor: '#fff'
  },
  buttonWrapper: {
    marginTop: 1,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  barButtonText: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    color: '#4A4A4A'
  },
  bar: {
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  barText: {
    fontSize: 16,
    padding: 20
  },

  link: {
    color: '#FE2851'
  }



});

