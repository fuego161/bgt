import prisma from "@/lib/prisma";
import { Carousel } from "@/components/ui/carousel";

import type { CarouselItemDataProps } from "@/types/ui/carousel";

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

export const CategoriesCarouselItems = async () => {
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
			/>
		);
	}

	const categoryData: CarouselItemDataProps[] = categories.map(
		({ title, slug }) => toCarouselData(title, slug)
	);

	categoryData.unshift(toCarouselData("All", ""));

	return <Carousel ariaLabel="Categories" data={categoryData} />;
};
