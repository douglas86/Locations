import { AppBar, Typography } from '@material-ui/core';
import world from '../../images/world-map.jpg';
import useStyles from './styles.jsx';

const Appbar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar
                className={classes.appBar}
                position="static"
                color="inherit"
            >
                <Typography
                    className={classes.heading}
                    variant="h5"
                    align="center"
                >
                    World Locations
                </Typography>
                <img
                    className={classes.image}
                    src={world}
                    alt="memories"
                    height="60"
                />
            </AppBar>
        </div>
    );
};

export default Appbar;
