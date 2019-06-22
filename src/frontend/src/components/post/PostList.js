import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    card: {
        display: 'flex'
    },
    cardDetails: {
        flex: 1
    }
});

const postTests = [
    {
        id: 1,
        title: '제목 1',
        body: '내용 1',
        date: '2018-02-11'
    },
    {
        id:2,
        title: '제목2',
        body:  '내용2',
        date: '2019-06-22'
    }
];

const PostList = (props) => {
    const { classes } =props;

    return(
        <Grid container spacing={4} className={classes.cardGrid}>
            {postTests.map(post => (
                <Grid item key={post.id} xs={12} md={6}>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    { post.title }
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    { post.date }
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    { post.body }
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    자세히 보기
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}

PostList.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostList);