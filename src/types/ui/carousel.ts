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
	disabled?: boolean;
	onSelect: (value: string | null) => void;
}

export type CarouselItemTypes = "loader" | "link" | "handler";
