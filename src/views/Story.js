import React from "react";

import happyKid from "../images/story/happy-child.jpg";

const Story = () => {
	return (
		<div className="flex justify-center items-center">
			<h1 className="absolute text-center text-white font-bold drop-shadow xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-1xl">
				Nature is sacred. Ours is a tale of sipping with love, and care. <br />
				Read the story of Garamcha.
			</h1>
			<video src="/videos/tea-garden.mp4" autoPlay loop muted />
		</div>
	);
};

export default Story;
