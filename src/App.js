import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GuestDashboard from "./components/GuestDashboard";
import PropertyDetails from "./components/PropertyDetails";
import AddProperty from "./components/AddProperty";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/guest-dashboard" element={<GuestDashboard />} />
        <Route path="/property-details" element={<PropertyDetails />} />
        <Route path="/add-property" element={<AddProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
