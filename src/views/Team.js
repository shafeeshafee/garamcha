import React from "react";
import Description from "../components/Description";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import Shafee from "../images/profile/shafee-tree.jpg";
import Ayman from "../images/profile/aymen-kid.jpg";
import Julian from "../images/profile/julian.jpg";
import Stephanie from "../images/profile/stephanie.jpg";

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
			case "julian":
				return (
					<div className="text-justify">
						<p>
							"This project was something I saw my colleagues Ayman and Shafee present during class. But I knew the project idea had a
							meaning that went beyond the classroom environment. So I joined the Garamcha project to bring its functionality to the next
							level. My role for Garamcha was back end development as I integrated the ability for users to have their own user account with
							sign-up and login features."
						</p>
						<div className="flex justify-around items-center">
							<IconButton
								selected
								aria-label="LinkedIn"
								onClick={() => window.open("https://www.linkedin.com/in/julian-q-379184ba/")}
								style={{ backgroundColor: "transparent" }}
							>
								<LinkedInIcon style={{ color: "#bd9d00", fontSize: "3.3rem", marginTop: "1em", textAlign: "center", cursor: "pointer" }} />
							</IconButton>
							<IconButton
								selected
								aria-label="GitHub"
								onClick={() => window.open("https://github.com/HaxagonusD")}
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
			case "stephanie":
				return (
					<div className="text-justify">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa recusandae officia nihil, itaque veniam cumque cupiditate ad
							cum, perspiciatis eos dolorem autem eveniet quaerat totam consequuntur error harum et libero.
							<div className="flex justify-around items-center">
								<IconButton
									selected
									aria-label="LinkedIn"
									onClick={() => window.open("https://www.linkedin.com/in/stephanieapena/")}
									style={{ backgroundColor: "transparent" }}
								>
									<LinkedInIcon
										style={{ color: "#bd9d00", fontSize: "3.3rem", marginTop: "1em", textAlign: "center", cursor: "pointer" }}
									/>
								</IconButton>
								<IconButton
									selected
									aria-label="GitHub"
									onClick={() => window.open("https://github.com/stephp23")}
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
		<div className="py-10">
			<div className="center-content text-center w-3/4 m-auto">
				<div className="xl:flex xl:flex-row lg:flex-col p-10 m-auto">
					<img className="m-auto xl:w-96 lg:w-1/2 h-auto clip-left" src={Ayman} alt="" />
					<Description name="Ayman Omer" title="Full Stack Developer" text={personQuote("ayman")} />
				</div>
				<div className="xl:flex xl:flex-row-reverse lg:flex-col p-10 m-auto">
					<img className="m-auto xl:w-96 lg:w-1/2 h-auto clip-right" src={Shafee} alt="" />
					<Description name="Shafee Ahmed" title="Front End Developer" text={personQuote("shafee")} />
				</div>
				<div className="xl:flex xl:flex-row lg:flex-col p-10 m-auto">
					<img className="m-auto xl:w-96 lg:w-1/2 h-auto clip-right" src={Julian} alt="" />
					<Description name="Julian Q" title="Back End Developer" text={personQuote("julian")} />
				</div>
				<div className="xl:flex xl:flex-row-reverse lg:flex-col p-10 m-auto">
					<img className="m-auto xl:w-96 lg:w-1/2 h-auto clip-right" src={Stephanie} alt="" />
					<Description name="Stephanie Pena" title="Project Advocate" text={personQuote("stephanie")} />
				</div>
			</div>
		</div>
	);
};

export default Team;
