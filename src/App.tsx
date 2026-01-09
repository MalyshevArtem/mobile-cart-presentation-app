import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import ShoppingCart from "./pages/ShoppingCart.tsx";
import MainLayout from "./layouts/MainLayout.tsx";
import { useState, useEffect } from "react";
import type { Product } from "./types/Types";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`${import.meta.env.BASE_URL}/data/products.json`);
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout products={products}/>}>
            <Route path="/" element={<Home products={products}/>}></Route>
            <Route path="/cart" element={<ShoppingCart products={products}/>}></Route>
          </Route>
        </Routes>
      </HashRouter>
    </>
  )
}

export default App
