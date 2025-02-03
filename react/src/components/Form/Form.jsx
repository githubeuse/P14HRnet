import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { addEmployee } from "../../store/features/employees/employeesSlice";

import DropdownMenu from "../DropdownMenu/DropdownMenu";
import { departmentOptions } from "../../constants/departmentOptions";
import {stateOptions} from "../../constants/stateOptions";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    street: "",
    city: "",
    zipCode: "",
    department: departmentOptions[0],
    state: stateOptions[0],
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleDropdownChange = (selectedOption, name) => {
    setFormData({
      ...formData,
      [name]: selectedOption,
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
        id="firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      {/* 2 */}
      <label htmlFor="lastName">Last Name</label>
      <input
        type="text"
        id="lastName"
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
          id="street"
          name="street"
          value={formData.street}
          onChange={handleChange}
        />
        {/* 6 */}
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={formData.city}
          onChange={handleChange}
        />

        {/* 7 */}

        <label htmlFor="state">State</label>
        <DropdownMenu
          inputId="state"
          options={stateOptions}
          value={formData.state}
          onChange={handleDropdownChange}
          name="state"
        />

        {/* 8 */}
        <label htmlFor="zipCode">Zip Code</label>
        <input
          type="number"
          id="zipCode"
          name="zipCode"
          value={formData.zipCode}
          onChange={handleChange}
        />
      </fieldset>

      {/* 9 */}
      <label htmlFor="department">Department</label>
      <DropdownMenu
        inputId="department"
        options={departmentOptions}
        value={formData.department}
        onChange={handleDropdownChange}
        name="department"
      />
      <button type="submit">Save</button>
    </form>
  );
};
Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
