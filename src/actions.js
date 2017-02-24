import {MAIN_NAVIGATION_ACTION, RECIVE_URINE_RESULTS} from './reducers';
export const mainNavigationAction = (value) => ({
    type: MAIN_NAVIGATION_ACTION,
    value: value
});

export const reciveUrineResults = (results) => ({
  type: "RECIVE_URINE_RESULTS",
  value: results
});

export const showResultsModal = (results) => ({
  type: "SHOW_RESULTS_MODAL",
  value: results
});
