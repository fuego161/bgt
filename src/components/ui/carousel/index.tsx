"use client";

import type { ReactElement } from "react";

import { CarouselItem } from "@/components/ui/carousel/item";
import type {
	CarouselItemHandlerProps,
	CarouselItemLinkProps,
} from "@/types/ui/carousel";

type CarouselProps =
	| {
			type: "loader";
			ariaLabel?: string;
			data?: undefined;
	  }
	| {
			type: "link";
			ariaLabel?: string;
			data: CarouselItemLinkProps[];
	  }
	| {
			type: "handler";
			ariaLabel?: string;
			data: CarouselItemHandlerProps[];
	  };

const navWrapper = (
	items: ReactElement[],
	ariaLabel?: string
): ReactElement => {
	return (
		<nav {...(ariaLabel && { "aria-label": ariaLabel })}>
			<ul className="carousel flex overflow-x-hidden">{items}</ul>
		</nav>
	);
};

export const Carousel = (props: CarouselProps) => {
	const { ariaLabel, type } = props;

	if (type === "loader") {
		return navWrapper(
			Array.from({ length: 20 }).map((_, index) => (
				<CarouselItem key={index} type="loader" />
			)),
			ariaLabel
		);
	}

	if (type === "link") {
		const { data } = props;

		return navWrapper(
			data.map((item) => (
				<CarouselItem key={item.slug} type="link" data={item} />
			)),
			ariaLabel
		);
	}

	if (type === "handler") {
		const { data } = props;

		return navWrapper(
			// TODO: Remove index key
			data.map((item, index) => (
				<CarouselItem key={index} type="handler" data={item} />
			)),
			ariaLabel
		);
	}
};
