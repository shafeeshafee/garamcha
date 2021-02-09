import { Link } from "react-router-dom";

export const Navbar = ({ toggle }) => {
	return (
		<nav
			className="sticky top-0 flex justify-between items-center h-16 bg-white text-black relative shadow-sm header-font "
			role="navigation"
		>
			<Link to="/" className="pl-8">
				ChaiLeaf
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
			<div className="pr-8 md:block hidden">
				<Link className="p-4" to="/">
					Home
				</Link>
				<Link className="p-4" to="/menu">
					Menu
				</Link>
				<Link className="p-4" to="/about">
					About
				</Link>
				<Link className="p-4" to="/contact">
					Contact
				</Link>
			</div>
		</nav>
	);
};
