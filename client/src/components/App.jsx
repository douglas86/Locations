import { Container, Grow, Grid } from '@material-ui/core';

import Appbar from './Appbar/Appbar';
import useStyles from './styles';
import Posts from './Posts/Posts';
import Form from './Form/Form';

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Container maxWidth="lg">
                <Appbar />
                <Grow in>
                    <Container>
                        <Grid
                            container
                            justify="space-between"
                            alignItems="stretch"
                            spacing={3}
                        >
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    );
};

export default App;
