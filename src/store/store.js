import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import CookieClient from 'lib/CookieClient';
import RootReducer from 'reducers/RootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const persistedState = CookieClient.loadState();
const store = createStore(RootReducer, persistedState, composeWithDevTools(applyMiddleware(thunk)));

store.subscribe(() => {
  CookieClient.saveState({ UserReducer: store.getState().UserReducer });
  // CookieClient.saveState({ ShulUserReducer: store.getState().ShulUserReducer });
});

export default store;
