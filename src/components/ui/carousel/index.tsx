"use client";

import clsx from "clsx";
import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { CarouselItems } from "@/components/ui/carousel/items";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

export type GapSizes = 8 | 12 | 16 | 24 | 32 | 48;

interface CarouselPropsBase {
	ariaLabel: string;
	gapSize?: GapSizes;
	scrollJump?: number;
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
	const scrollJump = props.scrollJump ?? 9;

	const [itemSizes, setItemSizes] = useState<number[]>([]);
	const [carouselLength, setCarouselLength] = useState<number>(0);
	const [scrollPosition, setScrollPosition] = useState<number>(0);
	const [indexPosition, setIndexPosition] = useState<number>(0);
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

	const clickScroll = (direction: "left" | "right") => {
		// Collect the next index depending on the direction
		// Take the current index and then either add or remove the scroll jump to get the next index
		// Use Math max/min to set fall backs of either the start or end of the carousel to stop overshooting
		const nextIndex =
			direction === "left"
				? Math.max(indexPosition - scrollJump, 0)
				: Math.min(indexPosition + scrollJump, itemSizes.length);

		// Get the item sizes of the items we're going to jump over
		const upcomingItems =
			direction === "left"
				? itemSizes.slice(nextIndex, indexPosition)
				: itemSizes.slice(indexPosition, nextIndex);

		// Check to see if we're going to be at the end
		const end = nextIndex === itemSizes.length;
		// Calculate the gap total, if we're at the end account for the last item and remove its gap
		const gapTotal = end ? gapSize * scrollJump - 1 : gapSize * scrollJump;

		// Calculate the amount we need to scroll based on the sizes of the upcoming items
		// Make sure we include the gap between the number of items we're jumping
		const amountToScroll = upcomingItems.reduce((a, b) => a + b, gapTotal);

		// Get the new scroll position, with min/max fall backs to stop scroll overshooting
		const newScrollPosition =
			direction === "left"
				? Math.max(0, scrollPosition - amountToScroll)
				: Math.min(
						scrollPosition + amountToScroll,
						carouselLength - carouselElementWidth
				  );

		// TODO: look at having right scrolls sit flush with index items
		setIndexPosition(nextIndex);
		setScrollPosition(newScrollPosition);
	};

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
					onClick={() => clickScroll("left")}
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
					onClick={() => clickScroll("right")}
				>
					<span>&#x2192;</span>
				</button>
			</div>
		</nav>
	);
};
