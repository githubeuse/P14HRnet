import { useSelector, useDispatch } from "react-redux";

import Table from "../../components/Table/Table";
import Header from "../../components/Header/Header";

import { clearEmployees } from "../../store/features/employees/employeesSlice";

const EmployeesList = () => {
  const employees = useSelector((state) => state.employees);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearEmployees());
  };

  const columns = [
    { name: 'First Name', selector: row => row.firstName, sortable: true },
    { name: 'Last Name', selector: row => row.lastName, sortable: true },
    { name: 'Street', selector: row => row.street, sortable: true },
    { name: 'City', selector: row => row.city, sortable: true },
    { name: 'Zip Code', selector: row => row.zipCode, sortable: true }
  ]

  return (
    <div>
      <Header />
      <h2>Employees List</h2>
      <Table columns={columns} data={employees} />
      <button onClick={handleClear}> Effacer</button>
    </div>
  );
};

export default EmployeesList;
