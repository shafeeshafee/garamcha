import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import Products from "../components/Products/Products";
import Fade from "react-reveal/Fade";

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
		<>
			<Fade>
				<Products products={products} onAddToCart={handleAdd} />
			</Fade>
		</>
	);
};

export default Menu;
