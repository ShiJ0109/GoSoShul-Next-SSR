import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import Page from 'components/Page';

// core components for custom Tab
import CustomTabs from 'components/CustomTabs/CustomTabs.js';

import Toolbar from './Toolbar';
import DonateCard from './DonateCard';
import TagDetails from './TagDetails';
import TagCard from './TagCard';
import data from './data';

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

const Tagged = () => {
  const classes = useStyles();
  const SampleProduct = {
    createdAt: '27/03/2019',
    description: 'Dropbox is a file hosting service that offers cloud storage, file synchronization, a personal cloud.',
    media: '/static/images/products/product_1.png',
    title: 'Dropbox',
    totalDownloads: '594'
  };
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
              <TagCard
                className={classes.productCard}
                product={SampleProduct}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          mt={3}
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={3}
            size="small"
          />
        </Box>
      </Container>
    </Page>
  );
};

const TagMore = () => {
  const classes = useStyles();
  const [products] = useState(data);

  return (
    <Page
      className={classes.root}
      title="Products"
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          lg={12}
          md={12}
          xs={12}
        >
          <TagDetails />
        </Grid>
        <Grid item>
          <Container maxWidth={false}>
            <Box mt={3}>
              <Grid
                container
                spacing={3}
              >
                {products.map((product) => (
                  <Grid
                    item
                    key={product.id}
                    lg={4}
                    md={6}
                    xs={12}
                  >
                    <TagCard
                      className={classes.productCard}
                      product={product}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
            <Box
              mt={3}
              display="flex"
              justifyContent="center"
            >
              <Pagination
                color="primary"
                count={3}
                size="small"
              />
            </Box>
          </Container>
        </Grid>
      </Grid>
    </Page>
  );
};

const TagPage = () => {
  return (
    <CustomTabs
      plainTabs
      title=""
      headerColor="primary"
      tabs={[
        {
          tabName: 'Taged',
          tabContent: (
            <Tagged />
          )
        },
        {
          tabName: 'Tag More',
          tabContent: (
            <TagMore />
          )
        },
      ]}
    />
  );
};

export default TagPage;
