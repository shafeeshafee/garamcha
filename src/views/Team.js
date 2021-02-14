import React from "react";
import Description from "../components/Description";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Shafee from "../images/profile/shafee-tree.jpg";

const Team = () => {
	const personQuote = (person) => {
		switch (person) {
			case "ayman":
				return (
					<div className="text-justify">
						<p>
							"We started this project knowing we would want to do something e-commerce related. But we also asked ourselves,
							<em> what can we do to make this project helpful for others?</em> That's when Shafee and I thought about the small businesses
							that are struggling today. Many of them don't have an online presence. Here with this project, we show that anyone can bring
							their ideas to life."
						</p>
						<div className="flex justify-around items-center">
							<IconButton
								selected
								aria-label="LinkedIn"
								onClick={() => window.open("https://www.linkedin.com/in/ayman-omer-b2429b1ab/")}
								style={{ backgroundColor: "transparent" }}
							>
								<LinkedInIcon style={{ color: "#bd9d00", fontSize: "3.3rem", marginTop: "1em", textAlign: "center", cursor: "pointer" }} />
							</IconButton>
							<IconButton
								selected
								aria-label="GitHub"
								onClick={() => window.open("https://github.com/aymanjebril2")}
								style={{
									backgroundColor: "transparent",
									outline: "none",
									border: "none",
								}}
							>
								<GitHubIcon style={{ color: "#bd9d00", fontSize: "3rem", marginTop: "1em", textAlign: "center", cursor: "pointer" }} />
							</IconButton>
						</div>
					</div>
				);
			case "shafee":
				return (
					<div className="text-justify">
						<p>
							"Growing up, I've always heard wonderful stories from my parents about that distant land they came from. Being born and raised
							in the bustling city of New York, I felt a slight disconnect with my ethnic background. What was this land of green trees,
							white waves, friendly faces, and tea? My studious teammate Ayman offered that we do something to shine a light on Bangladeshi
							culture. I couldn't say no. This would be a homage to the country my parents left over 20 years ago. My mother helped us
							choose the name Garamcha (literally:<em> warm tea)</em>."
							<div className="flex justify-around items-center">
								<IconButton
									selected
									aria-label="LinkedIn"
									onClick={() => window.open("https://www.linkedin.com/in/shafeelinks")}
									style={{ backgroundColor: "transparent" }}
								>
									<LinkedInIcon
										style={{ color: "#bd9d00", fontSize: "3.3rem", marginTop: "1em", textAlign: "center", cursor: "pointer" }}
									/>
								</IconButton>
								<IconButton
									selected
									aria-label="GitHub"
									onClick={() => window.open("https://www.github.com/shafee")}
									style={{
										backgroundColor: "transparent",
										outline: "none",
										border: "none",
									}}
								>
									<GitHubIcon style={{ color: "#bd9d00", fontSize: "3rem", marginTop: "1em", textAlign: "center", cursor: "pointer" }} />
								</IconButton>
							</div>
						</p>
					</div>
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
		<div>
			<div className="center-content text-center">
				<div className="xl:flex xl:flex-row lg:flex-col">
					<img
						className="xl:w-1/2 lg:w-screen h-auto"
						src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80"
						alt=""
					/>
					<Description name="Ayman Omer" title="Full Stack Engineer" text={personQuote("ayman")} />
				</div>
				<div className="xl:flex xl:flex-row-reverse lg:flex-col">
					<img className="xl:w-1/2 lg:w-screen h-auto" src={Shafee} alt="" />

					<Description name="Shafee Ahmed" title="Front End Engineer" text={personQuote("shafee")} />
				</div>
			</div>
		</div>
	);
};

export default Team;
