import { applyMiddleware, combineReducers, createStore } from 'redux';
import favReducer from './reducers/favReducer';
import cartReducer from './reducers/cartReducer';
import loggerMiddleware from './middleware/loggerMiddleware';

const rootReducer = combineReducers({
    favReducer,
    cartReducer
  });
const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

export default store;
