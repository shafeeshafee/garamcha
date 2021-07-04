import React from "react";

const Description = (props) => {
	return (
		<div className="center-content">
			<h1 className="w-full font-headings text-3xl xl:my-0 sm:mt-5">
				<span className="font-bold uppercase">{props.name}</span>
				<span className="text-xl px-2 opacity-60"> {props.title}</span>
			</h1>
			<div className="xl:text-lg lg:text-sm mx-3 my-10 w-2/3 text-justify">{props.text}</div>
		</div>
	);
};

export default Description;
