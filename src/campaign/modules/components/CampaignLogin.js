import React from 'react';
import clsx from 'clsx';

import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(0),
    marginBottom: theme.spacing(5),
    display: 'flex',
  },
  // . Image Styles
  imgFluid: {
    maxWidth: '100%',
    height: 'auto'
  },
  imgRounded: {
    borderRadius: '6px !important'
  },
  imgRoundedCircle: {
    borderRadius: '50% !important'
  },
  imgRaised: {
    boxShadow:
      '0 5px 15px -8px rgba(0, 0, 0, 0.24), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  },
  imgGallery: {
    width: '100%',
    marginBottom: '2.142rem'
  },
  imgCardTop: {
    width: '100%',
    borderTopLeftRadius: 'calc(.25rem - 1px)',
    borderTopRightRadius: 'calc(.25rem - 1px)'
  },
  imgCardBottom: {
    width: '100%',
    borderBottomLeftRadius: 'calc(.25rem - 1px)',
    borderBottomRightRadius: 'calc(.25rem - 1px)'
  },
  imgCard: {
    width: '100%',
    borderRadius: 'calc(.25rem - 1px)'
  },
  imgCardOverlay: {
    position: 'absolute',
    top: '0',
    right: '0',
    bottom: '0',
    left: '0',
    padding: '1.25rem'
  },
});

function CampaignLogin(props) {
  const { classes } = props;

  return (
    <Container className={classes.root} component="section">
      <Grid container>
        <Grid item xs={12} md={6}>
          <h1>Sonik, Josh Bochner</h1>
          <h3>Tagged You To Gososhul</h3>
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href="/premium-themes/onepirate/sign-in/"
          >
            Sign In
          </Link>
          <br />
          <Link
            color="inherit"
            variant="h6"
            underline="none"
            className={classes.rightLink}
            href="/premium-themes/onepirate/sign-up/"
          >
            Sign Up
          </Link>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            src="https://images.unsplash.com/photo-1527853787696-f7be74f2e39a?auto=format&fit=crop&w=500&q=80"
            alt="call to action"
            className={
                        `${classes.imgRaised
                        } ${
                          classes.imgRounded
                        } ${
                          classes.imgFluid}`
                      }
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default withStyles(styles)(CampaignLogin);
