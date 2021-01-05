import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column'
  },
  statsItem: {
    alignItems: 'center',
    display: 'flex'
  },
  statsIcon: {
    marginRight: theme.spacing(1)
  }
}));

const DonateCard = ({ className, product, ...rest }) => {
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
          spacing={1}
        >
          <Grid item>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              {product.title}
            </Typography>
          </Grid>

          <Grid item>
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              $180
            </Typography>
          </Grid>
          <Grid item>
            <AccessTimeIcon
              className={classes.statsIcon}
              color="action"
            />
            <GetAppIcon
              className={classes.statsIcon}
              color="action"
            />
            <Button color="warning" round>
              Donate Again
            </Button>
          </Grid>
        </Grid>
      </CardContent>

    </Card>
  );
};

DonateCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default DonateCard;
