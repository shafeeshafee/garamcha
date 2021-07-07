import React from "react";
import Grid from "@material-ui/core/Grid";

import Product from "./Product/Product";
import useStyles from "./styles";

import LoadingGif from "../../images/loading.gif";

const Products = ({ products, onAddToCart }) => {
	const classes = useStyles();

	if (!products?.length)
		return (
			<div className="min-h-screen flex items-center">
				<img className="m-auto" src={LoadingGif} />
			</div>
		);

	const user = localStorage.getItem("user-info");

	return (
		<div>
			<h1 className="w-full m-auto p-5 text-center absolute font-headings text-gray-800 font-bold text-6xl">
				{user ? "Our Collection" : ""}
			</h1>
			<main className={classes.content}>
				<div className={classes.toolbar} />
				<Grid container justify="center" spacing={4}>
					{products.map((product) => (
						<Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
							<Product product={product} onAddToCart={onAddToCart} />
						</Grid>
					))}
				</Grid>
			</main>
		</div>
	);
};

export default Products;
