import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form"
import DatePicker from "./components/DatePicker/DatePicker";
import Menu from "./components/Menu/Menu";
import Modal from "./components/Modal/Modal";

import "./App.css";

function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="appDiv">
      <Header />
      <h2>Create Employee</h2>
      <Link to="/employeesList">View Current Employees</Link>
      <Form onSubmit={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={closeModal} />
      <DatePicker />
      <Menu />
    </div>
  );
}

export default App;
