import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles,
  Typography
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const TagInput = () => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid
        item
        md={2}
        xs={12}
      >
        <Typography
          align="center"
          color="textPrimary"
          gutterBottom
          variant="h4"
        >
          1
        </Typography>
      </Grid>
      <Grid
        item
        md={2}
        xs={12}
      >
        <TextField
          fullWidth
          helperText="Please specify the first name"
          label="First name"
          name="firstName"
          onChange={handleChange}
          required
          value={values.firstName}
          variant="outlined"
        />
      </Grid>
      <Grid
        item
        md={2}
        xs={12}
      >
        <TextField
          fullWidth
          label="Last name"
          name="lastName"
          onChange={handleChange}
          required
          value={values.lastName}
          variant="outlined"
        />
      </Grid>
      <Grid
        item
        md={6}
        xs={12}
      >
        <TextField
          fullWidth
          label="Email Address"
          name="email"
          onChange={handleChange}
          required
          value={values.email}
          variant="outlined"
        />
      </Grid>
    </Grid>
  );
};

const TagDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstName: 'Katarina',
    lastName: 'Smith',
    email: 'demo@devias.io',
    phone: '',
    state: 'Alabama',
    country: 'USA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const TagNumber = [1, 2, 3, 4];
  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          {
              TagNumber.map((number) => (
                <Grid
                  container
                  spacing={3}
                >
                  <Grid
                    item
                    md={2}
                    xs={12}
                  >
                    <Typography
                      align="center"
                      color="textPrimary"
                      gutterBottom
                      variant="h4"
                    >
                      { number }
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    md={2}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      helperText="Please specify the first name"
                      label="First name"
                      name="firstName"
                      onChange={handleChange}
                      required
                      value={values.firstName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={2}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Last name"
                      name="lastName"
                      onChange={handleChange}
                      required
                      value={values.lastName}
                      variant="outlined"
                    />
                  </Grid>
                  <Grid
                    item
                    md={6}
                    xs={12}
                  >
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      onChange={handleChange}
                      required
                      value={values.email}
                      variant="outlined"
                    />
                  </Grid>
                </Grid>
              ))
}
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

TagDetails.propTypes = {
  className: PropTypes.string
};

export default TagDetails;
