import { useContext } from 'react';
import { Context } from './Context.jsx';

const Submit = () => {
    const destinations = useContext(Context);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    const handleClear = () => {
        console.log('Form cleared');
    };

    const handleInputChange = (e) => {
        e.persist();
        destinations.setForm((i) => ({
            ...i,
            [e.target.name]: e.target.value,
        }));
    };

    const handleFile = (base64) => {
        destinations.setForm((i) => ({
            ...i,
            file: base64,
        }));
    };

    return {
        handleSubmit,
        handleClear,
        handleInputChange,
        handleFile,
    };
};

export default Submit;
