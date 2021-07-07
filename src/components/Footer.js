import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
	return (
		<div>
			<footer className="font-headings bg-gray-800 pt-10">
				<div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Who We Are</div>
						<Link to="/story" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Our Story
						</Link>
						<Link to="/team" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Team
						</Link>
						<Link to="/contact" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Contact
						</Link>
					</div>
					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Contribute</div>
						<a
							href="https://irusa.org/asia/bangladesh/"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							Donate
						</a>
						<a
							href="https://www.gooverseas.com/volunteer-abroad/bangladesh"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							Volunteer
						</a>
						<a
							href="https://github.com/shafeeshafee/garamcha"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							Share
						</a>
					</div>

					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Lab Reports</div>

						<a
							href="https://www.thedailystar.net/lifestyle/special-feature/news/tale-tea-bangladesh-the-world-1631953"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							USDA Organic Certification
						</a>
						<a
							href="https://www.rainforest-alliance.org/articles/rainforest-alliance-certified-tea"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							Rainforest Alliance
						</a>
						<a
							href="https://www.theknowledgehouse.org/"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							Sponsors
						</a>
					</div>

					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Community</div>
						<a
							href="https://github.com/shafeeshafee/garamcha"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							GitHub
						</a>
						<Link to="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Discord
						</Link>
						<a
							href="https://twitter.com/ShafSunbather"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							Twitter
						</a>
						<a
							href="https://youtu.be/L12RURX5UlU"
							className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"
						>
							YouTube
						</a>
					</div>
				</div>

				<div className="pt-2">
					<div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
						<div className="mt-2">© Copyright Garamcha 2021. All Rights Reserved.</div>

						<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
							<p className="opacity-50">Sip responsibly! 🍵</p>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
