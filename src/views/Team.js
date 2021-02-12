import React from "react";
import Description from "../components/Description";

const Team = () => {
	const personQuote = (person) => {
		switch (person) {
			case "ayman":
				return (
					<p>
						"We started this project knowing we would want to do something e-commerce related. But we also asked ourselves,
						<em> what can we do to make this project helpful for others?</em> That's when Shafee and I thought about the small businesses
						that are struggling today. Many of them don't have an online presence. Here with this project, we show that anyone can bring
						their ideas to life."
					</p>
				);
			case "shafee":
				return (
					<p>
						"Growing up, I've always heard wonderful stories from my parents about that distant land they came from. Being born and raised
						in the bustling city of New York, I felt a slight disconnect with my ethnic background. What was this land of green trees, white
						waves, friendly faces, and tea? My studious teammate Ayman offered that we do something to shine a light on Bangladeshi culture.
						I couldn't say no. This would be a homage to the country my parents left over 20 years ago. My mother helped us choose the name
						Garamcha (literally:<em> warm tea)</em>."
					</p>
				);
			default:
				return (
					<p>
						"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi hic ea distinctio exercitationem labore esse at. Voluptas
						provident distinctio obcaecati deleniti, temporibus placeat ipsum vel vero minus dolores! Inventore, delectus."
					</p>
				);
		}
	};

	return (
		<div className="center-content">
			<div className="xl:flex xl:flex-row lg:flex-col">
				<img
					className="xl:w-1/2 lg:w-screen h-auto"
					src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
					alt=""
				/>
				<Description name="Ayman Omer" title="Full Stack Engineer" text={personQuote("ayman")} />
			</div>
			<div className="xl:flex xl:flex-row-reverse lg:flex-col">
				<img
					className="xl:w-1/2 lg:w-screen h-auto"
					src="https://images.pexels.com/photos/2586339/pexels-photo-2586339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt=""
				/>
				<Description name="Shafee Ahmed" title="Front End Engineer" text={personQuote("shafee")} />
			</div>
		</div>
	);
};

export default Team;
