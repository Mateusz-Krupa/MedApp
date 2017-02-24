export const MAIN_NAVIGATION_ACTION = "MAIN_NAVIGATION_ACTION";
export const RECIVE_URINE_RESULTS = "RECIVE_URINE_RESULTS";
export const SHOW_RESULTS_MODAL = "SHOW_RESULTS_MODAL";

const mainReducer = (state, action) => {
  console.log(state, action);
  switch(action.type){
    case MAIN_NAVIGATION_ACTION: 
      return {
        ...state,
        mainNavigation: action.value
      }
    case RECIVE_URINE_RESULTS: {
      return {
        ...state,
        urineReqults: action.value
      }  
    }
    case SHOW_RESULTS_MODAL: 
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