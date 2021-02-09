import React from "react";
import happyLady from "../images/happy-lady.jpg";
import happyKids from "../images/happy-kids.jpg";

export const Content = () => {
	return (
		<div className="flex justify-around">
			<div className="menu-card">
				<img src={happyLady} alt="" className="h-full rounded mb-20 shadow" />
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
						Made with Love
					</h1>
					<p className="mb-2 text-center">Our teas are cultivated here in the heart of Bangladesh, Sylhet</p>
				</div>
			</div>
			<div className="menu-card">
				<img src={happyKids} alt="" className="h-full rounded mb-20 shadow" />
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
					<p className="mb-2 text-center">
						ChaiLeaf donates one pair of shoe to a child in need <br /> for every tea box ordered
					</p>
					<span className="text-xs text-gray-500">
						<a href="#">Read more about our "Renew The Community Project"</a>
					</span>
				</div>
			</div>
		</div>
	);
};
