// import * as actionTypes from '../actionTypes'

// const navigationReducers = (state, action) => {
//   switch (action.type) {
//     case actionTypes.MAIN_NAVIGATION_ACTION:
//       return {
//         ...state,
//         mainNavigation: action.value
//       }
// }
// }

// export default navigationReducers;
// ============

import immutable, {Map} from 'imutable'
import { handleActions } from 'redux-actions'
import {MAIN_NAVIGATION_ACTION}from '../actionTypes'

const initialState = {
  mainNavigation: "Status"
}

//you can do better here, I was just showing that you need to make a new copy
//of state. It is ok to deep copy of state. It will prevent unseen bugs in the future
//for better performance you can use immutableJS

//handleActions is a helper function to instead of using a switch case statement,
//we just use the regular map with function state attach to it.

export default handleActions({
  [MAIN_NAVIGATION_ACTION]: (state, action) => {
    return {
       ...state,
      mainNavigation: action.value
    }
  }
}, initialState)