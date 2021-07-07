import React from "react";
import { Typography, Button, Card, CardActions, CardContent, CardMedia } from "@material-ui/core";
import useStyles from "./styles";

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
	const classes = useStyles();
	return (
		<Card className="p-3 h-full flex justify-between flex-col">
			<CardMedia image={item?.media?.source} className={classes.media} />
			<CardContent className={classes.cardContent}>
				<Typography className={classes.cartTitle} variant="h4">
					{item.name}
				</Typography>
				<Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<div className={classes.buttons}>
					<Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>
						-
					</Button>
					<Typography>{item.quantity}</Typography>
					<Button type="button" size="small" onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>
						+
					</Button>
				</div>
				<Button
					style={{ background: "#1F2937" }}
					variant="contained"
					type="button"
					color="secondary"
					onClick={() => onRemoveFromCart(item.id)}
				>
					Remove
				</Button>
			</CardActions>
		</Card>
	);
};

export default CartItem;
