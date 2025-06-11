"use client";

import clsx from "clsx";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { CarouselItems } from "@/components/ui/carousel/items";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

export type GapSizes = 8 | 12 | 16 | 24 | 32 | 48;

interface CarouselPropsBase {
	ariaLabel: string;
	gapSize?: GapSizes;
}

type CarouselProps = CarouselPropsBase & CarouselPropsVariant;

const directionBtnStyles =
	"absolute top-0 bottom-0 bg-pink-300 px-2 z-20 opacity-25";

const disabledBtnAttrs = (isDisabled: boolean) => {
	return {
		disabled: isDisabled,
		"aria-disabled": isDisabled,
		"aria-hidden": isDisabled,
		tabIndex: isDisabled ? -1 : undefined,
	};
};

export const Carousel = (props: CarouselProps) => {
	// Set defaults
	const gapSize: GapSizes = props.gapSize ?? 12;

	const [itemSizes, setItemSizes] = useState<number[]>([]);
	const [carouselLength, setCarouselLength] = useState<number>(0);
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [carouselElementWidth, setCarouselElementWidth] = useState<number>(0);
	const ref = useRef<HTMLUListElement>(null);

	const atStart = scrollPosition === 0;
	const atEnd = scrollPosition >= carouselLength - carouselElementWidth;

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

	// TODO: Update on page size change
	useEffect(() => {
		if (ref.current) {
			setCarouselElementWidth(ref?.current?.offsetWidth);
		}
	}, []);

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
					className={clsx(
						directionBtnStyles,
						"left-0 ",
						atStart && "hidden"
					)}
					{...disabledBtnAttrs(atStart)}
				>
					<span>&#x2190;</span>
				</button>

				<ul
					style={{
						transform: `translateX(-${scrollPosition}px)`,
					}}
					className="flex py-1 transition-transform ease-in-out"
					ref={ref}
				>
					{carouselItems}
				</ul>

				<button
					className={clsx(
						directionBtnStyles,
						"right-0",
						atEnd && "hidden"
					)}
					{...disabledBtnAttrs(atEnd)}
				>
					<span>&#x2192;</span>
				</button>
			</div>
		</nav>
	);
};
