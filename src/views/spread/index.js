import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Link,
  makeStyles
} from '@material-ui/core';
import { useNavigate, useParams } from 'react-router-dom';
import * as userRequests from 'services/userRequests';
import Page from 'components/Page';
import { NextSeo } from 'next-seo';
import HelmetMetaData from './HelmetMetaData';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
// get the last prameter(control) of shul url
function getShulName(url) {
  const urlArray = url.split('/');
  return urlArray[urlArray.length - 1];
}

const Spread = () => {
  const classes = useStyles();
  const { ref } = useParams();
  const [refData, setRefData] = useState(false);
  const [url, setUrl] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchData() {
      const refRes = await userRequests.GetRef(ref);
      if (refRes.stat === 'success' && refRes.data.status_code === 200) {
        setRefData(refRes.data);
        const tempUrl = getShulName(refRes.data.ref.shul_url);
        console.log(tempUrl);
        setUrl(tempUrl);
      }
      if (refRes.stat === 'failure') {
        setRefData(404);
      }
    }
    fetchData();
  }, []);

  // if (refData === 404) navigate('/login', { replace: true });
  if (refData === 404) {
    return (
      <HelmetMetaData />
    );
  }

  return (

    <Page
      className={classes.root}
      title="Account"
    >
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <h1>Redirecting...</h1>
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            {(url === false) ? '' : navigate(`/campaign/${url}/${ref}`, { replace: true })}
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Spread;
