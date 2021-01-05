import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
  makeStyles,
  Button
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

const ShulCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Box
          display="flex"
          justifyContent="center"
          mb={3}
        >
          <Avatar
            alt="Product"
            src={product.media}
            variant="square"
          />
          <Typography
            align="center"
            color="textPrimary"
            gutterBottom
            variant="h4"
          >
            {' '}
            {product.title}
          </Typography>
        </Box>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            item
          >
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              Raised
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="h3"
            >
              $145,965
            </Typography>
          </Grid>
          <Grid
            item
          >
            <Typography
              align="center"
              color="textPrimary"
              gutterBottom
              variant="h4"
            >
              Goal
            </Typography>
            <Typography
              align="center"
              color="textPrimary"
              variant="h3"
            >
              $1M
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <Box flexGrow={1} />
      <Divider />
      <Box p={2}>
        <Grid
          container
          justify="space-between"
          spacing={2}
        >
          <Grid
            className={classes.statsItem}
            item
          >
            <Button
              color="default"
              round
            >
              View
            </Button>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Button
              color="warning"
              round
            >
              Donate
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
};

ShulCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ShulCard;
