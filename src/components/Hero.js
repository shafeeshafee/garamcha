import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

export const Hero = () => {
	return (
		<div className="lg:flex lg:flex-row md:flex md:flex-col sm:flex sm:flex-col">
			<div className="xl:inline-block sm:hidden hero-img h-screen w-full"></div>
			<div className="sm:text-sm h-screen w-full">
				<div className="h-screen flex flex-col justify-center items-center">
					<img src={logo} alt="" className="my-5" />
					<h1 className="font-headings bg-primary p-2 text-black lg:text-8xl md:text-4xl sm:text-3xl text-2xl font-bold mb-14 flex justify-center items-center">
						Garamcha
					</h1>
					<h2 className="font-headings text-black font-bold center-content lg:text-3xl md:text-2xl sm:text-1xl text-1xl mb-14">
						Teas. To you, from Bangladesh, with love.
					</h2>
					<Link
						className="py-6 px-10 bg-secondary flex rounded-full text-3xl hover:bg-primary transition duration-300 ease-in-out items-center"
						to="/"
					>
						Order Now
						<svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
						</svg>
					</Link>
				</div>
			</div>
		</div>
	);
};
