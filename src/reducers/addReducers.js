import immutable, { fromJS, Map } from 'immutable'
import { handleActions } from 'redux-actions'
import { SHOW_ADD_MODAL } from '../actionTypes'

const initialState = fromJS({
  addModal: false
});

export default handleActions({
  [SHOW_ADD_MODAL]: (state, action) => {
    return state.set("addModal", action.value);
  }
}, initialState)