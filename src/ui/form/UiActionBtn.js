import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global'
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export default class UiActionBtn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <TouchableHighlight style={styles.actionBtn}  onPress={this.props.onPressAction}>  
          <View >
            <Text style={styles.actionBtnText}>
                {this.props.label}}
            </Text>
          </View>
        </TouchableHighlight>
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
    alignItems: 'center' 
  }
});

