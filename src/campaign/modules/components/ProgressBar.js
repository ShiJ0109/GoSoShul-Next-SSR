import React from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from './Typography';

const styles = (theme) => ({
  containerStyles : {
    height: 100,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 0,
    margin: 0,
    position: 'absolute',
    zIndex : '-2'

  },
    
  labelStyles : {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  },
  
  textStyles : {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex : '-1'
  },
  titleStyles : {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    textStyles: 'bottom'
  },
});
const ProgressBar = (props) => {
  const { bgcolor, completed, classes } = props;
  
  const containerStyles = {
    height: 100,
    width: '100%',
    backgroundColor: "#e0e0de",
    borderRadius: 0,
    margin: 0,
    position: 'absolute',
    zIndex: '-2',
  }
  
  const fillerStyles = {
    height: '100%',
    width: `${completed}%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'left',
    zIndex : '-1',
    position: 'absolute',
  }
  
  const labelStyles = {
    padding: 5,
    color: 'white',
    fontWeight: 'bold'
  }

  const textStyles = {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex : '10'
  };

  return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <Typography variant="h6" className={classes.title}>
                {`${completed}%`}
              </Typography>
              <Typography variant="h6" className={classes.title}>
                Achieved
              </Typography>
        </div>
      </div>
  );
};
ProgressBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgressBar);