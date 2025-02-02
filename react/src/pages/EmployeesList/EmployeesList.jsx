// import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";

import Table from "../../components/table/table";
import Header from "../../components/Header/Header";

import { clearEmployees } from "../../store/features/employees/employeesSlice";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearEmployees());
  };

  return (
    <div>
      <Header />
      <h2>Employees List</h2>
      {employees.map((employee, index) => (
        <li key={index}>{employee.firstName}{employee.lastName}</li>

      ))}
      <button onClick={handleClear}> Effacer</button>
      <Table />
    </div>
  );
};

export default EmployeesList;
