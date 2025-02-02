import { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../../store/features/employees/employeesSlice';

const Form = ({ onSubmit }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addEmployee({ firstName, lastName }));
        onSubmit();
    };
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="firstName"
                value={firstName}
                onChange={handleChangeFirstName}
            />
                        <input
                type="text"
                name="lastName"
                value={lastName}
                onChange={handleChangeLastName}
            />
            <button type="submit">Save</button>
        </form>
    );
};
Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
