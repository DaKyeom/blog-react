import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = themes => ({
    pagination: {
        marginTop: '2rem',
        display: 'flex',
        alignItems: 'center'
    },
    page: {
        fontSize: '0.85rem',
        textAlign: 'center',
        flex: 1
    }
});

const pagination = (props) => {
    const { classes } = props;

    return (
        <div className={classes.pagination}>
            <Button variant="contained" disabled>이전 페이지</Button>
            <div className={classes.page}>1페이지</div>
            <Button variant="contained" color="primary">다음 페이지</Button>
        </div>
    )
};

pagination.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(pagination);