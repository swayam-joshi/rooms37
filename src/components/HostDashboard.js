import React, { useState } from "react";
import axios from "axios";

const HostDashboard = () => {
    const [property, setProperty] = useState({
        host_id: "",
        address: "",
        city: "",
        state: "",
        country: "",
        description: "",
        property_type: "",
        prop_name: "",
        price_nightly: "",
    });

    const handleAddProperty = async () => {
        try {
            await axios.post("http://url:5000/list-property", property);
            alert("Property Listed Successfully!");
        } catch (error) {
            console.error("Error listing property:", error);
        }
    };

    return (
        <div>
            <h1>Add Property</h1>
            <input type="text" placeholder="Host ID" onChange={(e) => setProperty({ ...property, host_id: e.target.value })} />
            {/* Add other inputs for property details */}
            <button onClick={handleAddProperty}>Add Property</button>
        </div>
    );
};

export default HostDashboard;
