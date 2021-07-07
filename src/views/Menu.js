import React, { useState, useEffect } from "react";
import { commerce } from "../lib/commerce";
import Products from "../components/Products/Products";
import { useHistory } from "react-router";
import Fade from "react-reveal/Fade";

const Menu = ({ handleAdd }) => {
	const [products, setProducts] = useState([]);
	const history = useHistory();

	const fetchProducts = async () => {
		const { data } = await commerce.products.list();
		setProducts(data);
	};

	useEffect(() => {
		fetchProducts();
	}, []);

	// const user = localStorage.getItem("user-info");

	// useEffect(() => {
	// 	if (!user) history.push("/login");
	// }, [history]);

	return (
		<>
			<Fade>
				<Products products={products} onAddToCart={handleAdd} />
			</Fade>
		</>
	);
};

export default Menu;
