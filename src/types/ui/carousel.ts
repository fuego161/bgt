export interface CarouselItemDataProps {
	title: string;
	slug: string;
	disabled?: boolean;
	link: {
		pathname: string;
		query?: Record<string, string>;
	};
}
