import React, { useState } from "react";
import axios from "axios";

const AddProperty = () => {
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

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProperty({ ...property, [name]: value });
    };

    const handleAddProperty = async () => {
        try {
            await axios.post("http://url:5000/list-property", property);
            alert("Property Listed Successfully!");
            setProperty({
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
        } catch (error) {
            console.error("Error listing property:", error);
        }
    };

    return (
        <div>
            <h1>Add a New Property</h1>
            <form>
                <input
                    type="text"
                    name="host_id"
                    placeholder="Host ID"
                    value={property.host_id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={property.address}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={property.city}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={property.state}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="country"
                    placeholder="Country"
                    value={property.country}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Description"
                    value={property.description}
                    onChange={handleChange}
                    required
                ></textarea>
                <input
                    type="text"
                    name="property_type"
                    placeholder="Property Type"
                    value={property.property_type}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="prop_name"
                    placeholder="Property Name"
                    value={property.prop_name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="number"
                    name="price_nightly"
                    placeholder="Price per Night"
                    value={property.price_nightly}
                    onChange={handleChange}
                    required
                />
                <button type="button" onClick={handleAddProperty}>
                    Add Property
                </button>
            </form>
        </div>
    );
};

export default AddProperty;
