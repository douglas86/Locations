import Card from './Card/Card';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';
import { Spinner } from 'react-bootstrap';
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    return (
        <div className={classes.card}>
            {!posts.length ? (
                <Spinner animation="border" />
            ) : (
                <Grid
                    className={classes.container}
                    container
                    alignItems="stretch"
                    spacing={10}
                >
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={4}>
                            <Card post={post} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default Posts;
