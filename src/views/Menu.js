import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import Products from "../components/Products/Products";

const Menu = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };
  console.log(cart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    // <div className="h-screen flex-justify-center items-center bg-green-300">
    //   <h1 className="text-9xl uppercase font-black">Menu Page</h1>

    // </div>
    <>
      <Products products={products} onAddToCart={handleAddToCart} />
    </>
  );
};

export default Menu;
