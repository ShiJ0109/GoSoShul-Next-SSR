import { Actions } from 'reducers/UserReducer';
import {
  PostLogin
} from 'services/userRequests';

export const logout = () => ({ type: 'LOGOUT' });

const login = (session, id, role, status, error) => ({
  type: Actions.LOGIN,
  session,
  id,
  role,
  status,
  error
});

// reset shulDashboardState if $key is changed.
const resetData = ({ key, value }) => ({
  type: Actions.RESET,
  key,
  value,
});

export const handleLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const {data = null} = await PostLogin({ email, password });
      const error = data ? null : 'Login failed. Check email and password.';
      if (data != null) {
        dispatch(login(data.session, data.id, data.role, data.status, error));
      } else {
        dispatch(login(null, null, null,null, error));
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const handleResetData = ({ key, value }) => {
  return async (dispatch) => {
    dispatch(resetData({ key, value }));
  };
};
