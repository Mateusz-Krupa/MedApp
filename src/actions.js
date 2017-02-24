import * as actionTypes from './actionTypes'

export const mainNavigationAction = (value) => ({
    type: actionTypes.MAIN_NAVIGATION_ACTION,
    value: value
});

export const reciveUrineResults = (results) => ({
  type: actionTypes.RECIVE_URINE_RESULTS,
  value: results
});

export const showResultsModal = (results) => ({
  type: actionTypes.SHOW_RESULTS_MODAL,
  value: results
});
