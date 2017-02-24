import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import mainReducer from './reducers';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunkMiddlewaree);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(thunkMiddleware, createLogger())
  }
}


const configureStore = () => {
  return createStore(mainReducer,
    {
      mainNavigation: 'Results',
      urineReqults: {
        protein: [],
        creatine: [],
        potassium: []
      },
      resultsModalVisible: false
    },
    getMiddleware()
  );
};

export default configureStore;