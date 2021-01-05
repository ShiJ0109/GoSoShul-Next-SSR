import { createReducer } from 'redux-create-reducer';

export const Actions = Object.freeze({
  FETCHDATA: 'FETCHDATA',
  RESET: 'RESET',
  ERROR: 'ERROR',
});

const initialState = {
  deadline: null,
  profile: null,
  campaign: null,
  shul_status: null,
  donation_stat: null,
  daily: null,
  donors: null,
  stat: null,
  error: null,
  loaded: false,
};

const fectchData = (state = initialState, action) => ({
  ...state,
  deadline: action.deadline,
  profile: action.profile,
  campaign: action.campaign,
  shul_status: action.shul_status,
  donation_stat: action.donation_stat,
  daily: action.daily,
  donors: action.donors,
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

const ShulDashboardReducer = createReducer(initialState, {
  [Actions.FETCHDATA]: fectchData,
  [Actions.RESET]: reset,
  [Actions.ERROR]: handleError
});

export default ShulDashboardReducer;
