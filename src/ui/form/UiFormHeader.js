import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class UiFormHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View> 
        <View style={styles.header}> 
            <Text style={styles.headerText}>{this.props.label}</Text>
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({ 
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

