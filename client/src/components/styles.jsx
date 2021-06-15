import { makeStyles } from '@material-ui/core/styles';
import background from '../images/background.jpeg';

const useStyles = makeStyles({
    app: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        marginTop: '-30px',
    },
});

export default useStyles;
