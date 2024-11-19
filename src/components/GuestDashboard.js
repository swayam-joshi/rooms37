import React, { useEffect, useState } from "react";
import axios from "axios";

function GuestDashboard() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/properties").then((response) => {
      setProperties(response.data);
    });
  }, []);

  return (
    <div>
      <h1>Available Properties</h1>
      {properties.map((property) => (
        <div key={property.id}>
          <h2>{property.name}</h2>
          <p>{property.description}</p>
          <button>Book Now</button>
        </div>
      ))}
    </div>
  );
}

export default GuestDashboard;
