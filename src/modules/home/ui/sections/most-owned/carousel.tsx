import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Carousel } from "@/components/ui/carousel";
import { MostOwnedCarouselItems } from "@/modules/home/ui/sections/most-owned/items";

export const MostOwnedCarousel = () => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<MostOwnedSkeleton />}>
				<MostOwnedCarouselItems />
			</Suspense>
		</ErrorBoundary>
	);
};

const MostOwnedSkeleton = () => (
	// TODO: Make loader accept a card output
	<Carousel type="loader" ariaLabel="Categories" />
);
