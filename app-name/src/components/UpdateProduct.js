import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  const updateProduct = async () => {
    console.log(name, price, category, company);
    const result = await fetch(`http://localhost:5000/product/${params.id}`, {
      method: "Put",
      body: JSON.stringify({ name, price, category, company }),
      headers: {
        "Content-Type": "Application/json",
      },
    });
    const result1 = await result.json();
    console.log(result1);
    navigate("/");
  };

  useEffect(() => {
    getProductDetils();
  }, []);

  const getProductDetils = async () => {
    console.log(params);
    const result = await fetch(`http://localhost:5000/product/${params.id}`);
    const result1 = await result.json();
    console.log(result1);
    setName(result1.name);
    setPrice(result1.price);
    setCompany(result1.company);
    setCategory(result1.category);
  };

  return (
    <div className="register">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />

      <button onClick={updateProduct} className="button">
        Update Product
      </button>
    </div>
  );
};

export default UpdateProduct;
