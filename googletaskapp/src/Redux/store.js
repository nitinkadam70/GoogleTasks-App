import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import { loginReducer } from './auth/Login/reducer';
import { signupReducer } from './auth/signup/reducer';
import { taskReducer } from './task/Get/reducer';
import { postTaskReducer } from './task/post/reducer';

const rootReducer = combineReducers({
    signup: signupReducer,
    login: loginReducer,
    task: taskReducer,
    postTask: postTaskReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk))

export const store = createStore(rootReducer, enhancer)