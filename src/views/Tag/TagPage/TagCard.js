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

const TagCard = ({ className, product, ...rest }) => {
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
          spacing={2}
        >
          <Grid
            item
          >
            <Box
              display="flex"
              justifyContent="center"
              mb={3}
            >
              <Typography
                align="center"
                color="textPrimary"
                gutterBottom
                variant="h4"
              >
                Josh Bochner
              </Typography>
              <Avatar
                alt="Product"
                src={product.media}
                variant="square"
              />
            </Box>
            <Typography
              align="center"
              color="textPrimary"
              variant="h4"
            >
              Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Quisque at leo tellus.
            </Typography>
          </Grid>
          <Grid
            className={classes.statsItem}
            item
          >
            <Avatar
              alt="Product"
              src={product.media}
              variant="square"
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TagCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default TagCard;
