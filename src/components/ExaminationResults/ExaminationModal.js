import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  StyleSheet,
  Modal,
  View
} from 'react-native';
import ExaminationNavigator from './ExaminationNavigator'
import * as actions from '../../actions/ModalActions';
import { connect } from 'react-redux';

export class ExaminationModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { setModal, modal, modalType} = this.props;
    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={ modal === "BLOOD_TEST_NEW"}
        onRequestClose={() => { }}
      >
        <ExaminationNavigator setModal={ setModal } modalType={ modalType }>  </ExaminationNavigator>
      </Modal>
    );
  };
}

const styles = StyleSheet.create({
});

export default connect(state => state.modal.toJS(), actions)(ExaminationModal);
