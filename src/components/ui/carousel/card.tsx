import Image from "next/image";

import type { CarouselItemCardProps } from "@/types/ui/carousel";

interface CarouselCardProps {
	data: CarouselItemCardProps;
}

export const CarouselCard = ({ data }: CarouselCardProps) => {
	const { title, slug, imagePath, snippet } = data;

	return (
		<div>
			<Image
				className={`rounded-lg`}
				src={imagePath}
				width={300}
				height={200}
				alt={`${title} Featured Image`}
			/>
			<>
				<h3>{title}</h3>
				<p>{snippet}</p>
			</>
		</div>
	);
};
