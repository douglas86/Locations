import { Card } from 'react-bootstrap';
import { Typography, Button, CardActions } from '@material-ui/core';
import moment from 'moment';
import useStyles from './styles.jsx';

// Icons form material-ui
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Cards = (post) => {
    const classes = useStyles();
    console.log(post.post);
    return (
        <div>
            <Card style={{ width: '15rem' }}>
                <Card.Title className={classes.title}>
                    {post.post.country}
                </Card.Title>
                <div className={classes.contianer}>
                    <Button
                        className={classes.btn}
                        style={{ color: 'purple' }}
                        size="small"
                        onClick={() => {}}
                    >
                        <MoreHorizIcon fontSize="default" />
                    </Button>
                    <Card.Img
                        className={classes.image}
                        variant="top"
                        src={post.post.selectedFile}
                    />
                </div>
                <Card.Subtitle className={classes.subtitle}>
                    {post.post.city}
                </Card.Subtitle>
                <Card.Body>
                    <Card.Text>
                        {moment(post.post.createdAt).fromNow()}
                    </Card.Text>
                    <Card.Text>{post.post.message}</Card.Text>
                    <Typography variant="body2" color="textSecondary">
                        {post.post.tags.map((tag) => `#${tag}`)}
                    </Typography>
                </Card.Body>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <ThumbUpAltIcon fontSize="small" />
                        Like {post.post.likeCount}
                    </Button>
                    <Button size="small" color="primary" onClick={() => {}}>
                        <DeleteIcon fontSize="small" />
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
};

export default Cards;
