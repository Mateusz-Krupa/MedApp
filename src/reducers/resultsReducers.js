import * as actionTypes from '../actionTypes'


const resultsReducers = (state, action) => {
  switch (action.type) {
    case actionTypes.MAIN_NAVIGATION_ACTION:
      return {
        ...state,
        mainNavigation: action.value
      }
    case actionTypes.RECIVE_URINE_RESULTS: {
      return {
        ...state,
        urineReqults: action.value
      }
    }
    case actionTypes.SHOW_RESULTS_MODAL:
      return {
        ...state,
        resultsModalVisible: action.value
      }
    default: {
      return state;
    }
  }
}

export default resultsReducers;

