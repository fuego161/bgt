"use client";

import type { Category } from "@prisma/client";
import type { CarouselItemHandlerProps } from "@/types/ui/carousel";
import { Carousel } from "@/components/ui/carousel";

interface CategoriesCarouselInteractiveItemsProps {
	categories: Category[];
}

export const CategoriesCarouselInteractiveItems = ({
	categories,
}: CategoriesCarouselInteractiveItemsProps) => {
	const categoryHandlers: CarouselItemHandlerProps[] = [];

	categoryHandlers.push(
		...categories.map(({ title }) => ({
			title,
			onSelect: (value: string | null) => {
				console.log(value);
			},
		}))
	);

	categoryHandlers.unshift({
		title: "All",
		onSelect: (value: string | null) => {
			console.log(value);
		},
	});

	return (
		<Carousel
			ariaLabel="Categories"
			data={categoryHandlers}
			type="handler"
		/>
	);
};
