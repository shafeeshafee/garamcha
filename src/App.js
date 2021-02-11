import "./App.css";
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import Home from "./views/Home";
import Team from "./views/Team";
import Menu from "./views/Menu";
import Dropdown from "./components/Dropdown";
import Checkout from "./views/Checkout";
import { commerce } from "./lib/commerce";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState({});

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    setCart(response);
  };
  useEffect(() => {
    fetchCart();
  }, []);
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  }, [isOpen]);

  return (
    <>
      <Navbar toggle={toggle} totalItems={cart.total_items} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/team" component={Team} />
        <Route path="/menu">
          <Menu handleAdd={handleAddToCart} />
        </Route>
        <Route path="/checkout" component={Checkout} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
