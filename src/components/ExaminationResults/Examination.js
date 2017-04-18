
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component, PropTypes } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  DatePickerIOS,
  Heading,
  TextInput,
  Switch
} from 'react-native';

export default class Examination extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.view}>
        <ScrollView>
          <View> 
            <View style={styles.header}> 
              <Text style={styles.headerText}>Overview</Text>
            </View>
          </View>

          <View style={styles.formWrapper}>
            <Text style={styles.formLabel}>Date</Text> 
            <View style={styles.formValue}>
              <Text >Mon, 21 Jan 2017  10:20</Text> 
            </View>
          </View> 

          <View style={styles.formWrapper}> 
            <Text style={styles.formLabel} >Add to calendar</Text> 
            <View style={styles.formValue} >
              <Switch
                onValueChange={(value) =>{ }}
                style={{marginBottom: 10}}
                value={true} />
            </View>
          </View> 

          <View style={styles.formWrapper} >
            <Text  style={styles.formLabel} > Location</Text> 
            <View style={styles.formValue} >
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => { }}
                value={"None"}
              />
            </View>
          </View>  
          

         <View> 
            <View style={styles.header}> 
                <Text style={styles.headerText}>Overview</Text>
              </View>
          </View>



          <View style={styles.formWrapper}>
            <Text style={styles.formLabel}>Date</Text> 
            <View style={styles.formValue}>
              <Text >Mon, 21 Jan 2017  10:20</Text> 
            </View>
          </View> 

          <View style={styles.formWrapper}> 
            <Text style={styles.formLabel} >Add to calendar</Text> 
            <View style={styles.formValue} >
              <Switch
                onValueChange={(value) =>{ }}
                style={{marginBottom: 10}}
                value={true} />
            </View>
          </View> 

          <View style={styles.formWrapper} >
            <Text  style={styles.formLabel} > Location</Text> 
            <View style={styles.formValue} >
              <TextInput
                style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                onChangeText={(text) => { }}
                value={"None"}
              />
            </View>
          </View>  


        </ScrollView>
        <TouchableHighlight style={styles.actionBtn}>
          <View >
            <Text style={styles.actionBtnText}>
                Update
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  actionBtnText:{
    color: "#fff"
  },
  actionBtn: {
    flex: 1,
    left:0, 
    right:0,
    height: 60,
        flexDirection: "column",
    position: 'absolute', 
    bottom: 0,
    backgroundColor: '#FE2851',
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  formLabel: {
    marginLeft: 30,
  },
  formValue: {
    marginRight: 30
  },
  view: {
    flex: 1,
    marginTop: 60
  },
  formWrapper: {
    flexGrow: 1,
    flexDirection: "row",
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#C8C7CC', 
    borderStyle: 'solid'
  },
  header: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 40,
    backgroundColor: '#EFEFF4'
  }, 
  headerText: {
    marginLeft: 30
  }, 

});

