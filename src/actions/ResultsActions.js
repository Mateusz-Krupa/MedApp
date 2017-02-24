import * as actionTypes from '../actionTypes'

export const reciveUrineResults = (results) => ({
  type: actionTypes.RECIVE_URINE_RESULTS,
  value: results
});

export const showResultsModal = (results) => ({
  type: actionTypes.SHOW_RESULTS_MODAL,
  value: results
});
