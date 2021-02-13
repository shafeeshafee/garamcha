import React from "react";

const Card = (props) => {
	return (
		<div className="menu-card">
			<img src={props.img} alt={props.imgAlt} className="h-3/6 w-auto rounded xl:mb-10 lg:mb-5 sm:mb-3 xs:mb-19 shadow" />
			<div className="center-content px-3 w-full">
				<h1 className="font-headings text-2xl mb-2 flex items-center">
					{props.svg}
					{props.cardHeader}
				</h1>
				<p className="mb-2 text-center">{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
