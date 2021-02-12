import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({
  cart,
  handleUpdteCart,
  handleRemoveFromCart,
  handleEmptyCart,
}) => {
  const classes = useStyles();
  const EmptyCart = () => (
    <Typography className="h-52" variant="subtitle1">
      You have no items in your shopping cart,
      <Link className={classes.link} to="/menu">
        <span className="text-secondary ml-1">start adding some</span>
      </Link>
      !
    </Typography>
  );
  if (!cart.line_items) return "Loading ...";
  const FilledCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} sm={4} key={item.id}>
            <CartItem
              item={item}
              onUpdateCartQty={handleUpdteCart}
              onRemoveFromCart={handleRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={classes.cardDetails}>
        <Typography variant="h4">
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={classes.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={handleEmptyCart}
          >
            Empty cart
          </Button>
          <Button
            component={Link}
            to="/checkout"
            className={classes.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            Checkout
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={classes.toolbar} />
      <Typography className={classes.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
