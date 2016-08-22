import { combineReducers } from 'redux';

import toDoReducer from './toDoReducer'
import userReducer from './usersReducer'

export default combineReducers({
    userReducer,
    toDoReducer
})
