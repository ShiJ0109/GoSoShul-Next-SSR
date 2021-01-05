import { Actions } from 'reducers/ShulDashboardReducer';
import {
  GetAllShulInfo
} from 'services/apiRequsts';
import CampaignSettingsModel from 'models/shul/CampaignSettingsModel';

const fetchData = (ret) => ({
  type: Actions.FETCHDATA,
  deadline: ret.data.deadline,
  profile: ret.data.profile,
  campaign: CampaignSettingsModel(ret.data.campaign),
  shul_status: ret.data.shul_status,
  donation_stat: ret.data.donation_stat,
  daily: ret.data.daily,
  donors: ret.data.donors,
  stat: ret.stat,
  error: ret.error,
  loaded: true,
});

// return value if apiRequest failed
const fetchFailedData = (ret) => ({
  type: Actions.FETCHDATA,
  deadline: null,
  profile: null,
  campaign: null,
  shul_status: null,
  donation_stat: null,
  daily: null,
  donors: null,
  stat: ret.stat,
  error: ret.error,
  loaded: true,
});

// reset shulDashboardState if $key is changed.
const resetData = ({key, value}) => ({
  type: Actions.RESET,
  key,
  value,
});

export const handleFetchData = (session) => {
  return async (dispatch) => {
    try {
      const response = await GetAllShulInfo({ session });
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
    dispatch(resetData({key, value}));
  };
};

export default handleFetchData;
