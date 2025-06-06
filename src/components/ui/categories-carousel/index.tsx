import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Carousel } from "@/components/ui/carousel";
import { CategoriesCarouselItems } from "@/components/ui/categories-carousel/items";

import type { CarouselItemTypes } from "@/types/ui/carousel";

interface CategoriesCarouselProps {
	type: CarouselItemTypes;
}

export const CategoriesCarousel = ({ type }: CategoriesCarouselProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<CategoriesCarouselSkeleton />}>
				<CategoriesCarouselItems type={type} />
			</Suspense>
		</ErrorBoundary>
	);
};

const CategoriesCarouselSkeleton = () => (
	<Carousel isLoading ariaLabel="Categories" />
);
