import React, { Component } from 'react';
import PropsTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

const styles = theme => ({
    mainGrid: {
        margintTop: theme.spacing(3)
    }
});

class Post extends Component {
    render(){
        const { classes } = this.props;

        return(
            <Grid container spacing={4} className={classes.mainGrid}>
                <Grid item xs={12} md={8}>
                    <Typography variant="h6" gutterBottom>
                        {this.props.title}
                    </Typography>
                    <Divider />

                    <Typography variant="subtitle1" color="textSecondary">
                        {this.props.date}
                    </Typography>

                    <Typography variant="subtitle1" paragraph>
                        {this.props.body}
                    </Typography>

                    <Button color="primary" variant="outlined">목록으로</Button>
                </Grid>
            </Grid>
        )
    }
}

Post.propTypes ={
    classes: PropsTypes.object.isRequired
};

export default withStyles(styles)(Post);