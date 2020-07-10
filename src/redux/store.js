import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import profileReducer from './profile-reducer'
import thunkMiddleware from 'redux-thunk';
import authReducer from './auth';

let reducers = combineReducers({
    profilePage: profileReducer,
    auth: authReducer,
    form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store