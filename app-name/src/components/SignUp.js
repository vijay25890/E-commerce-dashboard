import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const Navigate = useNavigate();
  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      Navigate("/");
    }
  });

  const collectdata = async () => {
    console.log(name, password, email);
    const result = await fetch("http://localhost:5000/register", {
      method: "post",
      body: JSON.stringify({ name, password, email }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const result1 = await result.json();
    console.log(result1);
    localStorage.setItem("user", JSON.stringify(result1));
    navigate("/");
  };

  return (
    <div className="register">
      <h1>Registration</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Email"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        className="inputBox"
        type="password"
        placeholder="Enter Password"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={collectdata} className="button" type="button">
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
