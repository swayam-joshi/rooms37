import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GuestDashboard = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [properties, setProperties] = useState([]);

    const fetchProperties = async () => {
        try {
            const response = await axios.post("https://d644-14-98-244-193.ngrok-free.app/listings", {
                start_date: startDate,
                end_date: endDate,
            });
            setProperties(response.data);
        } catch (error) {
            console.error("Error fetching properties:", error);
        }
    };

    return (
        <div>
            <h1>Available Properties</h1>
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
            <button onClick={fetchProperties}>Search</button>
            {properties.map((property) => (
                <div key={property.id}>
                    <h3>{property.prop_name}</h3>
                    <p>{property.description}</p>
                    <Link to={`/book/${property.id}`}>Book Now</Link>
                </div>
            ))}
        </div>
    );
};

export default GuestDashboard;
