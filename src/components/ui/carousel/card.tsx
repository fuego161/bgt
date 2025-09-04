import Image from "next/image";
import Link from "next/link";

import { getImageUrl } from "@/lib/get-image-url";

import type { CarouselItemCardProps } from "@/types/ui/carousel";

interface CarouselCardProps {
	data: CarouselItemCardProps;
}

export const CarouselCard = ({ data }: CarouselCardProps) => {
	const { title, slug, imagePath, snippet } = data;

	return (
		<Link
			className="block rounded-lg overflow-hidden"
			href={`board-games/${slug}`}
		>
			<Image
				src={getImageUrl(imagePath)}
				width={300}
				height={200}
				alt={`${title} Featured Image`}
			/>
			<div className="bg-light px-2 py-2">
				<h3>{title}</h3>
				<p>{snippet}</p>
			</div>
		</Link>
	);
};
