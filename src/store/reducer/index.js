import { combineReducers } from 'redux'
import profile from './profile';
import app from './app';

const rootReducer = combineReducers({
    profile,
    app
  })
  
  export default rootReducer

