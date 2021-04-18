import { combineReducers } from 'redux';
import { postReducer } from './postReducer';

const reducer = combineReducers({ post: postReducer });

export default reducer;
