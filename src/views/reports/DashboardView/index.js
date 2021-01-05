import React from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import Page from 'components/Page';
import MainState from './MainState';
import Donate from './Donate';
import Tag from './Tag';
import Share from './Share';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={12}
            sm={6}
            xl={12}
            xs={12}
          >
            <MainState />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Typography
              color="textsecondary"
              variant="h2"
            >
              Step 1
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Typography
              color="textsecondary"
              variant="h2"
            >
              Step 2
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Typography
              color="textsecondary"
              variant="h2"
            >
              Step 3
            </Typography>
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Donate />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Tag />
          </Grid>
          <Grid
            item
            lg={4}
            sm={6}
            xl={4}
            xs={12}
          >
            <Share />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
