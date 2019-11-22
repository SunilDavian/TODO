import {combineReducers} from 'redux'
import todo from './todo/reducer';
import bucket from './bucket/reducer';


export default combineReducers({ todo, bucket});
