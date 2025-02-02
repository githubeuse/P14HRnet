import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../store/features/employees/employeesSlice";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addEmployee(formData));
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* 1 */}
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      {/* 2 */}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <fieldset>
        <legend>Address</legend>
        {/* 5 */}
        <label htmlFor="street">Street</label>
        <input
          type="text"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {/* 6 */}
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        {/* 8 */}
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </fieldset>
      <button type="submit">Save</button>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
