"use client";

import Link from "next/link";
import type { ReactElement } from "react";

import type {
	CarouselItemHandlerProps,
	CarouselItemLinkProps,
} from "@/types/ui/carousel";

type CarouselItemProps =
	| { type: "loader" }
	| { type: "link"; data: CarouselItemLinkProps }
	| {
			type: "handler";
			data: CarouselItemHandlerProps;
	  };

const btnClasses =
	"block px-4 py-2 bg-teal-300 rounded-sm text-center whitespace-nowrap";

const itemWrapper = (item: ReactElement): ReactElement => {
	return <li className="mr-3 last-of-type:mr-0">{item}</li>;
};

export const CarouselItem = (props: CarouselItemProps) => {
	if (props.type === "loader") {
		return itemWrapper(
			<button
				className={`${btnClasses} w-[100px] animate-pulse`}
				disabled
				aria-disabled="true"
				aria-hidden="true"
				tabIndex={-1}
			>
				&nbsp;
			</button>
		);
	}

	if (props.type === "link") {
		const { data } = props;
		const { title, link, disabled } = data;

		if (disabled) {
			return itemWrapper(
				<span className={`${btnClasses} block cursor-not-allowed`}>
					{title}
				</span>
			);
		}

		if (link) {
			const { pathname, query } = link;

			return itemWrapper(
				<Link
					className={btnClasses}
					href={{
						pathname,
						query,
					}}
				>
					{title}
				</Link>
			);
		}
	}

	if (props.type === "handler") {
		const { data } = props;
		const { title, onSelect } = data;

		return itemWrapper(
			<button className={btnClasses} onClick={() => onSelect?.("test")}>
				{title}
			</button>
		);
	}

	if (process.env.NODE_ENV === "development") {
		console.warn("Unhandled CarouselItemProps variant:", props);
	}

	return null;
};
