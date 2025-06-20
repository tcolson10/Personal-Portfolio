import React from "react";
import workImg from "../assets/realestate.jpg";

function Experience() {
	return (
		<div name="work" className="w-full md:h-screen bg-gray-900 text-gray-300">
			<div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl font-bold inline border-b-4 text-white border-[#4285F4]">
						Work
					</p>
					<p className="py-6 text-gray-500 text-2xl">
						Check out some of my recent work
					</p>
				</div>

				<div className="grid sm:grid-cols-2 gap-4">
					{/* Shelby Floral */}
					<div
						style={{ backgroundImage: `url(/shelbyFloral.png)` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div className="opacity-0 group-hover:opacity-100">
							<div>
								<span className="text-2xl font-bold text-white tracking-wider">
									Shelby Floral
								</span>
								<div className="pt-8 text-center">
									<a
										href="https://shelby-floral.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
											Demo
										</button>
									</a>
									<a
										href="https://github.com/tcolson10"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>

					{/* Monthly Blooms */}
					<div
						style={{ backgroundImage: `url(/monthlyBlooms.png)` }}
						className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
					>
						<div className="opacity-0 group-hover:opacity-100">
							<div>
								<span className="text-2xl font-bold text-white tracking-wider">
									Monthly Blooms
								</span>
								<div className="pt-8 text-center">
									<a
										href="https://monthlyblooms.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
											Demo
										</button>
									</a>
									<a
										href="https://github.com/tcolson10"
										target="_blank"
										rel="noopener noreferrer"
									>
										<button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
											Code
										</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Experience;
