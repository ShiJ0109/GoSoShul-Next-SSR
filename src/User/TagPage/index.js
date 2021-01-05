import React from 'react';
// core components for custom Tab
import CustomTabs from 'components/CustomTabs/AdminLteTabs';
import Tagged from './Tagged';
import Tagmore from './Tagmore';

const TagPage = () => {
  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-1 col-md-0 col-sm-0" />
          <div className="col-lg-10 col-md-12 col-sm-12 tableTag-margin-left1">
            <CustomTabs
              plainTabs
              title=""
              bodyClass="card-body mobTag-padding-responsiv"
              hrefClass="nav-link link-1 text-lg font-w-navTxt mob-tabgedlinkText-0"
              hrefActiveClass="nav-link link-1 active text-lg font-w-navTxt mob-tabgedlinkText-0"
              tabs={[
                {
                  tabName: 'Tagged',
                  tabContent: (
                    <Tagged />

                  )
                },
                {
                  tabName: 'Tag More',
                  tabContent: (
                    <Tagmore />
                  )
                },
              ]}
            />
          </div>
        </div>
      </div>
      {}
    </div>
  );
};

export default TagPage;
