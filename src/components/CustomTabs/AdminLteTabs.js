import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// nodejs library to set properties for components
import PropTypes from 'prop-types';

// material-ui components
import Icon from '@material-ui/core/Icon';

export default function CustomTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, value) => {
    setValue(value);
  };
  const {
    bodyClass, plainTabs, tabs, title, hrefClass, hrefActiveClass
  } = props;

  return (
    <div className="card cardStyle">
      <div className="card-header border-bottom-0">
        <ul
          className="nav nav-pills"
          value={value}
          onChange={handleChange}
        >
          {tabs.map((prop, key) => {
            let icon = {};
            if (prop.tabIcon) {
              icon = {
                icon:
                  typeof prop.tabIcon === 'string' ? (
                    <Icon>{prop.tabIcon}</Icon>
                  ) : (
                    <prop.tabIcon />
                  )
              };
            }
            return (

              <li className="nav-item pill-1" key={key}>
                <a
                  className={
                    (key === value)
                      ? hrefActiveClass : hrefClass
}
                  href="#"
                  key={key}
                  data-toggle="tab"
                  onClick={() => { setValue(key); }}
                >
                  {prop.tabName}
                  {
                    (key === value) ? (<hr id="link-1" className="hrcls" />) : ''
                  }

                </a>
              </li>

            );
          })}
        </ul>
      </div>
      <div className={bodyClass}>
        <div className="tab-content">
          {tabs.map((prop, key) => {
            if (key === value) {
              return <div key={key}>{prop.tabContent}</div>;
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
}

CustomTabs.propTypes = {
  headerColor: PropTypes.oneOf([
    'warning',
    'success',
    'danger',
    'info',
    'primary',
    'rose',
    'transparent'
  ]),
  title: PropTypes.string,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabName: PropTypes.string.isRequired,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node.isRequired
    })
  ),
  rtlActive: PropTypes.bool,
  plainTabs: PropTypes.bool
};
