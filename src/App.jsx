import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from "./Signup";
import RegistrationSuccess from "./RegistrationSuccess"; // Import the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Signup />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        {/* Other routes */}
      </Routes>
    </Router>
  );
}

export default App;


