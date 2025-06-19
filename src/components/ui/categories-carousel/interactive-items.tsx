"use client";

import { useRouter } from "next/navigation";

import { Carousel } from "@/components/ui/carousel";

import type { CarouselItemHandlerProps } from "@/types/ui/carousel";
import type { CategorySummaryLink } from "@/types/ui/category-summary";

interface CategoriesCarouselInteractiveItemsProps {
	categories: CategorySummaryLink[];
	category?: string;
}

export const CategoriesCarouselInteractiveItems = ({
	categories,
	category,
}: CategoriesCarouselInteractiveItemsProps) => {
	const router = useRouter();

	const categoryHandlers: CarouselItemHandlerProps[] = [
		{
			title: "All",
			slug: "",
			onSelect: () => {
				// Remove the category search param and push to router to reset to all games
				const url = new URL(window.location.href);

				url.searchParams.delete("category");

				router.push(url.href);
			},
		},
		...categories.map(
			({ title, slug }): CarouselItemHandlerProps => ({
				title,
				slug,
				onSelect: (value: string | null) => {
					const url = new URL(window.location.href);

					if (value) {
						url.searchParams.set("category", value);
					} else {
						url.searchParams.delete("category");
					}

					router.push(url.href);
				},
			})
		),
	];

	const activeIndex = category
		? categoryHandlers.findIndex((cat) => cat.slug === category)
		: 0;

	return (
		<Carousel
			ariaLabel="Categories"
			data={categoryHandlers}
			type="handler"
			initialItem={category}
			activeIndex={activeIndex}
		/>
	);
};
