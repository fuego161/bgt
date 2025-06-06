"use client";

import { CarouselItem } from "@/components/ui/carousel/item";

import type {
	CarouselItemHandlerProps,
	CarouselItemLinkProps,
} from "@/types/ui/carousel";
import type { ReactElement } from "react";

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
			category?: string;
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
		const { data, category } = props;

		return navWrapper(
			data.map((item) => (
				<CarouselItem
					key={item.slug}
					type="handler"
					data={item}
					category={category}
				/>
			)),
			ariaLabel
		);
	}
};
