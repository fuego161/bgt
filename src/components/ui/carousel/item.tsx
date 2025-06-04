import Link from "next/link";
import type { CarouselItemDataProps } from "@/types/ui/carousel";

interface CarouselItemProps {
	isLoading?: boolean;
	data?: CarouselItemDataProps;
}

const btnClasses =
	"block px-4 py-2 bg-teal-300 rounded-sm text-center whitespace-nowrap";

export const CarouselItem = ({ isLoading, data }: CarouselItemProps) => {
	return (
		<li className="mr-3 last-of-type:mr-0">
			{isLoading && (
				<button
					className={`...${btnClasses} w-[100px] animate-pulse`}
					disabled
					aria-hidden="true"
					tabIndex={-1}
				>
					&nbsp;
				</button>
			)}

			{!isLoading && data && data.link && (
				<Link
					className={btnClasses}
					href={{
						pathname: data.link.pathname,
						query: data.link.query,
					}}
				>
					{data.title}
				</Link>
			)}

			{!isLoading && data && !data.link && (
				// TODO: This'll be a same page item, so will hold an onSelect handler
				<button className={btnClasses}>{data.title}</button>
			)}
		</li>
	);
};
