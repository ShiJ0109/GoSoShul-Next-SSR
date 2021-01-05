import { createReducer } from 'redux-create-reducer';

export const Actions = Object.freeze({
  FETCHDATA: 'FETCHDATA',
  RESET: 'RESET',
  ERROR: 'ERROR',
});

const initialState = {
  dashboard: null,
  tagged: null,
  donation: null,
  share: null,
  shul_list: null,
  profile: null,
  stat: null,
  error: null,
  loaded: false,
};

const fectchData = (state = initialState, action) => ({
  ...state,
  dashboard: action.dashboard,
  tagged: action.tagged,
  donation: action.donation,
  share: action.share,
  shul_list: action.shul_list,
  profile: action.profile,
  stat: action.stat,
  error: action.error,
  loaded: action.loaded,
});

const reset = (state = initialState, action) => ({
  ...state,
  [action.key]: action.value,
});

const handleError = (state = initialState, action) => ({
  ...state,
  error: action.error
});

const UserDashboardReducer = createReducer(initialState, {
  [Actions.FETCHDATA]: fectchData,
  [Actions.RESET]: reset,
  [Actions.ERROR]: handleError
});

export default UserDashboardReducer;
