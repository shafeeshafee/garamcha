import React from "react";

export const Footer = () => {
	return (
		<div>
			<footer className="font-headings bg-gray-800 sm:mt-10 pt-10">
				<div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Who We Are</div>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Our Story
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Team
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Careers
						</a>
					</div>
					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Contribute</div>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Volunteer
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Donate
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Share
						</a>
					</div>

					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Lab Reports</div>

						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							USDA Organic Certification
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Changelog
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Rainforest Alliance
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Sponsors
						</a>
					</div>

					<div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
						<div className="text-xs uppercase text-gray-400 font-medium mb-6">Community</div>

						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							GitHub
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Discord
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							Twitter
						</a>
						<a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
							YouTube
						</a>
					</div>
				</div>

				<div className="pt-2">
					<div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-gray-400 text-sm flex-col md:flex-row max-w-6xl">
						<div className="mt-2">© Copyright Garamcha 2021. All Rights Reserved.</div>

						<div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
							<a href="#" className="w-6 mx-1">
								<i className="uil uil-facebook-f"></i>
							</a>
							<a href="#" className="w-6 mx-1">
								<i className="uil uil-twitter-alt"></i>
							</a>
							<a href="#" className="w-6 mx-1">
								<i className="uil uil-youtube"></i>
							</a>
							<a href="#" className="w-6 mx-1">
								<i className="uil uil-linkedin"></i>
							</a>
							<a href="#" className="w-6 mx-1">
								<i className="uil uil-instagram"></i>
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
};
