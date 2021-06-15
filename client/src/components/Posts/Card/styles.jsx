import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    title: {
        margin: '2%',
    },
    contianer: {
        position: 'relative',
    },
    image: {
        padding: '1.5%',
        display: 'block',
        height: '150px',
        width: '100%',
        alignItems: 'center',
    },
    btn: {
        position: 'absolute',
        top: 0,
        right: 0,
    },
    subtitle: {
        margin: '2%',
    },
});

export default useStyles;
