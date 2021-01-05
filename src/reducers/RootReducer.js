import { combineReducers } from 'redux';
import UserReducer from './UserReducer';
import ShulUserReducer from './ShulUserReducer';
import ShulDashboardReducer from './ShulDashboardReducer';
import UserDashboardReducer from './UserDashboardReducer';

const AppReducer = combineReducers({
  UserReducer,
  ShulUserReducer,
  ShulDashboardReducer,
  UserDashboardReducer,
});

const RootReducer = (state, action) => {
  if (action.type === 'LOGOUT') {
    localStorage.setItem('session', null);
    return AppReducer(undefined, action);
  }
  return AppReducer(state, action);
};

export default RootReducer;
