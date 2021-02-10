import React from "react";

export const Content = () => {
	return (
		<div className="min-w-screen min-h-screen bg-primary flex items-center p-5 lg:p-10 overflow-hidden relative">
			<div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
				<div className="md:flex items-center -mx-10">
					<div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
						<div className="relative">
							<img
								src="https://images.pexels.com/photos/641038/pexels-photo-641038.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								className="w-full relative z-10"
								alt=""
							/>
						</div>
					</div>
					<div className="w-full md:w-1/2 px-10">
						<h1 className="font-headings font-bold uppercase text-4xl mb-5">Featured</h1>
						<div className="mb-10">
							<h1 className="font-headings text-2xl mb-5 text-secondary">Bengal Mountain Tea</h1>
							<p className="text-sm text-justify">
								Our new featured item, the Bengal Mountain Tea, is a unique blend of tea made with herbs found solely in the mountaneous
								regions of Srimangal, Sylhet. This tea is slightly bitter with earthy tones, and promotes healthy digestion.&nbsp;&nbsp;
								<a
									href="#"
									className="opacity-50 text-gray-900 hover:opacity-100 inline-block text-xs leading-none border-b border-gray-900"
								>
									See more <i className="mdi mdi-arrow-right"></i>
								</a>
							</p>
						</div>
						<div>
							<div className="inline-block align-bottom mr-5">
								<span className="text-2xl leading-none align-baseline">$</span>
								<span className="font-bold text-5xl leading-none align-baseline">29</span>
								<span className="text-2xl leading-none align-baseline">.99</span>
							</div>
							<div className="inline-block align-bottom">
								<button className="transition duration-300 ease-in-out bg-primary opacity-75 hover:opacity-100 text-yellow-900 hover:text-gray-900 rounded-full px-10 py-2 font-semibold">
									<i className="mdi mdi-cart -ml-2 mr-2"></i> ORDER NOW
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
