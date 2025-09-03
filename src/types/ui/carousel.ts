export type CarouselItemTypes = "loader" | "link" | "handler" | "card";

export type CarouselPropsVariant =
	| {
			type: "loader";
			data?: undefined;
			initialItem?: undefined;
	  }
	| {
			type: "link";
			data: CarouselItemLinkProps[];
			initialItem?: undefined;
	  }
	| {
			type: "handler";
			data: CarouselItemHandlerProps[];
			initialItem?: string;
	  }
	| {
			type: "card";
			data: CarouselItemCardProps[];
	  };

type ExpandCarouselProps<T> = T extends { type: infer U }
	? U extends "loader"
		? T
		: U extends "link" | "handler" | "card"
		? T & { collectSize: (index: number) => (size: number) => void }
		: never
	: never;

export type CarouselItemsPropsVariant =
	ExpandCarouselProps<CarouselPropsVariant>;

export interface CarouselItemLinkProps {
	title: string;
	slug: string;
	disabled?: boolean;
	link: {
		pathname: string;
		query?: Record<string, string>;
	};
}

export interface CarouselItemHandlerProps {
	title: string;
	slug: string;
	disabled?: boolean;
	onSelect: (value: string | null) => void;
}

export interface CarouselItemCardProps {
	title: string;
	slug: string;
	imagePath: string;
	snippet: string;
}
