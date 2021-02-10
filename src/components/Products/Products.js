import React from "react";
import Grid from "@material-ui/core/Grid";
import Product from "./Product/Product";

const Products = ({ products }) => {
  return (
    <main>
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default Products;
