import { createStore, combineReducers,
 applyMiddleware, bindActionCreators } from 'redux'
// import reduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import resultsReducers from './reducers/resultsReducers';
import navigationReducers from './reducers/navigationReducers';
import addReducers from './reducers/addReducers';
import modalReducers from './reducers/modalReducers'

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunkMiddlewaree);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(thunkMiddleware, createLogger())
  }
}


const reducers = combineReducers({
  navigation: navigationReducers,
  results: resultsReducers, 
  add: addReducers,
  modal: modalReducers
})

const configureStore = () => {
  return createStore(reducers,
    {
      
    },
    getMiddleware()
  );
};

export default configureStore;