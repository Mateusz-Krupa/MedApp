import * as actionTypes from './actionTypes'


import Immutable, { Map } from 'immutable'


// // const initialState = Immutable.fromJS(
// //   {
// //     mainNavigation: 'Results',
// //     urineReqults: {
// //       protein: [],
// //       creatine: [],
// //       potassium: []
// //     },
// //     resultsModalVisible: false
// //   }
// )



const mainReducer = (state, action) => {
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

export default mainReducer;

