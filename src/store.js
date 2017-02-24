import { createStore, combineReducers,
 applyMiddleware, bindActionCreators } from 'redux'
// import reduxPromise from 'redux-promise';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import resultsReducers from './reducers/resultsReducers';
import navigationReducers from './reducers/navigationReducers';

const getMiddleware = () => {
  if (process.env.NODE_ENV === 'production') {
    return applyMiddleware(thunkMiddlewaree);
  } else {
    // Enable additional logging in non-production environments.
    return applyMiddleware(thunkMiddleware, createLogger())
  }
}


const reducers = combineReducers({
  navigation: navigationReducers
})

const configureStore = () => {
  return createStore(reducers,
    {
      
    },
    getMiddleware()
  );
};

export default configureStore;