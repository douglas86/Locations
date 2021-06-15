import { useContext } from 'react';
import { Context } from './Context.jsx';
import Submit from './Submit.jsx';
import useStyles from './styles.jsx';
import FileBase from 'react-file-base64';

const Inputs = () => {
    const { handleInputChange } = Submit();
    const classes = useStyles();
    const naming = ['country', 'city', 'message', 'tags'];
    const destinations = useContext(Context);

    return (
        <div>
            {naming.map((k, i) => (
                <div key={k}>
                    <input
                        type="text"
                        className={classes.inputs}
                        onChange={handleInputChange}
                        placeholder={naming[i]}
                        name={naming[i]}
                        value={destinations.form.k}
                        required
                    />
                </div>
            ))}
            <div className={classes.fileInput}>
                <FileBase
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) =>
                        destinations.setForm({
                            ...destinations.form,
                            selectedFile: base64,
                        })
                    }
                />
            </div>
        </div>
    );
};

export default Inputs;
