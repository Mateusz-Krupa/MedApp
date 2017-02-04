import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../styles/global'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class BoxLinkBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={COMMON_STYLES.box} style={styles.buttonWrapper}>
        <Text style={styles.barButtonText}
          onPress={this.props.onPress}
          > {this.props.text} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
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
  }

});

