import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  const handleLogin = async () => {
    console.log(email, password);
    const result = await fetch("http://localhost:5000/login", {
      method: "post",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result1 = await result.json();
    console.log(result1);
    if (result1.name) {
      localStorage.setItem("user", JSON.stringify(result1));
      navigate("/");
    } else {
      alert("please enter correct details");
    }
  };

  return (
    <div className="register">
      <h1>Login Page</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button onClick={handleLogin} className="button" type="button">
        Login
      </button>
    </div>
  );
};

export default Login;
