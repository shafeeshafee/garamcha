import React from "react";
import happyLady from "../images/happy-lady.jpg";
import happyKids from "../images/happy-kids.jpg";

import Card from "./Card";
import Subscribe from "./Subscribe";

const Community = () => {
	return (
		<div>
			<div className="xl:flex xl:flex-row lg:flex lg:flex-row justify-evenly md:flex-col sm:flex-col">
				<Card
					img={happyLady}
					imgAlt="happy Bangladeshi woman"
					svg={
						<svg
							className="text-primary w-6 h-6 mx-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
							/>
						</svg>
					}
					cardHeader="Cultivated with Love"
					description="All Garamcha teas are locally sourced, and certified organic"
				/>
				<Card
					img={happyKids}
					imgAlt="Happy kids"
					svg={
						<svg
							className="text-primary w-6 h-6 mx-3"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
							/>
						</svg>
					}
					cardHeader="For the Community"
					description="We donate a pair of shoes to a child in need for every tea box ordered."
				/>
			</div>
			<Subscribe />
		</div>
	);
};

export default Community;
