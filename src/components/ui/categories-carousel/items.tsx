import prisma from "@/lib/prisma";
import { Carousel } from "@/components/ui/carousel";

import { CategoriesCarouselInteractiveItems } from "@/components/ui/categories-carousel/interactive-items";

import type { Category } from "@prisma/client";
import type {
	CarouselItemLinkProps,
	CarouselItemTypes,
} from "@/types/ui/carousel";

interface CategoriesCarouselItemsProps {
	type: CarouselItemTypes;
}

const toCarouselData = (
	title: string,
	slug: string,
	disabled = false
): CarouselItemLinkProps => ({
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
	const categories: Category[] = await prisma.category.findMany({
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

	const categoryLinks: CarouselItemLinkProps[] = [];

	if (type === "link") {
		categoryLinks.push(
			...categories.map(({ title, slug }) => toCarouselData(title, slug))
		);

		categoryLinks.unshift(toCarouselData("All", ""));

		return (
			<Carousel ariaLabel="Categories" data={categoryLinks} type={type} />
		);
	}

	if (type === "handler") {
		return <CategoriesCarouselInteractiveItems categories={categories} />;
	}
};
