"use client";

import { CarouselItem } from "@/components/ui/carousel/item";

import type { CarouselItemsPropsVariant } from "@/types/ui/carousel";

type CarouselItems = CarouselItemsPropsVariant;

export const CarouselItems = (props: CarouselItems) => {
	const { type } = props;

	if (type === "loader") {
		return Array.from({ length: 20 }).map((_, index) => (
			<CarouselItem key={index} type="loader" />
		));
	}

	if (type === "link") {
		const { data, collectSize } = props;

		return data.map((item, index) => (
			<CarouselItem
				key={item.slug}
				type="link"
				data={item}
				collectSize={collectSize}
				index={index}
			/>
		));
	}

	if (type === "handler") {
		const { data, initialItem, collectSize } = props;

		return data.map((item, index) => (
			<CarouselItem
				key={item.slug}
				type="handler"
				data={item}
				initialItem={initialItem}
				collectSize={collectSize}
				index={index}
			/>
		));
	}
};
