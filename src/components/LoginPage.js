import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (role === "guest") {
      navigate("/guest-dashboard");
    } else if (role === "host") {
      navigate("/add-property");
    }
  };

  return (
    <div>
      <h1>Welcome to Rooms37</h1>
      <label>
        Login as:
        <select onChange={(e) => setRole(e.target.value)} value={role}>
          <option value="">Select Role</option>
          <option value="guest">Guest</option>
          <option value="host">Host</option>
        </select>
      </label>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default LoginPage;
