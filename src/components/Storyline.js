import React from "react";
import happyKid from "../images/story/happy-child.jpg";
import Description from "./Description";
import logo from "../images/logo.png";

const Storyline = () => {
	const subtitle = () => {
		return (
			<div>
				<div className="flex flex-wrap justify-around mt-5 p-5">
					<div className="pr-4">
						<span className="text-base uppercase">Country</span>
						<p className="text-base text-gray-900 font-semibold pt-2">Bangladesh</p>
					</div>
					<div className="pr-4">
						<span className="text-base uppercase">Division</span>
						<p className="text-base text-gray-900 font-semibold pt-2">Sylhet</p>
					</div>
					<div className="pr-4">
						<span className="text-base uppercase">Region</span>
						<p className="text-base text-gray-900 font-semibold pt-2">Sreemangal</p>
					</div>
				</div>
				<p className="p-5 mt-5 text-sm text-gray-500">
					Garamcha (Pronounced: 'GAH'-ram-cha'). <br />
					The word <em>garam</em> in Bengali means warm or hot, and <em>cha</em> means tea.
				</p>
			</div>
		);
	};

	const returnLogo = () => {
		return <img src={logo} alt="" className="mt-10 m-auto h-24 w-auto" />;
	};

	const returnBodyText = () => {
		return (
			<div>
				<p>
					The purpose of this project is to shine a light on communities and ideas that benefit the world.
					<strong> Ideas are powerful.</strong> We want to show the world that any idea or business―no matter where it's from or who it's
					by―can be brought to life through creative web design.
				</p>
				<br />
				<p>
					Bangladesh houses one of the three largest tea gardens in the world. Although the tea industry is booming in Bangladesh, little of
					it is actually exported. How can we add value to those industries? The answer to that is the idea of Garamcha, which is to host
					their business online for international trade. Our mock app starts in Bangladesh, because an idea that is so grassroots such as
					tea farmers in Bangladesh handcrafting tea and setting up an online market, can be applied to any business.
				</p>
			</div>
		);
	};

	return (
		<div className="flex border-gray-800 border-t-8">
			<div className="xl:flex xl:flex-row lg:flex-col text-center">
				<img className="xl:w-1/2 lg:w-screen h-auto" src={happyKid} alt="" />
				<Description name={returnLogo()} title={subtitle()} text={returnBodyText()} />
			</div>
		</div>
	);
};

export default Storyline;
