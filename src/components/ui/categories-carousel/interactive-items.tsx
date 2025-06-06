"use client";

import { useRouter } from "next/navigation";

import { Carousel } from "@/components/ui/carousel";

import type { Category } from "@prisma/client";
import type { CarouselItemHandlerProps } from "@/types/ui/carousel";

interface CategoriesCarouselInteractiveItemsProps {
	categories: Category[];
}

export const CategoriesCarouselInteractiveItems = ({
	categories,
}: CategoriesCarouselInteractiveItemsProps) => {
	const router = useRouter();

	const categoryHandlers: CarouselItemHandlerProps[] = [];

	categoryHandlers.push(
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
		)
	);

	categoryHandlers.unshift({
		title: "All",
		slug: "",
		onSelect: () => {
			// Remove the category search param and push to router to reset to all games
			const url = new URL(window.location.href);

			url.searchParams.delete("category");

			router.push(url.href);
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
