import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import CampaignLogin from '../components/CampaignLogin';
import ProgressBar from '../components/ProgressBar';
import Typography from '../components/Typography';

const styles = (theme) => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  progressInfo: {
    height: 100,
    width: '100%',
    borderRadius: 0,
    margin: 0,
    position: '',
    zIndex: '10'
  },
});

function AppAppBar(props) {
  const { classes } = props;

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <div className={classes.left}>
            <Link
              variant="h6"
              underline="none"
              color="inherit"
              className={classes.title}
              href="/premium-themes/onepirate/"
            >
              GoSoshul
            </Link>
          </div>
          <div className={classes.right}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              className={classes.rightLink}
              href="/campaign/donate"
            >
              Sign In
            </Link>
            <Link
              variant="h6"
              underline="none"
              className={clsx(classes.rightLink, classes.linkSecondary)}
              href="/"
            >
              Sign Up
            </Link>
          </div>
        </Toolbar>
        {/* <Container className={classes.root} component="section">
        </Container> */}
        <CampaignLogin />
      </AppBar>
      <ProgressBar bgcolor="green" completed="20" />
      <div className={classes.progressInfo}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={4} />
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              This is test Sentence
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" className={classes.title}>
              This is test Sentence
            </Typography>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

AppAppBar.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   */
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
