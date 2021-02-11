import React from "react";

const Subscribe = () => {
	return (
		<div>
			<hr />
			<h3 className="font-headings p-3 text-xl text-center">Subscribe to our newsletter</h3>
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
	);
};

export default Subscribe;
