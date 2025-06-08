export type CarouselItemTypes = "loader" | "link" | "handler";

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
	  };

type ExpandCarouselProps<T> = T extends { type: infer U }
	? U extends "loader"
		? T
		: U extends "link" | "handler"
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
