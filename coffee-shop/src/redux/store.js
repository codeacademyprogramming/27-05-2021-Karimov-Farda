import {applyMiddleware, combineReducers, createStore} from 'redux'
import { coffeeReducer } from '../modules/coffee-order/reducer'
import thunk from 'redux-thunk'
const rootReducer = combineReducers({coffee : coffeeReducer})

const middleware = [thunk,
]
export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())