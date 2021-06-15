import { useContext } from 'react';
import { Context } from './Context.jsx';
import Submit from './Submit.jsx';
import useStyles from './styles.jsx';
import FileBase from 'react-file-base64';

const Inputs = () => {
    const { handleInputChange, handleFile } = Submit();
    const classes = useStyles();
    const naming = ['country', 'city', 'message', 'tags'];
    const destinations = useContext(Context);

    return (
        <div>
            {naming.map((k, i) =>
                destinations.form.card !== undefined ? (
                    <div key={i}>
                        <input
                            type="text"
                            className={classes.input}
                            name={k}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                ) : (
                    <div key={i}>
                        <input
                            type="text"
                            className={classes.input}
                            placeholder={k[0].toUpperCase() + k.slice(1)}
                            onChange={handleInputChange}
                            name={k}
                            required
                        />
                    </div>
                )
            )}
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => handleFile(base64)}
                />
            </div>
        </div>
    );
};

export default Inputs;
