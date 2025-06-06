import prisma from "@/lib/prisma";
import { Carousel } from "@/components/ui/carousel";

import type {
	CarouselItemDataProps,
	CarouselItemTypes,
} from "@/types/ui/carousel";

interface CategoriesCarouselItemsProps {
	type: CarouselItemTypes;
}

const toCarouselData = (
	title: string,
	slug: string,
	disabled = false
): CarouselItemDataProps => ({
	title,
	slug,
	disabled,
	link: {
		pathname: "board-games",
		query: slug ? { category: slug } : undefined,
	},
});

export const CategoriesCarouselItems = async ({
	type,
}: CategoriesCarouselItemsProps) => {
	const categories = await prisma.category.findMany({
		orderBy: [
			{
				title: "asc",
			},
		],
	});

	if (!categories.length) {
		return (
			<Carousel
				ariaLabel="Categories"
				data={[toCarouselData("No Categories Found", "", true)]}
				type="link"
			/>
		);
	}

	const categoryData: CarouselItemDataProps[] = [];

	if (type === "link") {
		categoryData.push(
			...categories.map(({ title, slug }) => toCarouselData(title, slug))
		);

		categoryData.unshift(toCarouselData("All", ""));
	}

	// TODO: Add Handler
	if (type === "handler") {
		categoryData.push(
			...categories.map(({ title, slug }) => toCarouselData(title, slug))
		);

		categoryData.unshift(toCarouselData("All", ""));
	}

	return <Carousel ariaLabel="Categories" data={categoryData} type={type} />;
};
