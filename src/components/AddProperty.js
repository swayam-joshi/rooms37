import React, { useState } from "react";
import axios from "axios";

function AddProperty() {
  const [property, setProperty] = useState({ name: "", description: "" });

  const handleAdd = () => {
    axios.post("http://localhost:5000/properties", property).then(() => {
      alert("Property Added!");
    });
  };

  return (
    <div>
      <h1>Add Property</h1>
      <label>
        Property Name:
        <input
          type="text"
          value={property.name}
          onChange={(e) =>
            setProperty({ ...property, name: e.target.value })
          }
        />
      </label>
      <label>
        Description:
        <input
          type="text"
          value={property.description}
          onChange={(e) =>
            setProperty({ ...property, description: e.target.value })
          }
        />
      </label>
      <button onClick={handleAdd}>Add Property</button>
    </div>
  );
}

export default AddProperty;
