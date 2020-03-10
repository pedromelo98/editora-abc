import { createStore, applyMiddleware, combineReducers } from 'redux'
import ReduxThunk from 'redux-thunk'
import AuthReducer from './reducers/AuthReducer'
import AlertReducer from './reducers/AlertReducer'


const reducers = combineReducers({
    AuthReducer,
    AlertReducer
})

const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);

export default store