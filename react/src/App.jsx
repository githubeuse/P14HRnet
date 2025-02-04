import { useState } from "react";
import { Link } from "react-router-dom";

import Header from "./components/Header/Header";
import Form from "./components/Form/Form"
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
      <h2>Documentation</h2>
      <h2>Rapport de performance</h2>
      <h2>Test</h2>
    </div>
  );
}

export default App;
