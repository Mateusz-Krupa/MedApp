import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../styles/global';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.bar}>
        <Text style={styles.barText} > {this.props.title} </Text>
        <Text
          style={[styles.barText, styles.link]}
          onPress={this.props.onPress}>
            {this.props.buttonText}
          </Text>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: '#fff'
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

