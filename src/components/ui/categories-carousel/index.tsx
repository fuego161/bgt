import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Carousel } from "@/components/ui/carousel";
import { CategoriesCarouselItems } from "@/components/ui/categories-carousel/items";

import type { CarouselItemTypes } from "@/types/ui/carousel";

interface CategoriesCarouselProps {
	type: CarouselItemTypes;
	category?: string;
}

export const CategoriesCarousel = ({
	type,
	category,
}: CategoriesCarouselProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<CategoriesCarouselSkeleton />}>
				<CategoriesCarouselItems type={type} category={category} />
			</Suspense>
		</ErrorBoundary>
	);
};

const CategoriesCarouselSkeleton = () => (
	<Carousel type="loader" ariaLabel="Categories" />
);
