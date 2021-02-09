import React from "react";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<div>
			<div className="z-auto hero-img h-screen flex flex-col justify-center items-center">
				<h1 className="header-font drop-shadow text-white lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-bold mb-14">CHAILEAF</h1>
				<h2 className="header-font drop-shadow text-white center-content lg:text-3xl md:text-2xl sm:text-1xl text-1xl mb-14">
					Fresh and organic teas, delivered to your door
				</h2>
				<Link
					className="py-6 px-10 bg-yellow-500 flex rounded-full text-3xl hover:bg-yellow-300 transition duration-300 ease-in-out items-center"
					to="/"
				>
					Order Now
					<svg className="w-6 h-6 ml-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
					</svg>
				</Link>
			</div>
		</div>
	);
};
