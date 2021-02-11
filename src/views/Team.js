import React from "react";
import Description from "../components/Description";

const Team = () => {
	return (
		<div className="center-content">
			<div className="xl:flex xl:flex-row lg:flex-col">
				<img
					className="xl:w-1/2 lg:w-screen h-auto"
					src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
					alt=""
				/>
				<Description
					name="Ayman Omer"
					title="Full Stack Engineer"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non necessitatibus veniam deleniti id esse ducimus velit aperiam
					aliquid tempora beatae, delectus corporis impedit at eum quae modi odit obcaecati. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Sapiente nobis rerum incidunt sit illo? Assumenda, ad! Eius perferendis a incidunt placeat accusamus, nulla
					tenetur repellat velit quidem. Odio, delectus labore."
				/>
			</div>
			<div className="xl:flex xl:flex-row-reverse lg:flex-col">
				<img
					className="xl:w-1/2 lg:w-screen h-auto"
					src="https://images.pexels.com/photos/2586339/pexels-photo-2586339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
					alt=""
				/>
				<Description
					name="Shafee Ahmed"
					title="Front End Engineer"
					text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem non necessitatibus veniam deleniti id esse ducimus velit aperiam
					aliquid tempora beatae, delectus corporis impedit at eum quae modi odit obcaecati. Lorem ipsum dolor sit amet, consectetur
					adipisicing elit. Sapiente nobis rerum incidunt sit illo? Assumenda, ad! Eius perferendis a incidunt placeat accusamus, nulla
					tenetur repellat velit quidem. Odio, delectus labore."
				/>
			</div>
		</div>
	);
};

export default Team;
