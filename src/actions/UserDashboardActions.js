import { Actions } from 'reducers/UserDashboardReducer';
import {
  GetAllUserInfo
} from 'services/userRequests';

const fetchData = (ret) => ({
  type: Actions.FETCHDATA,
  dashboard: ret.data.dashboard,
  tagged: ret.data.tagged,
  donation: ret.data.donation,
  share: ret.data.share,
  shul_list: ret.data.shul_list,
  profile: ret.data.profile,
  stat: ret.stat,
  error: ret.error,
  loaded: true,
});

// return value if apiRequest failed
const fetchFailedData = (ret) => ({
  type: Actions.FETCHDATA,
  dashboard: null,
  tagged: null,
  donation: null,
  share: null,
  shul_list: null,
  profile: null,
  stat: ret.stat,
  error: ret.error,
  loaded: true,
});

// reset shulDashboardState if $key is changed.
const resetData = ({ key, value }) => ({
  type: Actions.RESET,
  key,
  value,
});

export const handleFetchData = (session) => {
  return async (dispatch) => {
    try {
      const response = await GetAllUserInfo({ session });
      if (response.stat === 'success') {
        dispatch(fetchData(response));
      } else {
        dispatch(fetchFailedData(response));
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

export default handleFetchData;
