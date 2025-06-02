import React from "react";

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-gray-900 text-gray-400">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 text-white border-[#4285F4]">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p className="text-gray-500">
							Hi. I'm Trevor, nice to meet you. Please take a look around.
						</p>
					</div>
					<div>
						<p className="text-white text-xl">
							I'm Trevor Colson, I live in Salt Lake City, Utah, and I recently
							graduated with my degree in Information Systems from the
							University of Utah. I have always had a passion for technology and
							I am a software engineer with professional experience working with
							the Utah Jazz and Mammoth as well as with Optix Solutions. Through
							these roles, I've gained valuable experience in web development
							and software engineering, and I'm excited to continue growing in
							the tech industry. I am actively seeking new opportunities and
							full-time positions where I can contribute my skills and continue
							learning.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
