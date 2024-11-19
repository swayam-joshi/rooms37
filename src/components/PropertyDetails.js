import React, { useState } from "react";

function PropertyDetails() {
  const [details, setDetails] = useState({ name: "", payment: "" });

  const handleSubmit = () => {
    alert("Booking Successful!");
  };

  return (
    <div>
      <h1>Book Property</h1>
      <label>
        Name:
        <input
          type="text"
          value={details.name}
          onChange={(e) => setDetails({ ...details, name: e.target.value })}
        />
      </label>
      <label>
        Payment Details:
        <input
          type="text"
          value={details.payment}
          onChange={(e) => setDetails({ ...details, payment: e.target.value })}
        />
      </label>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default PropertyDetails;
