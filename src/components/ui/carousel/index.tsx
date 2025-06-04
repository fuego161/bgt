import { CarouselItem } from "@/components/ui/carousel/item";
import type { CarouselItemDataProps } from "@/types/ui/carousel";

type CarouselProps =
	| { isLoading: true; ariaLabel?: string; data?: undefined }
	| { isLoading?: false; ariaLabel?: string; data: CarouselItemDataProps[] };

export const Carousel = ({ isLoading, ariaLabel, data }: CarouselProps) => {
	return (
		<nav {...(ariaLabel && { "aria-label": ariaLabel })}>
			<ul className="carousel flex overflow-x-hidden">
				{isLoading &&
					Array.from({ length: 20 }).map((_, index) => (
						<CarouselItem key={index} isLoading />
					))}

				{!isLoading &&
					data &&
					data.map((item) => (
						<CarouselItem key={item.slug} data={item} />
					))}
			</ul>
		</nav>
	);
};
