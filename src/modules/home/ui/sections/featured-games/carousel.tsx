import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { Carousel } from "@/components/ui/carousel";
import { FeaturedGamesCarouselItems } from "@/modules/home/ui/sections/featured-games/items";

export const FeaturedGamesCarousel = () => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<FeaturedGamesSkeleton />}>
				<FeaturedGamesCarouselItems />
			</Suspense>
		</ErrorBoundary>
	);
};

const FeaturedGamesSkeleton = () => (
	// TODO: Make loader accept a card output
	<Carousel type="loader" ariaLabel="Categories" />
);
