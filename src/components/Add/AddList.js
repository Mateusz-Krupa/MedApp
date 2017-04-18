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
  Image
} from 'react-native';

export default class AddList extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.addWrapper}>
        <View style={styles.addHeaderWrapper}>
          <Text style={styles.addHeader} >What do you want to add</Text>
        </View>
        <TouchableHighlight onPress={() => { alert("press press"); }}>
          <View style={styles.addLine}>
            <View style={styles.addIcon}>
              <Image
                source={require('../../assets/icons/Neph.png')}
              />
            </View>
            <View style={styles.addTextsWrapper}>
              <Text style={styles.addText}> Appointment </Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { alert("press press"); }}>
          <View style={styles.addLine}>
            <View style={styles.addIcon}>
              <Image
                source={require('../../assets/icons/Pressure.png')}
              />
            </View>
            <View style={styles.addTextsWrapper}>
              <Text style={styles.addText}> Blood pressure reading</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { alert("press press"); }}>
          <View style={styles.addLine}>
            <View style={styles.addIcon}>
              <Image
                source={require('../../assets/icons/Drop.png')}
              />
            </View>
            <View style={styles.addTextsWrapper}>
              <Text style={styles.addText}> Blood Test </Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { alert("press press"); }}>
          <View style={styles.addLine}>
            <View style={styles.addIcon}>
              <Image
                source={require('../../assets/icons/DropUrine.png')}
              />
            </View>
            <View style={styles.addTextsWrapper}>
              <Text style={styles.addText}> Proteine in urine</Text>
            </View>
          </View>
        </TouchableHighlight>

        <TouchableHighlight onPress={() => { this.props.onClose(false) }}>
          <View style={styles.addLine}>
            <View style={styles.addIcon}>
              <Image
                source={require('../../assets/icons/Cancel.png')}
              />
            </View>
            <View style={styles.addTextsWrapper}>
              <Text style={styles.addText}> Cancel</Text>
            </View>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  addTextsWrapper: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
    height: 80
  },
  addText: {
    fontSize: 16
  },
  addIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    width: 29,
    height: 80
  },
  addLine: {
    borderBottomColor: "#C8C7CC",
    // borderTopWidth: 1,
    borderBottomWidth: 1,
    flexGrow: 1,
    height: 80,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  addWrapper: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end'
  },
  addHeader: {
    fontSize: 19,
    fontWeight: 'bold'
  },
  addHeaderWrapper: {
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addElement: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    marginRight: 15,
    width: 29,
    height: 80
  }

});

