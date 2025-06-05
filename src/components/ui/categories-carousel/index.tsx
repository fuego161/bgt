import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Carousel } from "@/components/ui/carousel";
import { CategoriesCarouselItems } from "@/components/ui/categories-carousel/items";

export const CategoriesCarousel = () => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<CategoriesCarouselSkeleton />}>
				<CategoriesCarouselItems />
			</Suspense>
		</ErrorBoundary>
	);
};

const CategoriesCarouselSkeleton = () => (
	<Carousel isLoading ariaLabel="Categories" />
);
