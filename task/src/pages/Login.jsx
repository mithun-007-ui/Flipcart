import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
   if (email === "admin@gmail.com" && password === "12345") {
      alert("Login Successful ");
      navigate("/"); 
    } else {
      setError("Invalid email or password ");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {/* {error && <p className="error">{error}</p>} */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
