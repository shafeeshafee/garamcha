import React from "react";
import happyLady from "../images/happy-lady.jpg";
import happyKids from "../images/happy-kids.jpg";

const Community = () => {
	return (
		<div>
			<div className="xl:flex xl:flex-row lg:flex lg:flex-row justify-evenly md:flex-col sm:flex-col">
				<div className="menu-card">
					<img src={happyLady} alt="" className="h-5/6 w-auto rounded mb-20 shadow" />
					<div className="center-content">
						<h1 className="text-2xl mb-2 flex items-center">
							<svg className="w-6 h-6 mx-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
								/>
							</svg>
							Cultivated With Love
						</h1>
						<p className="mb-2 text-center">Garamcha teas are gathered by beautiful people from a beautiful land.</p>
					</div>
				</div>
				<div className="menu-card">
					<img src={happyKids} alt="" className="h-5/6 w-auto rounded mb-20 shadow" />
					<div className="center-content">
						<h1 className="text-2xl mb-2 flex items-center">
							<svg className="w-6 h-6 mx-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
								/>
							</svg>
							Community
						</h1>
						<p className="mb-2 text-center">We donate a pair of shoes to a child in need for every tea box ordered.</p>
					</div>
				</div>
			</div>
			<div>
				<hr />
				<h3 className="p-3 text-xl text-center">Subscribe to our newsletter</h3>
				<form class="m-4 flex justify-center">
					<input
						class="text-center rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white"
						placeholder="your@mail.com"
					/>
					<button class="rounded-r-lg bg-primary  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default Community;
