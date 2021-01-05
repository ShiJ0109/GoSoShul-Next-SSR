import React, {useState} from 'react';
import {
  Container,
  Grid,
  Typography,
  makeStyles,
  Box
} from '@material-ui/core';
import Page from 'components/Page';
import MainState from './MainState';
import Results from './Results';
import data from './data';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const StatsPage = () => {
  const classes = useStyles();
  const [customers] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Stats"
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
        </Grid>
        <Box mt={3}>
          <Results customers={customers} />
        </Box>
      </Container>
    </Page>
  );
};

export default StatsPage;
