import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Header, Footer } from 'components/common';

import { withStyles } from '@material-ui/core/styles';
import CssBaseLine from '@material-ui/core/CssBaseline';

const styles = theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
            width: 1100,
            marginLeft: 'auto',
            marginRight: 'auto'
        }
    }
});

class PageTemplate extends Component {
  render() {
    const { classes } = this.props;

    return (
      <>
        <CssBaseLine />
        <div className={classes.layout}>
          <Header />
          <main>
            { this.props.children }
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

PageTemplate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PageTemplate);