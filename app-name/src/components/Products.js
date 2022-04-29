import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const result = await fetch("http://localhost:5000/products");
    const result1 = await result.json();
    setProducts(result1);
    console.log(result1);
  };

  const deleteProduct = async (id) => {
    const result = await fetch(`http://localhost:5000/product/${id}`, {
      method: "Delete",
    });
    const result1 = await result.json();
    if (result1) {
      alert("record is deleted");
      getProducts();
    }
  };

  const searchHandle = async (e) => {
    let key = e.target.value;
    if (key) {
      let result = await fetch(`http://localhost:5000/search/${key}`);
      result = await result.json();
      if (result) {
        setProducts(result);
      }
    } else {
      getProducts();
    }
  };

  return (
    <div className="product-list">
      <h1>Products</h1>
      <input
        className="search"
        type="text"
        placeholder="Search Product"
        onChange={searchHandle}
      />
      <ul>
        <li>S.No</li>
        <li>Name</li>
        <li>Price</li>
        <li>Category</li>
        <li>Company</li>
        <li>Operation</li>
      </ul>
      {products.length > 0 ? (
        products.map((e, index) => (
          <ul key={e._id}>
            <li>{index + 1}</li>
            <li>{e.name}</li>
            <li>${e.price}</li>
            <li>{e.category}</li>
            <li>{e.company}</li>
            <li>
              <button onClick={() => deleteProduct(e._id)}>Delete</button>
              <Link to={`/update/${e._id}`}>Update</Link>
            </li>
          </ul>
        ))
      ) : (
        <h2>No data found</h2>
      )}
    </div>
  );
};

export default Products;
