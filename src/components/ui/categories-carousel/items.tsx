import { getAllCategories } from "@/components/data/get-all-categories";
import { Carousel } from "@/components/ui/carousel";
import { CategoriesCarouselInteractiveItems } from "@/components/ui/categories-carousel/interactive-items";

import type {
	CarouselItemLinkProps,
	CarouselItemTypes,
} from "@/types/ui/carousel";

interface CategoriesCarouselItemsProps {
	type: CarouselItemTypes;
	category?: string;
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
	category,
}: CategoriesCarouselItemsProps) => {
	const categories = await getAllCategories();

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
		return (
			<CategoriesCarouselInteractiveItems
				categories={categories}
				category={category}
			/>
		);
	}
};
