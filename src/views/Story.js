import React from "react";
import Storyline from "../components/Storyline";

const Story = () => {
	return (
		<div>
			<div className="flex flex-col justify-center items-start">
				<h1 className="p-5 w-full absolute text-left text-white font-bold drop-shadow xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-1xl">
					Ours is a tale of gathering tea with love. <br />
					<br />
					Read our mission to make the world a better place.
				</h1>
				<video src="/videos/tea-garden.mp4" autoPlay loop muted />
			</div>
			<Storyline />
		</div>
	);
};

export default Story;
