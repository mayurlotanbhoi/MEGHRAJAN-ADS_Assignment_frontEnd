import React, { createContext, useState, useEffect } from "react";
import "./App.css";

import { Routes, Route } from "react-router-dom";

import { Navbar, ProductCard, ProductDetailForm } from "./Componant";

export const ContextApi = createContext();

function App() {
  const [prosuct, setProsuct] = useState([]);
  const [reLoader, setreLoader] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/user/getProductDetails")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProsuct(data);
      })
      .catch((e) => console.log(e));
  }, [reLoader]);

  return (
    <ContextApi.Provider value={{ prosuct, setProsuct, setreLoader }}>
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<ProductCard />} />
          <Route path="/addProduct" element={<ProductDetailForm />} />
        </Routes>

        {/* <ProductCard /> */}
      </div>
    </ContextApi.Provider>
  );
}

export default App;
