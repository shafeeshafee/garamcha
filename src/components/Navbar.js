import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import { IconButton, Badge } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";

export const Navbar = ({ toggle, totalItems }) => {
  return (
    <nav
      className="font-headings bg-primary sticky top-0 flex justify-between items-center h-16 text-black shadow-sm header-font "
      role="navigation"
    >
      <Link to="/" className="flex items-center pl-8">
        <img src={logo} alt="" className="h-10 mx-2 " />
        Garamcha
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={toggle}>
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
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
          Menu
        </Link>
        <Link className="hover:bg-secondary p-4" to="/team">
          Team
        </Link>
        <Link className="hover:bg-secondary p-4" to="/contact">
          Contact
        </Link>
        {/* Shopping Cart Badge */}

        {/* <Link className="p-4" to="/checkout">
						<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					</Link> */}
        <IconButton
          component={Link}
          to="/cart"
          aria-label="Show cart items"
          color="inherit"
        >
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
      </div>
    </nav>
  );
};
