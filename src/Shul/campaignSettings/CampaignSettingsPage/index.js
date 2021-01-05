import React, { useState } from 'react';
import PropTypes from 'prop-types';
import NewWindow from 'react-new-window';
import * as apiRequests from 'services/apiRequsts';
// import model
import CampaignSettingsModel, { CampaignSettingsPostModel } from 'models/shul/CampaignSettingsModel';
// import React Alert
import AlertDialog from 'components/Modal/Alert';
// import UserContainer for session
import { UserContainer, ShulDashboardContainer } from 'containers';
import CampaignBasic from './CampaignBasic';
import CampaignIntro from './CampaignIntro';
import InMemory from './InMemory';
import Sponsors from './Sponsors';

const CampaignSettingsPage = ({ userState, shulDashboardState, shulDashboardActions }) => {
  const [data, setData] = useState(CampaignSettingsModel(shulDashboardState.campaign));
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState(false);
  // alert message
  const [message, setMessage] = useState(null);
  // about_shul limit Length state
  const [aboutLength, setAboutLength] = useState(false);
  const { session } = userState;
  const { campaign, shul_status } = shulDashboardState;
  const { handleResetData } = shulDashboardActions;
  if (data === false) return null;

  // callback to return components data
  const pollout = ({ key, val }) => {
    setData({ ...data, [key]: val });
    console.log(data);
  };

  // post data to CI backend api
  const handlePost = () => {
    // about_shul 450 limit
    if (data.introduction.about_shul.length >= 450) {
      setAboutLength(true);
      return;
    }
    apiRequests.SetCampaignSettings(session, '', CampaignSettingsPostModel(data))
      .then((ret) => {
        if (ret.stat === 'success') {
          handleResetData({
            key: 'campaign',
            value: campaign
          });
          handleResetData({
            key: 'shul_status',
            value: {
              ...shul_status,
              campaign: ret.data.campaign,
            }
          });
          setMessage('CampaignSettings saved!');
        } else {
          setMessage(ret.error.response.data.status);
        }
      })
      .catch((error) => {
        console.log(error);
        setMessage('Post Data failed');
      });
  };

  // Preview settings
  const handlePreview = () => {
    localStorage.setItem('shulDashboardState', JSON.stringify(shulDashboardState));
    setOpen(true);
  };
  return (
    <div className="content-wrapper">
      <AlertDialog
        open={message !== null}
        title=""
        handleClose={() => {
          setAlert(false);
          setMessage(null);
        }}
        error={message}
      />
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
          {}
        </div>
        {}
      </div>
      {}
      {}
      <div className="container ">
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-9 col-md-10  col-sm-10">
            <div className="campaign-text1">
              <h4>
                <img
                  src="/dist/img/play-circle.png"
                  width={30}
                  alt="play-circle"
                />
                    Quick Video Instructions
              </h4>
              <p>Some insights into how to best set up your campaign.</p>
            </div>
          </div>
        </div>
        <CampaignBasic url={data.campaign_url} goal={data.campaign_goal} pollout={pollout} />
        <CampaignIntro intro={data.introduction} shulName={data.shul_name} aboutLength={aboutLength} pollout={pollout} />
        <InMemory inMemoryOf={data.in_memory_of !== null ? data.in_memory_of : []} pollout={pollout} />
        <Sponsors sponsors={data.sponsors !== null ? data.sponsors : []} pollout={pollout} />
        <div className="container">
          <div className="row mt-5">
            <div className="col-lg-1 col-md-0  col-sm-0" />
            <div className="col-lg-9 col-md-10  col-sm-10 inmemorymobviewPLG">
              <div className="mob-camp-BtnGreenSet">
                <button
                  className="btn greenbtn  waves-effect waves-light mr-4 addnewcolor-previewbtn"
                  onClick={handlePreview}
                  style={{
                    background: '#707070'
                  }}
                >
                  Preview
                </button>
                {
          open && (
            <NewWindow
              url="campaign"
              onUnload={() => {
                setOpen(false);
                localStorage.setItem('shulDashboardState', null);
              }}
            />
          )
        }
                <button
                  className="btn greenbtn waves-effect waves-light wthset-campbtn"
                  onClick={handlePost}
                >
                  Save Settings
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
CampaignSettingsPage.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  shulDashboardState: PropTypes.object,
  shulDashboardActions: PropTypes.object,
};

export default ShulDashboardContainer(UserContainer(CampaignSettingsPage));
