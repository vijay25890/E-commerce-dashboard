import React, { useState } from "react";

const SignUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const collectdata = () => {
    console.log(name, password, email);
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
