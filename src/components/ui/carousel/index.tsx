"use client";

import { ReactElement, useCallback, useState } from "react";

import { CarouselItems } from "@/components/ui/carousel/items";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

interface CarouselPropsBase {
	ariaLabel: string;
}

type CarouselProps = CarouselPropsBase & CarouselPropsVariant;

export const Carousel = (props: CarouselProps) => {
	const [itemSizes, setItemSizes] = useState<number[]>([]);

	const collectSize = useCallback(
		(index: number) => (size: number) => {
			setItemSizes((prev) => {
				const updated = [...prev];
				updated[index] = size;
				return updated;
			});
		},
		[]
	);

	console.log(props.type, itemSizes);

	const carouselItems: ReactElement =
		props.type === "loader" ? (
			<CarouselItems {...props} />
		) : (
			<CarouselItems {...props} collectSize={collectSize} />
		);

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
