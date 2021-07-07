import React from "react";

const Subscribe = () => {
	const handleForm = (e) => {
		e.preventDefault();
	};
	return (
		<div className="rounded-lg mx-auto p-2">
			<hr />
			<h3 className="font-headings p-3 text-xl text-center">Subscribe to our newsletter</h3>

			<form className="m-4 flex justify-center">
				<input
					className="cursor-not-allowed text-center rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white focus:outline-none"
					placeholder="your@mail.com"
				/>
				<button
					onClick={handleForm}
					className="cursor-not-allowed rounded-r-lg bg-primary  text-gray-800 font-bold p-4 uppercase border-yellow-500 border-t border-b border-r focus:outline-none"
				>
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default Subscribe;
