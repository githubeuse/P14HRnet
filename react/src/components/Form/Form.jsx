import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/features/employees/employeesSlice';

const Form = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFirstName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee({ firstName }));
        onSubmit();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChange}
                placeholder="First Name"
            />
            <button type="submit">Save</button>
        </form>
    );
};
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
