import Image from "next/image";
import { buttonVariants } from "@/components/ui/button/button-variants";

interface ImageData {
	fileName: string;
	altText: string;
	classList: string;
}

const imageData: ImageData[] = [
	{
		fileName: "azul",
		altText: "Azul",
		classList: "w-11/42 sm:w-8/42 md:w-5/42 lg:w-4/42",
	},
	{
		fileName: "root",
		altText: "Root",
		classList: "w-15/42 sm:w-11/42 md:w-8/42 lg:w-6/42",
	},
	{
		fileName: "arcs",
		altText: "Arcs",
		classList: "w-11/42 sm:w-11/42 md:w-11/42 lg:w-8/42",
	},
	{
		fileName: "gloomhaven",
		altText: "Gloomhaven",
		classList: "hidden sm:block sm:w-8/42 md:w-8/42 lg:w-8/42",
	},
	{
		fileName: "pandemic-legacy",
		altText: "Pandemic Legacy",
		classList: "hidden md:block md:w-5/42 lg:w-6/42",
	},
	{
		fileName: "hero-realms",
		altText: "Hero Realms",
		classList: "hidden lg:block lg:w-4/42",
	},
];

export const Intro = () => {
	const marginTop = "mt-8 sm:mt-12 md:mt-14 lg:mt-18";

	return (
		<div className={`overflow-hidden ${marginTop}`}>
			<div className="text-center max-w-3xl m-auto">
				<h1 className="font-main text-2xl md:text-3xl lg:text-5xl">
					Track, Explore & Play More
				</h1>

				<p className="mt-2 mb-3 lg:text-lg! lg:mt-5 lg:mb-6">
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

			<div
				className={`flex justify-between items-baseline w-[110%] ml-[-5%] ${marginTop}`}
			>
				{imageData.map((image) => (
					<Image
						key={image.fileName}
						className={`rounded-lg ${image.classList}`}
						src={`/home/${image.fileName}.png`}
						width={300}
						height={200}
						alt={image.altText}
					/>
				))}
			</div>
		</div>
	);
};
