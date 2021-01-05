import { Actions } from 'reducers/ShulUserReducer';
import {
  PostLogin
} from 'services/apiRequsts';

export const logout = () => ({ type: 'LOGOUT' });

const shulLogin = (session, id, status, error) => ({
  type: Actions.LOGIN,
  session,
  id,
  status,
  error,
});


export const handleShulLogin = (email, password) => {
  return async (dispatch) => {
    try {
      const {data = null} = await PostLogin({ email, password });
      const error = data ? null : 'Login failed. Check email and password.';
      if (data != null) {
        dispatch(shulLogin(data.session, data.id, data.status, error));
      } else {
        dispatch(shulLogin(null, null, null, error));
      }
    } catch (e) {
      console.log(e.message);
    }
  };
};
