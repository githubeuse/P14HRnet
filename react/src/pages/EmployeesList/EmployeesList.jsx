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
    { name: 'First Name', selector: row => row.firstName, sortable: true }, //1
    { name: 'Last Name', selector: row => row.lastName, sortable: true }, //2
    //3 start date
    { name: 'Department', selector: row => row.department?.value, sortable: true }, //4
    // date of birth
    { name: 'Street', selector: row => row.street, sortable: true }, //6
    { name: 'City', selector: row => row.city, sortable: true }, //7
    { name: 'State', selector: row => row.state?.abbreviation, sortable: true }, //8
    { name: 'Zip Code', selector: row => row.zipCode, sortable: true }, //9
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
