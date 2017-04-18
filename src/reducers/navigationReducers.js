import immutable, { fromJS, Map } from 'immutable'
import { handleActions } from 'redux-actions'
import { MAIN_NAVIGATION_ACTION } from '../actionTypes'

const initialState = fromJS({
  mainNavigation: "Timeline"
});

export default handleActions({
  [MAIN_NAVIGATION_ACTION]: (state, action) => {
    return state.set("mainNavigation", action.value);
  }
}, initialState)