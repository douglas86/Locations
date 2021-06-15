import { Container } from '@material-ui/core';

import Appbar from './Appbar/Appbar';
import useStyles from './styles';

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.app}>
            <Container maxWidth="lg">
                <Appbar />
            </Container>
        </div>
    );
};

export default App;
