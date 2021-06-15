import { Container } from '@material-ui/core';

import Appbar from './Appbar/Appbar';

const App = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <Appbar />
            </Container>
        </div>
    );
};

export default App;
