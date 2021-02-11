import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import Products from "../components/Products/Products";

const Menu = ({ handleAdd }) => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    // <div className="h-screen flex-justify-center items-center bg-green-300">
    //   <h1 className="text-9xl uppercase font-black">Menu Page</h1>

    // </div>
    <>
      <Products products={products} onAddToCart={handleAdd} />
    </>
  );
};

export default Menu;
