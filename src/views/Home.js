import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Hero } from "../components/Hero";
import { Content } from "../components/Content";
import Community from "../components/Community";
import Fade from "react-reveal/Fade";

const Home = () => {
	const history = useHistory();

	const user = localStorage.getItem("user-info");

	useEffect(() => {
		if (!user) history.push("/login");
	}, [history]);

	return (
		<>
			<Fade>
				<Hero />
				<Content />
				<Community />
			</Fade>
		</>
	);
};

export default Home;
