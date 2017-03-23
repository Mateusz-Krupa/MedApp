import BarChart from '../../ui/BarChart';
import BoxLinkBar from '../../ui/BoxLinkBar';
import TopBar from '../../ui/TopBar';
import ResultsModal from './ResultsModal';
import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  Button,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Modal
} from 'react-native';

import * as actions from '../../actions/ResultsActions';
import { connect } from 'react-redux';


export class Results extends Component {

  constructor(props) {
    super(props);
    this.config = {
      height: 140,
    }
    this.getSurveyData();
  }


  getSurveyDetailsData(filtered) {
    //  this should be different end point that will recive all reults from the API 
    let promise = fetch("http://localhost:3000/survey")
      .then(res => res.json())
      .then((data) => {
        let modalResultsData = data.urine.map((item) => {
          console.log(item);
          return {
            date: new Date(item.date).toString('yyyy-MM-dd'),
            value: item[filtered]
          }
        });
        this.props.setResultsDetailsData(modalResultsData);
        this.props.setResultsDetailsName(filtered);
      })
  }

  getSurveyData() {
    let promise = fetch("http://localhost:3000/survey")
      .then(res => res.json())
      .then((data) => {
        let protein = []; 
        let creatine = [];
        let potassium = [];
        
        data.urine.forEach(
          item => {
              let itemDate = new Date(item.date); 
              let itemDayAndMonth = itemDate.getDay() + "." + itemDate.getMonth(); 
              protein.push({
                value: item.protein,
                label: itemDayAndMonth
              });
              creatine.push({
                value: item.creatine, 
                label: itemDayAndMonth
              });
              potassium.push({
                value: item.potassium, 
                label: itemDayAndMonth
              });
          }
        );
        let value = {
          protein: protein,
          creatine: creatine,
          potassium: potassium
        }
        this.props.reciveUrineResults(value);
      });
  }

  onPress() {
    alert("ble");
  }

  render() {
    const {urineReqults, resultsModalVisible, showResultsModal, resultsDetailsData, resultsDetailsName, resultsDetailsUnit} = this.props;
    return (
      <ScrollView style={COMMON_STYLES.scrollView}>
        <View style={COMMON_STYLES.pageWrapper}>
          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Protein in urine 24h (mg)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={urineReqults.protein} config={this.config}></BarChart>
            </View>
            <BoxLinkBar text="See all entries"
              onPress={() => {
                this.getSurveyDetailsData("protein");
                showResultsModal(true)
              }}
            > </BoxLinkBar>
          </View>

          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Creatinine (ug/dl)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={urineReqults.creatine} config={this.config} bar="#EF3835"></BarChart>
            </View>
            <BoxLinkBar text="See all entries" onPress={() => {
              showResultsModal(true)
            }}
            > </BoxLinkBar>
          </View>

          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Potassium (ug/dl)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={urineReqults.potassium} config={this.config}></BarChart>
            </View>
            <BoxLinkBar text="See all entries" onPress={() => {
              showResultsModal(true)
            }}
            ></BoxLinkBar>
          </View>
        </View>
        <ResultsModal resultsModalVisible={resultsModalVisible} setResultsModalVisible={showResultsModal} data={resultsDetailsData}
          title={resultsDetailsName} unit={ "[mg/dl]" } 
        />
      </ScrollView>

    );
  }
}
export default connect(state => state.results.toJS(), actions)(Results);

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
    color: '#FE2851',
  }
});

