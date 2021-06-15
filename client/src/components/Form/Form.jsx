import Inputs from './Inputs.jsx';
import Btn from './Btn.jsx';
import useStyles from './styles.jsx';
import { Provider } from './Context';

const Form = () => {
    const classes = useStyles();
    return (
        <div className={classes.form}>
            <Provider>
                <Inputs />
                <Btn />
            </Provider>
        </div>
    );
};

export default Form;
