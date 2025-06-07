"use client";

import { CarouselItem } from "@/components/ui/carousel/item";

import type { CarouselPropsVariant } from "@/types/ui/carousel";

type CarouselItems = CarouselPropsVariant;

export const CarouselItems = (props: CarouselItems) => {
	const { type } = props;

	if (type === "loader") {
		return Array.from({ length: 20 }).map((_, index) => (
			<CarouselItem key={index} type="loader" />
		));
	}

	if (type === "link") {
		const { data } = props;

		return data.map((item) => (
			<CarouselItem key={item.slug} type="link" data={item} />
		));
	}

	if (type === "handler") {
		const { data, initialItem } = props;

		return data.map((item) => (
			<CarouselItem
				key={item.slug}
				type="handler"
				data={item}
				initialItem={initialItem}
			/>
		));
	}
};
