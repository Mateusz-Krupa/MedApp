import immutable, { fromJS, Map } from 'immutable'
import { handleActions } from 'redux-actions'
import { SET_MODAL, SET_MODAL_TYPE } from '../actionTypes'

const initialState = fromJS({
  modal: false,
  modalType: "none"
});

export default handleActions({
  [SET_MODAL]: (state, action) => {
    return state.set("modal", action.value);
  },
  [SET_MODAL_TYPE]: (state, action) => {
    return state.set("modalType", action.value) 
  }

}, initialState)