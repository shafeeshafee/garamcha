import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import Products from "../components/Products/Products";

const Menu = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(products);
  return (
    <div className="h-screen flex-justify-center items-center bg-green-300">
      <h1 className="text-9xl uppercase font-black">Menu Page</h1>
      <Products products={products} />
    </div>
  );
};

export default Menu;
