import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { blockReducer } from './reducers/BlockReducer';

const rootReducer = combineReducers({
  block: blockReducer
});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

export const dispatch = (action) => store.dispatch(action);