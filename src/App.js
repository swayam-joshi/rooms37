import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import GuestDashboard from "./components/GuestDashboard";
import BookingPage from "./components/BookingPage";
import PropertyDetails from "./components/PropertyDetails";
import AddProperty from "./components/AddProperty";
import HostDashboard from "./components/HostDashboard";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/guest-dashboard" element={<GuestDashboard />} />
                <Route path="/property/:propertyId" element={<PropertyDetails />} />
                <Route path="/book/:propertyId" element={<BookingPage />} />
                <Route path="/host-dashboard" element={<HostDashboard />} />
                <Route path="/add-property" element={<AddProperty />} />
            </Routes>
        </Router>
    );
}

export default App;
