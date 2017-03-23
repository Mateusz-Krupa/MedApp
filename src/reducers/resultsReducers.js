import immutable, { fromJS, Map } from 'immutable'
import { RECIVE_URINE_RESULTS, SHOW_RESULTS_MODAL, RESULTS_DETAILS_NAME, RESULTS_DETAILS_DATA } from '../actionTypes'
import { handleActions } from 'redux-actions'

const initialState = fromJS({
  resultsModalVisible: false,
  urineReqults: {
    creatine: [],
    protein: [],
    potassium: []
  },
  resultsDetailsName: "Protein",
  resultsDetailsData: []
});

export default handleActions({
  [SHOW_RESULTS_MODAL]: (state, action) => {
    return state.set("resultsModalVisible", action.value);
  },
  [RECIVE_URINE_RESULTS]: (state, action) => {
    return state.set("urineReqults", action.value);
  },
  [RESULTS_DETAILS_DATA]: (state, action) => {
    return state.set("resultsDetailsData", action.value);
  },
  [RESULTS_DETAILS_NAME]: (state, action) => {
    return state.set("resultsDetailsName", action.value);
  }
}, initialState)
