import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
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

const Campaign = ({ className, campaign, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h3"
            >
              Campaign
            </Typography>
            <Typography
              color="textSecondary"
              variant="h6"
            >
              You`ve Campaignd Your Post on All Social Platforms
            </Typography>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          <Typography
            color="yellow"
            variant="caption"
          >
            Campaign Again
          </Typography>
          <ArrowForwardIcon className={classes.differenceIcon} />
        </Box>
      </CardContent>
    </Card>
  );
};

Campaign.propTypes = {
  className: PropTypes.string,
  campaign: PropTypes.bool.isRequired,
};

export default Campaign;
