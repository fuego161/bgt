import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import prisma from "@/lib/prisma";
import { Carousel } from "@/components/ui/carousel";
import type { CarouselItemDataProps } from "@/types/ui/carousel";

export const CategoriesSection = () => {
	return (
		<Suspense fallback={<CategoriesSkeleton />}>
			<ErrorBoundary fallback={<p>Error...</p>}>
				<CategoriesSectionOutput />
			</ErrorBoundary>
		</Suspense>
	);
};

const CategoriesSkeleton = () => <Carousel isLoading ariaLabel="Categories" />;

const toCarouselData = (title: string, slug: string) => ({
	title,
	slug,
	link: {
		pathname: "board-games",
		query: slug ? { category: slug } : undefined,
	},
});

const CategoriesSectionOutput = async () => {
	const categories = await prisma.category.findMany({
		orderBy: [
			{
				title: "asc",
			},
		],
	});

	const categoryData: CarouselItemDataProps[] = categories.map(
		({ title, slug }) => toCarouselData(title, slug)
	);

	categoryData.unshift(toCarouselData("All", ""));

	return <Carousel ariaLabel="Categories" data={categoryData} />;
};
