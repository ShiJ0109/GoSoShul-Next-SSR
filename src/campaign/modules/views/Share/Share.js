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
const FriendDetails = ({ title }) => {
  return (
    <div>
      <div>
        <Warning>{ title }</Warning>
      </div>
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
        <TitleInput title="Email" demo="Enter Email" />
      </div>
    </div>
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
    <div className={classes.section}>
      { renderContents }
      <TitleInput title="In Honor Of" demo="Write a short message" />
    </div>
  );
};
const Share = ({ header }) => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.typo}>
        <h1>{ header }</h1>
      </div>
      <div className={classes.typo}>
        <Quote
          text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
          author=" Kanye West, Musician"
        />
      </div>
      <GridContainer>
        <GridItem xs={12} md={3}>
          <Button color="primary" round>
            Facebook
          </Button>
        </GridItem>
        <GridItem xs={12} md={3}>
          <Button color="info" round>
            Twitter
          </Button>
        </GridItem>
        <GridItem xs={12} md={3}>
          <Button color="warning" round>
            WhatsApp
          </Button>
        </GridItem>
        <GridItem xs={12} md={3}>
          <Button color="rose" round>
            Instogram
          </Button>
        </GridItem>
      </GridContainer>
      <GridItem xs={12} sm={2} className={classes.marginLeft}>
        <Button color="primary" round>
          Next
        </Button>
      </GridItem>
    </div>
  );
};

export default Share;
