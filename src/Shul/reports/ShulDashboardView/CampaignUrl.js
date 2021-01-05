import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {

  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles,
  Button
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const CampaignUrl = ({ className, url, ...rest }) => {
  const classes = useStyles();
  const Contents = [
    {
      name: '10',
      state: 'Days',
    },
    {
      name: '12',
      state: 'hours',
    },
    {
      name: '10',
      state: 'minutes',
    },

  ];
  const RenderContents = Contents.map((content) => {
    return (
      <Grid item>
        <Typography
          color="textprimary"
          gutterBottom
          variant="h3"
        >
          { content.name }
        </Typography>
        <Typography
          color="textsecondary"
          variant="h6"
        >
          { content.state }
        </Typography>
      </Grid>
    );
  });
  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={1}
        >
          <Grid item>
            <Typography
              color="textprimary"
              gutterBottom
              variant="h3"
            >
              Your Dedicated Campaign URL
            </Typography>
            <Typography
              color="textsecondary"
              variant="h6"
            >
              {url}
            </Typography>
          </Grid>
          { RenderContents }
        </Grid>
      </CardContent>
    </Card>
  );
};

CampaignUrl.propTypes = {
  className: PropTypes.string,
  url: PropTypes.string.isRequired,
};

export default CampaignUrl;
