import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
	media: {
		height: 260,
		width: "auto",
	},
	cardContent: {
		display: "flex",
		flexWrap: "wrap",
		justifyContent: "space-between",
	},
	cartActions: {
		justifyContent: "space-between",
	},
	buttons: {
		display: "flex",
		alignItems: "center",
	},
	cartTitle: {
		fontFamily: "serif",
	},
}));
