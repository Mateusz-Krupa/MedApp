import BarChart from '../../ui/BarChart';
import BoxLinkBar from '../../ui/BoxLinkBar';
import TopBar from '../../ui/TopBar';
import ResultsModal from './ResultsModal';
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
  StatusBar,
  Modal
} from 'react-native';
import * as actions from '../../actions/ResultsActions';
import configureStore from '../../store';

export default class Results extends Component {


  constructor(props) {
    super(props);
    this.config = {
      height: 140,
    }

    this.setResultsModalVisible = (visible) => {
      this.setState({ resultsModalVisible: visible });
    };

    this.store = configureStore();
    this.state = this.store.getState();
    this.getData();
  }

  getData(){
    let promise = fetch("http://localhost:3000/survey")
    .then(res => res.json())
      .then((data) => {
        let protein = data.urine.map(item => { return { value: item.protein, label: item.label } });
        let creatine = data.urine.map(item => { return { value: item.creatine, label: item.label } });
        let potassium = data.urine.map(item => { return { value: item.potassium, label: item.label} });
        let value = {
          protein: protein,
          creatine: creatine,
          potassium: potassium
        }
        this.store.dispatch(actions.reciveUrineResults(value));
      });
  }

  componentDidMount() {
    this.ubsubscribe = this.store.subscribe(() => {
      this.setState(this.store.getState());
    })
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  onPress() {
    alert("ble");
  }

  render() {
    return (
      <ScrollView style={COMMON_STYLES.scrollView}>
        <View style={COMMON_STYLES.pageWrapper}>
          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Protein in urine 24h (mg)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={this.state.urineReqults.protein} config={this.config}></BarChart>
            </View>
            <BoxLinkBar text="See all entries"
              onPress={() => {
                 this.store.dispatch(actions.showResultsModal(true))
              }}
            > </BoxLinkBar>
          </View>

          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Creatinine (ug/dl)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={this.state.urineReqults.creatine} config={this.config} bar="#EF3835"></BarChart>
            </View>
            <BoxLinkBar text="See all entries" onPress={() => {
              this.store.dispatch(actions.showResultsModal(true))
            }}
            > </BoxLinkBar>
          </View>

          <View style={styles.graphBox}>
            <TopBar onPress={this.onPress} buttonText="More" title="Potassium (ug/dl)"></TopBar>
            <View style={COMMON_STYLES.box}>
              <BarChart data={this.state.urineReqults.potassium} config={this.config}></BarChart>
            </View>
            <BoxLinkBar text="See all entries" onPress={() => {
              this.store.dispatch(actions.showResultsModal(true))
            }}
            ></BoxLinkBar>
          </View>
        </View>
        <ResultsModal resultsModalVisible={this.state.resultsModalVisible} setResultsModalVisible={this.setResultsModalVisible} />
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
    color: '#FE2851',
  }
});

