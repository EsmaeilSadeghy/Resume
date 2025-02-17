import React, { useState } from "react";
import "../styles/Login.css";

const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      if (!email || !password) {
        alert("Please fill in both email and password");
        return;
      }
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token); // ذخیره توکن در localStorage
        setToken(data.token); // بروزرسانی وضعیت توکن در کامپوننت والد
        alert("Login successful");
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="log">
      <h1>Login System</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
