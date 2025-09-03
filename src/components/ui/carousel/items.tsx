"use client";

import { CarouselItem } from "@/components/ui/carousel/item";

import type { CarouselItemsPropsVariant } from "@/types/ui/carousel";

interface CarouselItemsPropsBase {
	gapSize: number;
}
type CarouselItemsProps = CarouselItemsPropsBase & CarouselItemsPropsVariant;

export const CarouselItems = (props: CarouselItemsProps) => {
	const { type, gapSize } = props;

	if (type === "loader") {
		return Array.from({ length: 20 }).map((_, index) => (
			<CarouselItem key={index} type="loader" gapSize={gapSize} />
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
				gapSize={gapSize}
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
				gapSize={gapSize}
			/>
		));
	}

	if (type === "card") {
		const { data, collectSize } = props;

		return data.map((item, index) => (
			<CarouselItem
				key={item.slug}
				type="card"
				data={item}
				collectSize={collectSize}
				index={index}
				gapSize={gapSize}
			/>
		));
	}
};
