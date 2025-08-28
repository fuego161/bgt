import Image from "next/image";
import { buttonVariants } from "@/components/ui/button/button-variants";

const imagePaths = [""];

export const Intro = () => {
	return (
		<div className="overflow-hidden">
			<div className="text-center max-w-3xl m-auto">
				<h1 className="font-main text-2xl md:text-3xl lg:text-5xl">
					Track, Explore & Play More
				</h1>

				<p className="lg:text-lg!">
					Keep tabs on your board game collection, find new
					favourites, and dive into the mechanics and categories you
					love. Whether you're a casual player or a cardboard
					connoisseur, this tracker has you covered.
				</p>

				<div className="btns">
					<a
						className={`${buttonVariants()} inline-block mr-2 md:mr-4`}
						href="#"
					>
						Start Collection
					</a>

					<a
						className={`${buttonVariants()} inline-block ml-2 md:ml-4`}
						href="#"
					>
						View Games
					</a>
				</div>
			</div>

			<div className="flex justify-between items-baseline w-[110%] ml-[-5%]">
				<Image
					className="rounded-lg w-11/42 sm:w-8/42 md:w-5/42 lg:w-4/42"
					src="/home/gloomhaven.png"
					width={500}
					height={500}
					alt="Gloomhaven"
				/>

				<Image
					className="rounded-lg w-15/42 sm:w-11/42 md:w-8/42 lg:w-6/42"
					src="/home/gloomhaven.png"
					width={500}
					height={500}
					alt="Gloomhaven"
				/>

				<Image
					className="rounded-lg w-11/42 sm:w-11/42 md:w-11/42 lg:w-8/42"
					src="/home/gloomhaven.png"
					width={500}
					height={500}
					alt="Gloomhaven"
				/>

				<Image
					className="rounded-lg hidden sm:block sm:w-8/42 md:w-8/42 lg:w-8/42"
					src="/home/gloomhaven.png"
					width={500}
					height={500}
					alt="Gloomhaven"
				/>

				<Image
					className="rounded-lg hidden md:block md:w-5/42 lg:w-6/42"
					src="/home/gloomhaven.png"
					width={500}
					height={500}
					alt="Gloomhaven"
				/>

				<Image
					className="rounded-lg hidden lg:block lg:w-4/42"
					src="/home/gloomhaven.png"
					width={500}
					height={500}
					alt="Gloomhaven"
				/>
			</div>
		</div>
	);
};
