import React from "react";
import Storyline from "../components/Storyline";
import Fade from "react-reveal/Fade";

const Story = () => {
	return (
		<div>
			<Fade>
				<div className="flex flex-col font-headings justify-center items-start">
					<h1 className="w-full m-auto p-5 absolute text-left text-white font-bold drop-shadow xl:text-6xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-1xl">
						Ours is a tale of gathering tea with love. <br />
						<br />
						Together we can uplift communities.
					</h1>
					<video src="/videos/tea-garden.mp4" autoPlay loop muted />
				</div>
				<Fade>
					<Storyline />
				</Fade>
			</Fade>
		</div>
	);
};

export default Story;
