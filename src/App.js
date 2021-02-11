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
import Contact from "./views/Contact";

function App() {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(!isOpen);
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
			<Navbar toggle={toggle} />
			<Dropdown isOpen={isOpen} toggle={toggle} />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/team" component={Team} />
				<Route path="/menu" component={Menu} />
				<Route path="/checkout" component={Checkout} />
				<Route path="/contact" component={Contact} />
			</Switch>
			<Footer />
		</>
	);
}

export default App;
