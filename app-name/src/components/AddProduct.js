import React from "react";
import { useState } from "react";

const AddProduct = () => {
  const [name1, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState(false);

  const addProduct = async () => {
    if (!name1 || !price || !category || !company) {
      setError(true);
      return false;
    }
    console.log(name1, price, category, company);
    const userId = JSON.parse(localStorage.getItem("user"))._id;
    const result = fetch("http://localhost:5000/add-product", {
      method: "post",
      body: JSON.stringify({ name: name1, price, category, company, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result1 = await result.json();
    console.log(result1);
  };

  return (
    <div className="register">
      <h1>Add Product</h1>
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Name"
        value={name1}
        onChange={(e) => setName(e.target.value)}
      />
      {error && !name1 && <span className="span">Enter valid name</span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      {error && !price && <span className="span">Enter valid price</span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      {error && !category && <span className="span">Enter valid category</span>}
      <input
        className="inputBox"
        type="text"
        placeholder="Enter Product Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      {error && !company && <span className="span">Enter valid company</span>}
      <button onClick={addProduct} className="button">
        Add Product
      </button>
    </div>
  );
};

export default AddProduct;
