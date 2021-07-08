import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";

import Slide from "react-reveal/Slide";

import ayman from "../images/profile/aymen-kid.jpg";
import steph from "../images/profile/stephanie.jpg";

const Contact = () => {
	const history = useHistory();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => console.log(data);

	const user = localStorage.getItem("user-info");

	const parseUsername = (email) => {
		let str = "";
		for (let letter of email) {
			if (letter !== "@") {
				str += letter;
			} else {
				break;
			}
		}
		return str;
	};

	useEffect(() => {
		if (!user) history.push("/login");
	}, [history]);

	return (
		<div>
			<div className="contact-img relative flex flex-wrap items-top justify-center min-h-screen bg-white dark:bg-gray-900 sm:items-center sm:pt-0 font-headings">
				<Slide bottom>
					<div className="mx-5">
						<div className="bg-gradient-to-r bg-gray-600 rounded-2xl text-white p-8 text-center h-72 max-w-xl mx-auto">
							<div className="flex flex-col justify-center items-center">
								<h1 className="text-3xl mb-3 uppercase">Let's hear you out 💛</h1>
								<hr />
								<div className="border border-t-2 border-white w-1/2 my-3"></div>
							</div>
							<p className="text-lg">
								Hey! Stephanie here. Have any feedback on how we can improve? Reach out to me. We're going to make sure we hear you out.
							</p>
						</div>

						<div className="bg-white mt-6 py-8 px-10 text-center rounded-md shadow-lg transform -translate-y-20 sm:-translate-y-24 max-w-xs mx-auto">
							<h2 className="font-semibold text-2xl mb-6">Send an email to</h2>
							<img className="w-36 h-36 object-cover rounded-full mx-auto shadow-lg" src={steph} alt="User avatar" />
							<p className="capitalize text-xl mt-1 font-bold py-1">Stephanie Pena</p>
							<span className="flex items-center border rounded-full w-full pr-2 justify-center mx-auto mt-2 mb-12">
								<p className="text-yellow-800">Ops Support Engineer</p>
							</span>
							<a href="mailto:stephp23@gmail.com ">
								<button className="rounded-md bg-gradient-to-r bg-primary hover:bg-secondary hover:text-white text-xl text-gray-800 pt-3 py-4 px-5 inline transition ease-in-out">
									Email
								</button>
							</a>
						</div>
					</div>
				</Slide>
			</div>
		</div>
	);
};

export default Contact;
