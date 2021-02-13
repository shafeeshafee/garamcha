import { Link, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

export const Navbar = ({ toggle, totalItems }) => {
	const location = useLocation();
	return (
		<nav
			className="font-headings bg-primary sticky z-40 top-0 flex justify-between items-center h-16 text-black shadow-sm header-font "
			role="navigation"
		>
			<Link to="/" className="flex items-center pl-8">
				<img src={logo} alt="" className="h-10 mx-2 " />
				Garamcha
			</Link>
			<div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
				<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
					/>
				</svg>
			</div>
			<div className="pr-8 xl:flex md:block hidden">
				<Link className="hover:bg-secondary p-4" to="/">
					Home
				</Link>
				<Link className="hover:bg-secondary p-4" to="/menu">
					Shop
				</Link>
				<Link className="hover:bg-secondary p-4" to="/team">
					Team
				</Link>
				<Link className="hover:bg-secondary p-4" to="/story">
					Story
				</Link>
				<Link className="hover:bg-secondary p-4" to="/contact">
					Contact
				</Link>
				<IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
					<Badge badgeContent={totalItems} color="secondary">
						<ShoppingCart />
					</Badge>
				</IconButton>
			</div>
		</nav>
	);
};
