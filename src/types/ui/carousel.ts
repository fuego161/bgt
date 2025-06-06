export interface CarouselItemDataProps {
	title: string;
	slug: string;
	link: {
		pathname: string;
		query?: Record<string, string>;
	};
	disabled?: boolean;
}
