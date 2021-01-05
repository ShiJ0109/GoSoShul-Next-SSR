import React from 'react';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons
import Check from '@material-ui/icons/Check';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
// core components for custom Buttons.
import Button from 'components/CustomButtons/Button.js';

// core components for custom Input.
import CustomInput from 'components/CustomInput/CustomInput';

// core components for custom Tab
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

// core components for Typography
import GridContainer from 'components/Grid/GridContainer.js';
import GridItem from 'components/Grid/GridItem.js';
import Small from 'components/Typography/Small.js';
import Danger from 'components/Typography/Danger.js';
import Warning from 'components/Typography/Warning.js';
import Success from 'components/Typography/Success.js';
import Info from 'components/Typography/Info.js';
import Primary from 'components/Typography/Primary.js';
import Muted from 'components/Typography/Muted.js';
import Quote from 'components/Typography/Quote.js';
import image from 'assets/img/faces/avatar.jpg';
import styles from 'assets/jss/material-kit-react/views/componentsSections/typographyStyle.js';
import basicStyles from 'assets/jss/material-kit-react/views/componentsSections/basicsStyle.js';
import tabStyles from 'assets/jss/material-kit-react/views/componentsSections/tabsStyle.js';
import tabsStyles from 'assets/jss/material-kit-react/views/componentsSections/tabsStyle.js';

const useStyles = makeStyles(styles);
const useBasicStyles = makeStyles(basicStyles);
const useTabStyles = makeStyles(tabsStyles);

const CheckBoxes = () => {
  const classes = useBasicStyles();
  const [checked, setChecked] = React.useState([24, 22]);
  const [selectedEnabled, setSelectedEnabled] = React.useState('b');
  const [checkedA, setCheckedA] = React.useState(true);
  const [checkedB, setCheckedB] = React.useState(false);
  const handleToggle = (value) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  return (
    <GridContainer>
      <GridItem xs={12} md={6}>
        <div
          className={
                    `${classes.checkboxAndRadio
                    } ${
                      classes.checkboxAndRadioHorizontal}`
                    }
        >
          <FormControlLabel
            control={(
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(21)}
                checked={checked.indexOf(21) !== -1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
                      )}
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Yes, charge me the fees!"
          />
        </div>
      </GridItem>
      <GridItem xs={12} md={6}>
        <div
          className={
                    `${classes.checkboxAndRadio
                    } ${
                      classes.checkboxAndRadioHorizontal}`
                    }
        >
          <FormControlLabel
            control={(
              <Checkbox
                tabIndex={-1}
                onClick={() => handleToggle(22)}
                checked={checked.indexOf(22) !== -1}
                checkedIcon={<Check className={classes.checkedIcon} />}
                icon={<Check className={classes.uncheckedIcon} />}
                classes={{
                  checked: classes.checked,
                  root: classes.checkRoot
                }}
              />
                      )}
            classes={{ label: classes.label, root: classes.labelRoot }}
            label="Keep me Annoymous"
          />
        </div>
      </GridItem>
    </GridContainer>
  );
};

const TitleInput = ({ title, demo }) => {
  return (
    <div>
      <div>
        <h3>{ title }</h3>
      </div>
      <div>
        <CustomInput
          id="regular"
          inputProps={{
            placeholder: demo
          }}
          formControlProps={{
            fullWidth: true
          }}
        />
      </div>
    </div>

  );
};
const CreditCard = () => {
  return (
    <div>
      <div>
        <GridContainer>
          <GridItem xs={12} md={6}>
            <TitleInput title="First Name" demo="Jhon" />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TitleInput title="Last Name" demo="Doe" />
          </GridItem>
        </GridContainer>
      </div>
      <div>
        <TitleInput title="Credit card Number" demo="xxxxxxxxxxxx" />
      </div>
      <div>
        <GridContainer>
          <GridItem xs={12} md={6}>
            <TitleInput title="Exp. Date" demo="--/--" />
          </GridItem>
          <GridItem xs={12} md={6}>
            <TitleInput title="CVV" demo="123" />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

const PaymentDetails = () => {
  const classes = useTabStyles();
  return (
    <CustomTabs
      plainTabs
      title="Payment Details"
      headerColor="warning"
      tabs={[
        {
          tabName: 'Credit Card',
          tabContent: (
            <CreditCard />
          )
        },
        {
          tabName: 'Instant Check',
          tabContent: (
            <CreditCard />
          )
        },
        {
          tabName: 'Test Mode',
          tabContent: (
            <p>Test Mode</p>
          )
        }
      ]}
    />
  );
};

const Summary = () => {
  const Contents = [
    {
      name: 'Donation',
      value: '$1000',
    },
    {
      name: 'Double it',
      value: '$180',
    },
    {
      name: 'Fees',
      value: '$9.95',
    },
    {
      name: 'Total',
      value: '$1189.95',
    },
  ];
  const classes = useStyles();

  // Test map function
  const renderContents = Contents.map((content) => {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} md={8}>
            <div className={classes.typo}>
              <h3 className={classes.title}>{ content.name }</h3>
            </div>
          </GridItem>
          <GridItem xs={12} md={4}>
            <div className={classes.typo}>
              <h3 className={classes.title}>{ content.value }</h3>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    );
  });
  return (
    <div>
      { renderContents }
      <TitleInput title="In Honor Of" demo="Write a short message" />
    </div>
  );
};
const DonateDetail = ({ header }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.typo}>
        <h1>{ header }</h1>
      </div>
      <GridContainer>
        <GridItem xs={12} md={6}>
          <PaymentDetails />
        </GridItem>
        <GridItem xs={12} md={6}>
          <Summary />
        </GridItem>
      </GridContainer>
      <CheckBoxes />
      <GridItem xs={12} sm={2} className={classes.marginLeft}>
        <Button
          color="primary"
          round
          href="/campaign/tag"
        >
          Next
        </Button>
      </GridItem>
    </div>
  );
};

export default DonateDetail;
