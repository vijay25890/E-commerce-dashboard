import React from "react";
import { useState } from "react";

const UpdateProduct = () => {
  const [name1, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");

  const updateProduct = async () => {
    console.log(name1, price, category, company);
  };

  return (
    <div className="register">
      <h1>Update Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        value={name1}
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
