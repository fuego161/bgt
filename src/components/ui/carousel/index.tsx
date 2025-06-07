"use client";

import { CarouselItems } from "@/components/ui/carousel/items";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

interface CarouselPropsBase {
	ariaLabel: string;
}

type CarouselProps = CarouselPropsBase & CarouselPropsVariant;

export const Carousel = (props: CarouselProps) => {
	return (
		<nav {...(props.ariaLabel && { "aria-label": props.ariaLabel })}>
			<div className="overflow-x-hidden">
				<ul className="flex">
					<CarouselItems {...props} />
				</ul>
			</div>
		</nav>
	);
};
