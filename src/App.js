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
import Cart from "./components/Cart/Cart";
import { commerce } from "./lib/commerce";

import Contact from "./views/Contact";

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
		const { cart } = await commerce.cart.add(productId, quantity);
		setCart(cart);
	};
	const handleUpdteCart = async (productId, quantity) => {
		const { cart } = await commerce.cart.update(productId, { quantity });
		setCart(cart);
	};
	const handleRemoveFromCart = async (productId) => {
		const { cart } = await commerce.cart.remove(productId);
		setCart(cart);
	};
	const handleEmptyCart = async () => {
		const { cart } = await commerce.cart.empty();
		setCart(cart);
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
				<Route path="/contact" component={Contact} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/cart">
					<Cart
						cart={cart}
						handleUpdteCart={handleUpdteCart}
						handleRemoveFromCart={handleRemoveFromCart}
						handleEmptyCart={handleEmptyCart}
					/>
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
