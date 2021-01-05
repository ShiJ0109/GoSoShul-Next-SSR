export const Actions = Object.freeze({
  LOGIN: 'SHULLOGIN',
  RESET: 'SHULRESET',
  POLL: 'SHULPOLL',
  ERROR: 'SHULUSER_ERROR'
});

const initialState = {
  session: null,
  id: null,
  status: "OK",
  error: null,
};

const login = (state = initialState, action) => ({
  ...state,
  session: action.session,
  id: action.id,
  status: action.status,
  error: action.error,
});

const ShulUserReducer = (state = initialState, action) => {
  if (action.type === Actions.LOGIN) {
    return {
      ...state,
      session: action.session,
      id: action.id,
      status: action.status,
      error: action.error,
    };
  }

  return state;
};

export default ShulUserReducer;
