import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles,
  Card,
  CardContent,
  Typography,
} from '@material-ui/core';

import Page from 'components/Page';
import Button from 'components/CustomButtons/Button';


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const Share = () => {
  const classes = useStyles();
  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Container maxWidth={false}>
        <Box mt={3}>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              lg={12}
              md={3}
              xs={12}
            >
              <Typography
                align="left"
                color="textPrimary"
                gutterBottom
                variant="h2"
              >
                Share
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              md={3}
              xs={12}
            >
              <Typography
                align="left"
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                Keep it going by sharing some of the posts below social
              </Typography>
            </Grid>
            <Grid
              item
              lg={4}
              md={3}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                  >
                    23 Clicks
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={8}
              md={3}
              xs={12}
            >
              <Card>
                <CardContent>
                  <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                  >
                    6 People Signed Up
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid
              item
              lg={12}
              md={3}
              xs={12}
            >
              <Typography
                align="left"
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                Shul Video
              </Typography>
            </Grid>
            <Grid
              item
              lg={12}
              md={6}
              xs={12}
            >
              <img src={`${process.env.PUBLIC_URL}/static/images/auth.jpeg`} />

            </Grid>
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Button
            color="primary"
            round
          >
            Facebook
          </Button>
          <Button
            color="rose"
            round
          >
            Instagram
          </Button>
          <Button
            color="warning"
            round
          >
            WhatsApp
          </Button>
        </Box>
      </Container>
    </Page>
  );
};

const SharePage = () => {
  return (
    <Share />
  );
};

export default SharePage;
