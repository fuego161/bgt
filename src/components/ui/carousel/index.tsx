"use client";

import { ReactElement, useCallback, useEffect, useRef, useState } from "react";

import { DirectionalButtons } from "@/components/ui/carousel/directional-buttons";
import { CarouselItems } from "@/components/ui/carousel/items";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

export type GapSizes = 8 | 12 | 16 | 24 | 32 | 48;

interface CarouselPropsBase {
	ariaLabel: string;
	gapSize?: GapSizes;
	scrollJump?: number;
	activeIndex?: number;
	fixedSize?: number | false;
}

type CarouselProps = CarouselPropsBase & CarouselPropsVariant;

export const Carousel = (props: CarouselProps) => {
	// Set defaults
	const gapSize: GapSizes = props.gapSize ?? 12;
	const scrollJump = props.scrollJump ?? 4;
	const fixedSize = props.fixedSize ?? false;

	const ulElementRef = useRef<HTMLUListElement>(null);

	const [itemSizes, setItemSizes] = useState<number[]>([]);
	const [carouselLength, setCarouselLength] = useState<number>(0);
	const [carouselElementWidth, setCarouselElementWidth] = useState<number>(0);
	const [initialPositionUpdate, setInitialPositionUpdate] =
		useState<boolean>(false);
	const [buttonOverlayBuffer, setButtonOverlayBuffer] = useState<number>(0);

	const [indexPosition, setIndexPosition] = useState<number>(0);
	const [scrollPosition, setScrollPosition] = useState<number>(0);

	/**
	 * Calculates scroll position for a given index
	 *
	 * @param index The target item index to calculate to (0 based)
	 * @param safePosition Whether to constrain within limits
	 * @returns Scroll position in pixels
	 */
	const calculateScrollPosition = useCallback(
		(index: number, safePosition = true): number => {
			// If we're trying to reach an invalid index, instantly break out
			// Also covers 0 index being used, passes back the correct position of 0
			if (index <= 0 || index > itemSizes.length - 1) return 0;

			// Check to see if we're going to be at the end of the carousel
			const end = index === itemSizes.length - 1;
			// Calculate the gap total, if we're at the end account for the last item and remove its gap
			const gapTotal = end ? gapSize * (index - 1) : gapSize * index;

			// Calculate the new scroll position based on the sizes of the items between the start and the current index
			// Make sure to include the gap total
			// This method means that items will always be flush left, even if moving the end would break the position pattern
			const newScrollPosition = itemSizes
				.slice(0, index)
				.reduce((a, b) => a + b, gapTotal - buttonOverlayBuffer);

			// Update the scroll position with min/max fall backs to stop scroll overshooting
			return safePosition
				? Math.min(
						Math.max(0, newScrollPosition),
						carouselLength - carouselElementWidth
				  )
				: newScrollPosition;
		},
		[
			itemSizes,
			gapSize,
			carouselLength,
			carouselElementWidth,
			buttonOverlayBuffer,
		]
	);

	useEffect(() => {
		// Get the amount of items stored
		const itemCount = itemSizes.length;

		// If there's no items yet, leave
		if (!itemCount) return;

		// Calculate the combined size of all the items
		const itemsCombinedSize = itemSizes.reduce((a, b) => a + b, 0);
		// Calculate the amount of gap between all the items, excluding the final gap after the last item
		const combinedGapSize = gapSize * (itemCount - 1);

		setCarouselLength(itemsCombinedSize + combinedGapSize);
	}, [itemSizes, gapSize]);

	/**
	 * Only fires when initialPositionUpdate is set to false
	 * If the active item is outside of the viewing boundary the position is updated so the active item is visible
	 */
	useEffect(() => {
		if (
			initialPositionUpdate ||
			itemSizes.length === 0 ||
			carouselLength === 0 ||
			carouselElementWidth === 0 ||
			props.activeIndex === undefined
		)
			return;

		// Get the active index
		const activeIndex = props.activeIndex;
		// Calculate the start "scroll" position of the active index
		const itemStart = calculateScrollPosition(activeIndex, false);
		// Using the stored item sizes get the end of the item
		const itemEnd = itemStart + itemSizes[activeIndex];

		// Check to see if the start and end of the item are within the visible portion of the carousel
		const withinView =
			itemStart >= scrollPosition &&
			itemEnd <= scrollPosition + carouselElementWidth;

		/**
		 * The active index might point to an item that technically fits in the scrollable area
		 * but doesn't trigger a scroll due to scrollJump increments.
		 * For example, if the last item requires several small scrolls to reach,
		 * the carousel may not visibly move when setting that index directly.
		 *
		 * To avoid this, we calculate the last scroll-aligned index before the maximum scroll boundary
		 * and use that instead, ensuring the scroll behaves consistently with click-based navigation.
		 */

		// Calculate the maximum scrollable position
		const maxScrollPosition = carouselLength - carouselElementWidth;

		// Default to the active index; may adjust if it's out of scroll range
		let newIndex = activeIndex;

		// Check to see if the items start position is over the max scroll position
		if (itemStart > maxScrollPosition) {
			// Set a running size total we'll add to
			let runningTotal = 0;

			// Loop over the itemSizes
			// Using entries to grab the index
			for (const [index, itemSize] of itemSizes.entries()) {
				// Add to the running size total
				runningTotal += itemSize + gapSize;

				// If the running size total is over the max scroll position
				// And the current index fits within a natural scroll jump group break out
				if (
					runningTotal > maxScrollPosition &&
					index % scrollJump === 0
				) {
					// Set the new index
					newIndex = index;
					break;
				}
			}
		}

		// If it's not in view, update the scroll position and index
		if (!withinView) {
			setScrollPosition(calculateScrollPosition(newIndex));
			setIndexPosition(newIndex);
		}

		// Set the initial position update to true to stop this firing
		setInitialPositionUpdate(true);
	}, [
		initialPositionUpdate,
		itemSizes,
		carouselLength,
		carouselElementWidth,
		props.activeIndex,
		calculateScrollPosition,
		scrollPosition,
		gapSize,
		scrollJump,
	]);

	// TODO: Update on page size change
	useEffect(() => {
		if (ulElementRef.current) {
			setCarouselElementWidth(ulElementRef.current.offsetWidth);
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

	/**
	 * Scrolls the carousel to the specified index, updating scroll and index positions
	 * Does nothing if the index is out of bounds
	 *
	 * @param index - The target item index to scroll to (0 based)
	 * @returns void
	 */
	const scrollToIndex = useCallback(
		(index: number) => {
			// If we're trying to reach an invalid index, instantly break out
			if (index < 0 || index > itemSizes.length - 1) return;

			setIndexPosition(index);
			setScrollPosition(calculateScrollPosition(index));
		},
		[itemSizes, calculateScrollPosition]
	);

	/**
	 * Returns the Carousel Items component with the correct params depending on the type
	 */
	const carouselItems: ReactElement =
		props.type === "loader" ? (
			<CarouselItems {...props} gapSize={gapSize} fixedSize={fixedSize} />
		) : (
			<CarouselItems
				{...props}
				collectSize={collectSize}
				gapSize={gapSize}
				fixedSize={fixedSize}
			/>
		);

	const directionalButton = (direction: "left" | "right") => (
		<DirectionalButtons
			direction={direction}
			carouselLength={carouselLength}
			carouselElementWidth={carouselElementWidth}
			scrollJump={scrollJump}
			scrollPosition={scrollPosition}
			indexPosition={indexPosition}
			itemSizes={itemSizes}
			scrollToIndex={scrollToIndex}
			setButtonOverlayBuffer={setButtonOverlayBuffer}
		/>
	);

	return (
		<nav aria-label={props.ariaLabel}>
			<div className="relative overflow-x-hidden">
				{directionalButton("left")}
				<ul
					style={{
						transform: `translateX(-${scrollPosition}px)`,
					}}
					className="flex items-center py-2 transition-transform ease-in-out scroll-smooth whitespace-nowrap"
					ref={ulElementRef}
				>
					{carouselItems}
				</ul>
				{directionalButton("right")}
			</div>
		</nav>
	);
};
