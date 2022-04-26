import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import PrivateComponent from "./components/PrivateComponent";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}></Route>
          <Route path="/" element={<h1>Product Listing</h1>}></Route>
          <Route path="/add" element={<h1>Add Product</h1>}></Route>
          <Route path="/update" element={<h1>Update Product</h1>}></Route>
          <Route path="/logout" element={<h1>Logout</h1>}></Route>
          <Route path="/profile" element={<h1>Profile</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
