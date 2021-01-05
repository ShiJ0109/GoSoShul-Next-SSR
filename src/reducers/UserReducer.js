export const Actions = Object.freeze({
  LOGIN: 'LOGIN',
  RESET: 'RESET',
  POLL: 'POLL',
  ERROR: 'USER_ERROR'
});

const initialState = {
  session: null,
  id: null,
  role: null,
  status: "OK",
  error: null
};

const login = (state = initialState, action) => ({
  ...state,
  session: action.session,
  id: action.id,
  role: action.role,
  status: action.status,
  error: action.error,
});

const reset = (state = initialState, action) => ({
  ...state,
  [action.key]: action.value,
});

const UserReducer = (state = initialState, action) => {
  if (action.type === Actions.LOGIN) {
    return {
      ...state,
      session: action.session,
      id: action.id,
      role: action.role,
      status: action.status,
      error: action.error,
    };
  }

  if (action.type === Actions.RESET) {
    return reset(state, action);
  }

  return state;
};

export default UserReducer;
