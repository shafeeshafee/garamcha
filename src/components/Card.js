import React from "react";

const Card = (props) => {
	return (
		<div className="menu-card">
			<img src={props.img} alt={props.imgAlt} className="h-5/6 w-auto rounded mb-20 shadow" />
			<div className="center-content w-full">
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
