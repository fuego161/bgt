import { CarouselItem } from "@/components/ui/carousel/item";
import type {
	CarouselItemDataProps,
	CarouselItemTypes,
} from "@/types/ui/carousel";

type CarouselProps =
	| {
			isLoading: true;
			ariaLabel?: string;
			data?: undefined;
			type?: undefined;
	  }
	| {
			isLoading?: false;
			ariaLabel?: string;
			data: CarouselItemDataProps[];
			type: CarouselItemTypes;
	  };

export const Carousel = ({
	isLoading,
	ariaLabel,
	data,
	type,
}: CarouselProps) => {
	return (
		<nav {...(ariaLabel && { "aria-label": ariaLabel })}>
			<ul className="carousel flex overflow-x-hidden">
				{isLoading &&
					Array.from({ length: 20 }).map((_, index) => (
						<CarouselItem key={index} type="loader" />
					))}

				{!isLoading &&
					data &&
					data.map((item) => {
						switch (type) {
							case "link":
								return (
									<CarouselItem
										key={item.slug}
										type="link"
										data={item}
									/>
								);

							case "handler":
								return (
									<CarouselItem
										key={item.slug}
										type="handler"
										title={item.title}
										onSelect={() => {}}
									/>
								);

							default:
								return null;
						}
					})}
			</ul>
		</nav>
	);
};
