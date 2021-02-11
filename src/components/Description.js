import React from "react";

const Description = (props) => {
	return (
		<div className="center-content">
			<h1 className="font-headings text-3xl">
				<span className="font-bold uppercase">{props.name}</span>, {props.title}
			</h1>
			<p className=" text-2xl mx-3 my-10">{props.text}</p>
		</div>
	);
};

export default Description;
