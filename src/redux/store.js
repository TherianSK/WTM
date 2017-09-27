import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';

import loginReducer from './reducers/loginReducer';
import drawerReducer from './reducers/drawerReducer';
import taskReducer from './reducers/taskReducer';

const reducers = combineReducers({
    login:loginReducer,
    drawer:drawerReducer,
    taskData:taskReducer,
  });

const enhancers = compose(
  applyMiddleware(ReduxThunk),
);

export default () => createStore(reducers, {}, enhancers);
