import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import component for image drop zone
import DropzoneAreaExample from 'components/Accessaries/Dropzone/DropzoneAreaExample';
import Warning from 'components/Typography/Warning';

const CampaignIntro = ({
  intro, shulName, pollout, aboutLength
}) => {
  const [data, setData] = useState(intro);
  const [orgName, setOrgName] = useState(shulName);
  useEffect(() => {
    pollout({ key: 'introduction', val: data });
  }, [data]);

  useEffect(() => {
    pollout({ key: 'shul_name', val: orgName });
  }, [orgName]);

  return (
    <div className="container">
      <div className="row shulcamp-addmt-5">
        <div className="col-lg-1 col-md-0 col-sm-0" />
        <div className="col-lg-10 col-md-10  col-sm-10 aboutpadd1111">
          <div className="campaign-text1">
            <h4>About Your Shul</h4>
            <hr className="hrcls hr-width-new" />
          </div>
          <div className="shul-name-text7 Saboutchng-pt-5">
            <p>
              Shul Name
              <span
                data-toggle="tooltip"
                title="Text Here"
                className="tooltip22"
              >
                  [?]
              </span>
            </p>
            <div className="form-group col-md-7 pl-0">
              <input
                type="text"
                className="from-input-inside form-control"
                placeholder="Enter Shul Name"
                name="shulName"
                value={orgName}
                onChange={(e) => setOrgName(e.target.value)}
              />
            </div>
          </div>
          <div className="shul-name-text7 pt-3">
            <p>
              Logo
              <span
                data-toggle="tooltip"
                title="Text Here"
                className="tooltip22"
              >
                  [?]
              </span>
            </p>
            <div style={{ width: '522px', height: '157' }}>
              <DropzoneAreaExample
                count={1}
                urls={[data.logo_link]}
                setUrl={({ urls }) => {
                  setData({ ...data, logo_link: urls[0] });
                  console.log(data);
                }}
              />
            </div>

          </div>
          <div className="shul-name-text7 Saboutchng-pt-5">
            <p className="mb-0">
              About Your Shul
              <span
                data-toggle="tooltip"
                title="Text Here"
                className="tooltip22"
              >
                  [?]
              </span>
              <span className="limt-450">Limit 450 character </span>
            </p>
            <textarea
              className="form-control email-template-textarea mt-2 wth-11"
              name="aboutShul"
              value={data.about_shul}
              onChange={(e) => { setData({ ...data, about_shul: e.target.value }); }}
              rows={8}
              defaultValue=""
            />
            {
            aboutLength && (<Warning>Introduction text exceed</Warning>)
          }
          </div>
          <div className="shul-name-text7 Saboutchng-pt-5shul-name-text7 pt-5">
            <p>
              <img src="/dist/img/circle1.png" width alt="play-circle" />
              Video Link
              <span
                data-toggle="tooltip"
                title="Text Here"
                className="tooltip22"
              >
                  [?]
              </span>
            </p>
            <div className="form-group col-md-7 pl-0">
              <input
                type="text"
                className="from-input-inside form-control"
                fullWidth
                name="videoLink"
                value={data.video_link}
                onChange={(e) => { setData({ ...data, video_link: e.target.value }); }}
                placeholder="Paste youtube video link here"
              />
            </div>
          </div>
          <div className="shul-name-text7 Saboutchng-pt-5">
            <p>
              Shul Photos
              <span
                data-toggle="tooltip"
                title="Text Here"
                className="tooltip22"
              >
                  [?]
              </span>
            </p>
            <div style={{ width: '940', height: '157' }}>
              <DropzoneAreaExample
                className="dropzone"
                count={5}
                urls={data.photos}
                setUrl={({ urls }) => { setData({ ...data, photos: urls }); }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

CampaignIntro.propTypes = {
  shulName: PropTypes.string.isRequired,
  intro: PropTypes.shape({
    logo_link: PropTypes.string,
    about: PropTypes.string,
    photos: PropTypes.array,
  }),
  pollout: PropTypes.func.isRequired,
};

export default CampaignIntro;
