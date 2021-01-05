import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { UserContainer, ShulDashboardContainer } from 'containers';
import * as apiRequests from 'services/apiRequsts';
import * as utils from 'utils/common';

const CampaignBasic = ({
  url, goal, pollout, userState, shulDashboardState, shulDashboardActions
}) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ url, goal });
  const { session } = userState;
  let { campaign } = shulDashboardState;
  const { handleResetData } = shulDashboardActions;
  const baseUrl = utils.getBaseUrl(window.location.href);

  // useEffect(() => {
  //   pollout({ key: 'campaign_goal', val: data.goal });
  //   pollout({ key: 'campaign_url', val: data.url });
  // }, [data]);

  return (
    <>
      <div className="container">
        <div className="row mt-3 shul-campSetting1-padding">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-10 col-md-10  col-sm-10">
            <div className=" bg-white  border-LTB ">
              <div className="copy-link-box-padding1">
                <div htmlFor className="cc-txt">
                  Your Dedicated Campaign URL
                  <span
                    data-toggle="tooltip"
                    title="Text Here"
                    className="tooltip21"
                  >
                     [?]
                  </span>
                </div>
                <div className="pt-3">
                  <label className="link-txt2 pr-3">
                    {`${baseUrl}/campaign/`}
                  </label>
                  <input
                    type="text"
                    label="Enter Your Campaign Goal"
                    name="campaignUrl"
                    value={data.url}
                    onChange={(e) => { setData({ ...data, url: e.target.value }); }}
                    variant="outlined"
                    placeholder="Type a Shul Name"
                    className="copy-link-new"
                  />
                  <span
                    onClick={() => {
                      // MOdify Campaign JSON
                      const validUrl = utils.pathnameParsing(data.url);
                      campaign = {
                        ...campaign,
                        campaign_url: validUrl
                      };
                      apiRequests.SetCampaignUrl(session, '', validUrl)
                        .then((ret) => {
                          if (ret.stat === 'success') {
                            handleResetData({
                              key: 'campaign',
                              value: campaign
                            });
                            pollout({ key: 'campaign_url', val: validUrl });
                            setData({...data, url: validUrl});
                            // window.alert('Set Url Success!');
                          } else {
                            typeof window !== 'undefined' && window.alert(ret.error.response.data.status);
                          }
                        })
                        .catch((error) => {
                          typeof window !== 'undefined' && window.alert('Set Url Failed');
                        });
                    }}
                    className="copy-link-btn-new"
                  >
                    <img
                      src="/dist/img/feather-save.png"
                      width={22}
                      alt="logout"
                      className
                    />
                       Save URL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row shulcamp-addmt-5 shul-campSetting1-padding">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-10 col-md-10  col-sm-10">
            <div className=" bg-white  border-LTB ">
              <div className="copy-link-box-padding1">
                <div htmlFor className="cc-txt">
                  Campaign Goal
                  <span
                    data-toggle="tooltip"
                    title="Text Here"
                    className="tooltip21"
                    data-original-title="Text Here"
                  >
                     [?]
                  </span>
                </div>
                <div className="pt-3">
                  <input
                    type="text"
                    name="campaignGoal"
                    value={data.goal}
                    onChange={(e) => { setData({ ...data, goal: e.target.value }); }}
                    variant="outlined"
                    placeholder="Enter your Campaign Goal"
                    className="copy-link-new set-nw-wth1"
                  />
                  <span
                    className="copy-link-btn-new"
                    onClick={() => {
                    // MOdify Campaign JSON
                      campaign = {
                        ...campaign,
                        campaign_goal: data.goal
                      };
                      apiRequests.SetGoal(session, '', data.goal)
                        .then((ret) => {
                          if (ret.stat === 'success') {
                            handleResetData({
                              key: 'campaign',
                              value: campaign
                            });
                            pollout({ key: 'campaign_goal', val: data.goal });
                            typeof window !== 'undefined' && window.alert('Set Goal Success!');
                          } else {
                            typeof window !== 'undefined' && window.alert(ret.error.response.data.status);
                          }
                        })
                        .catch((error) => {
                          typeof window !== 'undefined' && window.alert('Set Goal Failed');
                        });
                    }}
                  >
                    <img
                      src="/dist/img/aa1.png"
                      width={22}
                      alt="logout"
                      className
                    />
                       Set Goal
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

CampaignBasic.propTypes = {
  url: PropTypes.string.isRequired,
  goal: PropTypes.string.isRequired,
  pollout: PropTypes.func.isRequired,
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  shulDashboardState: PropTypes.object,
  shulDashboardActions: PropTypes.object,
};

export default ShulDashboardContainer(UserContainer(CampaignBasic));
