import React from "react";
import { Link } from "react-router-dom";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

const Dropdown = ({ isOpen, toggle, totalItems }) => {
	// position: fixed;
	// width: 100%;
	// z-index: 999;
	return (
		<div className={isOpen ? "grid grid-rows-4 fixed w-full z-999 text-center items-center bg-yellow-500" : "hidden"} onClick={toggle}>
			<Link className="p-4" to="/">
				Home
			</Link>
			<Link className="p-4" to="/menu">
				Menu
			</Link>
			<Link className="p-4" to="/team">
				Team
			</Link>
			<Link className="p-4" to="/story">
				Story
			</Link>
			<Link className="p-4" to="/contact">
				Contact
			</Link>
			<IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
				<Badge badgeContent={totalItems} color="secondary">
					<ShoppingCart />
				</Badge>
			</IconButton>
		</div>
	);
};

export default Dropdown;
