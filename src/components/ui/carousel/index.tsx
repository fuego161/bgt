"use client";

import { ReactElement, useCallback, useEffect, useState } from "react";

import { CarouselItems } from "@/components/ui/carousel/items";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

export type GapSizes = 8 | 12 | 16 | 24 | 32 | 48;

interface CarouselPropsBase {
	ariaLabel: string;
	gapSize?: GapSizes;
}

type CarouselProps = CarouselPropsBase & CarouselPropsVariant;

export const Carousel = (props: CarouselProps) => {
	const gapSize: GapSizes = props.gapSize ?? 12;

	const [itemSizes, setItemSizes] = useState<number[]>([]);
	const [carouselLength, setCarouselLength] = useState<number>();

	useEffect(() => {
		// Get the amount of items stored
		const itemCount = itemSizes.length;

		// If there's no items yet, leave
		if (!itemCount) return;

		// Calculate the combined size of all the items
		const itemsCombinedSize = itemSizes.reduce((a, b) => a + b, 0);
		// Calculate the amount of gap between all the items, removing 1 for the final flush item
		const combinedGapSize = gapSize * (itemCount - 1);

		setCarouselLength(itemsCombinedSize + combinedGapSize);
	}, [itemSizes, gapSize]);

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

	const carouselItems: ReactElement =
		props.type === "loader" ? (
			<CarouselItems {...props} gapSize={gapSize} />
		) : (
			<CarouselItems
				{...props}
				collectSize={collectSize}
				gapSize={gapSize}
			/>
		);

	return (
		<nav {...(props.ariaLabel && { "aria-label": props.ariaLabel })}>
			<div className="relative overflow-x-hidden">
				<button
					className="absolute left-0 top-0 bottom-0 bg-pink-300 px-2 z-20"

					// className={buttonVariants({
					// 	intent: "primary",
					// })}
					// disabled
					// aria-disabled="true"
					// aria-hidden="true"
					// tabIndex={-1}
				>
					<span>&#x2190;</span>
				</button>

				<ul className="flex py-1">{carouselItems}</ul>

				<button
					className="absolute right-0 top-0 bottom-0 bg-pink-300 px-2 z-20"
					// className={buttonVariants({
					// 	intent: "primary",
					// })}
					// disabled
					// aria-disabled="true"
					// aria-hidden="true"
					// tabIndex={-1}
				>
					<span>&#x2192;</span>
				</button>
			</div>
		</nav>
	);
};
