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
} from '@material-ui/core';

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

const MainState = ({ className, ...rest }) => {
  const classes = useStyles();
  const Contents = [
    {
      name: 'You Started',
      state: '7 Days',
    },
    {
      name: 'You`ve Raised',
      state: '$3,456.77',
    },
    {
      name: 'Tagged',
      state: '2',
    },
    {
      name: 'Social',
      state: '6',
    },
    {
      name: 'Total Network',
      state: '263',
    },
  ];
  const RenderContents = Contents.map((content) => {
    return (
      <div>
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
      </div>
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
          { RenderContents }
        </Grid>
      </CardContent>
    </Card>
  );
};

MainState.propTypes = {
  className: PropTypes.string
};

export default MainState;
