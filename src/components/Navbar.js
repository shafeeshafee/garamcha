import logo from "../images/logo.png";
import { IconButton, Badge } from "@material-ui/core";
import { useEffect } from "react";
import { ShoppingCart } from "@material-ui/icons";
import { Link, useHistory, useLocation } from "react-router-dom";

export const Navbar = ({ toggle, totalItems, displayNav }) => {
	const history = useHistory();

	const user = localStorage.getItem("user-info");

	const parseUsername = (email) => {
		let str = "";
		for (let letter of email) {
			if (letter !== "@") {
				str += letter;
			} else {
				break;
			}
		}
		return str;
	};

	useEffect(() => {
		if (!user) history.push("/login");
	}, [history]);

	const handleLogOut = () => {
		localStorage.removeItem("user-info");
		history.push("/login");
		history.go(0);
	};

	return (
		<nav
			className="font-headings bg-primary sticky z-40 top-0 flex justify-between items-center h-16 text-black shadow-sm header-font"
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

				{/* if user is signed in, show them shopping cart, otherwise show them login */}
				{user ? (
					<>
						<div className="relative inline-flex justify-center items-center ml-5 mr-10">
							<div className="bg-primary flex flex-col justify-center">
								<div className="flex items-center justify-center">
									<div className=" relative inline-block text-left dropdown">
										<span className="rounded-md shadow-sm">
											<button
												className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out bg-primary border border-black rounded-md hover:text-gray-500 focus:outline-none active:bg-gray-50 active:text-gray-800"
												type="button"
												aria-haspopup="true"
												aria-expanded="true"
												aria-controls="headlessui-menu-items-117"
											>
												<span>
													<img className="h-5" src="https://www.svgrepo.com/show/264/user.svg" alt="" />
												</span>
												<svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor">
													<path
														fill-rule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clip-rule="evenodd"
													></path>
												</svg>
											</button>
										</span>
										<div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
											<div
												className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none"
												aria-labelledby="headlessui-menu-button-1"
												id="headlessui-menu-items-117"
												role="menu"
											>
												<div className="px-4 py-3">
													<p className="text-sm leading-5">Signed in as</p>
													<p className="text-sm font-medium leading-5 text-gray-900 truncate">{user}</p>
												</div>
												<div className="py-1">
													<button
														className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left"
														onClick={handleLogOut}
													>
														Sign out
													</button>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
							<Badge badgeContent={totalItems} color="secondary">
								<ShoppingCart />
							</Badge>
						</IconButton>
					</>
				) : (
					<IconButton component={Link} to="/login" aria-label="Show cart items" color="inherit">
						<Badge badgeContent={totalItems} color="secondary">
							<ShoppingCart />
						</Badge>
					</IconButton>
				)}
			</div>
		</nav>
	);
};
