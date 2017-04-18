import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  StyleSheet,
  Modal,
  View
} from 'react-native';
import ExaminationNavigator from './ExaminationNavigator'
import * as actions from '../../actions/AddActions';
import { connect } from 'react-redux';

export class ExaminationModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {showAddModalAction, addModal} = this.props;
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={ true }
        onRequestClose={() => { }}
      >
        <ExaminationNavigator>  </ExaminationNavigator>
      </Modal>
    );
  };
}

const styles = StyleSheet.create({
});

export default connect(state => state.add.toJS(), actions)(ExaminationModal);
