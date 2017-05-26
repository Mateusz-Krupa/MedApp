import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';


export default class TimeLineHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.timeLineHeader}>
        <Text>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  timeLineHeader: {
    backgroundColor: "#F2F2F2",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 18,
    paddingRight: 18
  }
});

