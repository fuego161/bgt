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
			className="block h-full rounded-lg bg-light overflow-hidden whitespace-normal"
			href={`board-games/${slug}`}
		>
			<Image
				src={getImageUrl(imagePath)}
				className="w-full"
				width={300}
				height={200}
				alt={`${title} Featured Image`}
			/>
			<div className="px-2 py-2 lg:px-3 lg:py-4">
				<h3>{title}</h3>
				<p className="mt-1 mb-0 lg:text-base!">{snippet}</p>
			</div>
		</Link>
	);
};
