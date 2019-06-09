import React from 'react';
import PropTypes from 'prop-types';

// Material Styles
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 1}px 0`
  }
});

const Footer = (props) => {
  const { classes } = props;

  return (
    <footer className={classes.footer}>
      <Typography component="p" variant="subtitle1"
        align="center" color="textSecondary"
      >
        D&s Blogs
      </Typography>
    </footer>
  );
};

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Footer);