import React from "react";
import Modal from "./Modal";
import Sidebar from "./Sidebar";
import Home from "./Home";
import { FaBars } from "react-icons/fa";
function App() {
  return (
    <>
      <Modal />
      <Sidebar />
      <Home />
    </>
  );
}

export default App;
