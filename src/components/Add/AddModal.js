import React, { Component, PropTypes } from 'react';
import { COMMON_STYLES } from '../../styles/global';
import {
  StyleSheet,
  Modal,
  View
} from 'react-native';
import AddList from './AddList'
import * as actions from '../../actions/ModalActions';
import { connect } from 'react-redux';

export class AddModal extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const {setModal, modal, setModalType} = this.props;

    return (
      <Modal
        animationType={"slide"}
        transparent={false}
        visible={ modal === "ADD_MODAL"}
        onRequestClose={() => { }}
      >
        <AddList setModal={ setModal } setModalType={setModalType}>  </AddList>
      </Modal>
    );
  };
}

const styles = StyleSheet.create({
});

export default connect(state => state.modal.toJS(), actions)(AddModal);
