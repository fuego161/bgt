"use client";

import clsx from "clsx";
import { useEffect, useRef } from "react";

import { buttonVariants } from "@/components/ui/button/button-variants";

import type { Dispatch, SetStateAction } from "react";

interface DirectionalButtonsProps {
	direction: "left" | "right";
	carouselLength: number;
	carouselElementWidth: number;
	scrollJump: number;
	scrollPosition: number;
	indexPosition: number;
	itemSizes: number[];
	scrollToIndex: (index: number) => void;
	setButtonOverlayBuffer: Dispatch<SetStateAction<number>>;
}

export const DirectionalButtons = ({
	direction,
	scrollPosition,
	carouselLength,
	carouselElementWidth,
	scrollJump,
	indexPosition,
	itemSizes,
	scrollToIndex,
	setButtonOverlayBuffer,
}: DirectionalButtonsProps) => {
	const buttonContainerRef = useRef<HTMLDivElement | null>(null);

	const isLeft = direction === "left";

	const atStart = scrollPosition === 0;
	const atEnd = scrollPosition >= carouselLength - carouselElementWidth;

	const disabledDirection = isLeft ? atStart : atEnd;

	// TODO: Update on page size change
	useEffect(() => {
		if (buttonContainerRef.current) {
			setButtonOverlayBuffer(buttonContainerRef.current.offsetWidth);
		}
	}, [setButtonOverlayBuffer]);

	/**
	 * Calculates the next index based on the direction and scroll jump
	 * Goes on to call scrollToIndex to action that update
	 *
	 * @param direction Left or Right depending on which button was clicked
	 * @returns void
	 */
	const clickScroll = (direction: "left" | "right"): void => {
		// Collect the next index depending on the direction
		// Take the current index and then either add or remove the scroll jump to get the next index
		// Use Math max/min to set fall backs of either the start or end of the carousel to stop overshooting
		const nextIndex =
			direction === "left"
				? Math.max(indexPosition - scrollJump, 0)
				: Math.min(indexPosition + scrollJump, itemSizes.length);

		scrollToIndex(nextIndex);
	};

	return (
		<div
			className={clsx(
				"absolute top-0 bottom-0 flex items-center z-20 transition-opacity duration-300 from-white from-70% to-transparent",
				isLeft
					? "left-0 pr-8 bg-gradient-to-r"
					: "right-0 pl-8 bg-gradient-to-l",
				disabledDirection && "opacity-0 pointer-events-none"
			)}
			ref={buttonContainerRef}
		>
			<button
				className={`${buttonVariants({
					circle: true,
				})} flex items-center justify-center size-9 group`}
				disabled={disabledDirection}
				aria-disabled={disabledDirection}
				aria-hidden={disabledDirection}
				tabIndex={disabledDirection ? -1 : undefined}
				onClick={() => clickScroll(direction)}
			>
				<svg
					className={clsx("size-3", isLeft && "rotate-180")}
					width="100%"
					height="100%"
					viewBox="0 0 26 26"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						className="transition-colors duration-300 fill-white group-hover:fill-main"
						d="M5.997 1.594 7.507.017l12.49 13-12.49 13-1.51-1.568 10.974-11.432L5.997 1.595Z"
					/>
				</svg>
			</button>
		</div>
	);
};
