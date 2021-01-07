const url = (path) => `https://api.gososhul.com/${path}`;
// debug mode
// const url = (path) => `http://192.168.108.83:8035/gososhul/${path}`;

const requestParams = {
  authURLparams: {
    baseAuthURL: 'https://accounts.spotify.com/authorize',
    clientID: '7ef237e5b7f647d0b73eb2487bc92544',
    // clientID: 'beb4ac91e97d4365b7f23dd078d2387d',
    // redirectURL: 'http://localhost:3002/callback',
    // redirectURL: `${window.location.origin}/callback`,
    responseType: 'token',
    scope: 'user-library-read user-follow-read user-read-currently-playing'
  },
  mainUrls: {
    getCampaignDeadline: url('shul/get-campaign-deadline'),
    getTotalDonationStat: url('shul/get-total-donation-stat'),
    getShulIdByUrl: url('shul/get-shul-id-by-url'),
    getAllDonations: url('shul/get-all-donations'),
    getCampaignData: url('shul/get-campaign-data'),
  },
  shulUrls: {
    signup: url('shul/signup'),
    login: url('shul/login'),
    shulDashboard: url('shul/getDashboardStat'),
    getProfile: url('shul/get-profile'),
    setProfile: url('shul/set-profile'),
    setContact: url('shul/set-contact'),
    getCampaignSettings: url('shul/get-campaign-settings'),
    setCampaignSettings: url('shul/set-campaign-settings'),
    setCampaignGoal: url('shul/set-campaign-goal'),
    setCampaignUrl: url('shul/set-campaign-url'),
    getDonationStat: url('shul/get-donation-stat'),
    getShulLists: url('shul/get-shul-list'),
    getAllShulInfo: url('shul/get-dashboard'),
    changePassword: url('shul/change-password'),
  },
  userUrls: {
    getRef: url('user/get_ref'),
    signup: url('user/signup'),
    login: url('login'),
    postTag: url('user/tag'),
    postDonate: url('user/donate'),
    getAllUserInfo: url('user/get-dashboard'),
    getProfile : url('user/get-profile'),
    setPersonalInfo : url('user/set-personal-info'),
    setProfileSettings : url('user/set-profile-settings'),

  },
  stripeUrls: {
    stripeConnect: url('shul/stripe-connect'),
    stripeConnectRefresh: url('shul/stripe-connect-refresh'),
    stripeConnectCompleted: url('shul/stripe-connect-completed'),
  },
};

export default requestParams;
