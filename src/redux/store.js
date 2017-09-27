import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import client from './client';

import userReducer from './reducers/userReducer';
import drawerReducer from './reducers/drawerReducer';


const reducers = combineReducers({
    apollo: client.reducer(),
    drawer:drawerReducer,
    user:userReducer
  });

const enhancers = compose(
  applyMiddleware(ReduxThunk),
  applyMiddleware(client.middleware()),
);

export default () => createStore(reducers, {}, enhancers);
