import React from 'react';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { UserContainer, UserDashboardContainer } from 'containers';
import Warning from 'components/Typography/Warning';
import * as userRequests from 'services/userRequests';

const Settings = ({ userState, userDashboardState, userDashboardActions }) => {
  const { session } = userState;
  const { profile } = userDashboardState;
  const { handleResetData } = userDashboardActions;

  const handleClick = (e) => {
    e.preventDefault();
    window.alert('check');
  };
  return (
    <div className="tab-pane" id="timeline">
      <Formik
        initialValues={{
          notifyTag: (profile.notify_tag === '1'),
          sendDailyStat: (profile.send_daily_stat === '1'),
        }}
        onSubmit={(values) => {
          const {
            notifyTag, sendDailyStat,
          } = values;
          const settings = {
            notify_tag: notifyTag ? '1' : '0',
            send_daily_stat: sendDailyStat ? '1' : '0',
          };
          console.log(settings);
          userRequests.setProfileSettings(session, '', settings)
            .then((ret) => {
              if (ret.stat === 'success') {
                handleResetData({
                  key: 'profile',
                  value: {
                    ...profile,
                    notify_tag: notifyTag ? '1' : '0',
                    send_daily_stat: sendDailyStat ? '1' : '0',
                  }
                });
                window.alert('Success');
              } else {
                window.alert(ret.error.response.data.status);
              }
            })
            .catch((error) => {
              console.log(error);
              window.alert('Post User Setting Data failed');
            });
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form
            className="form form-paddingL"
            onSubmit={handleSubmit}
          >
            <div className="form-group ">
              <div className="custom-control custom-checkbox check-filed-bg">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="customCheckbox1"
                  name="notifyTag"
                  checked={values.notifyTag}
                  onChange={handleChange}
                />
                <label
                  htmlFor="customCheckbox1"
                  className="custom-control-label check-label-clr"
                >
                  Yes, send me notifications regarding people I tag
                </label>
              </div>
            </div>
            <div className="form-group ">
              <div className="custom-control custom-checkbox check-filed-bg">
                <input
                  className="custom-control-input"
                  type="checkbox"
                  id="customCheckbox2"
                  name="sendDailyStat"
                  checked={values.sendDailyStat}
                  onChange={handleChange}
                />
                <label
                  htmlFor="customCheckbox2"
                  className="custom-control-label check-label-clr"
                >
                  Yes, send me daily stats
                </label>
              </div>
            </div>
            <div className="mt-3 col-lg-4 col-md-5 savebtnpaddR2">
              <button
                className="btn greenbtn green1 col-md-12 waves-effect waves-light"
                type="submit"
              >
                Save Button
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

Settings.propTypes = {
  userState: PropTypes.shape({
    session: PropTypes.string
  }).isRequired,
  userDashboardState: PropTypes.object,
  userDashboardActions: PropTypes.object,
};

export default UserDashboardContainer(UserContainer(Settings));
