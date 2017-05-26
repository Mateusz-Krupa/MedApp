import * as actionTypes from '../actionTypes'

export const setModal = (value) => ({
  type: actionTypes.SET_MODAL,
  value: value
});

export const setModalType = (value) => ({
  type: actionTypes.SET_MODAL_TYPE,
  value: value
});