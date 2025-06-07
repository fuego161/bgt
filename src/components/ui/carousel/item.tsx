"use client";

import Link from "next/link";

import { buttonVariants } from "@/components/ui/button/button-variants";

import type {
	CarouselItemHandlerProps,
	CarouselItemLinkProps,
} from "@/types/ui/carousel";
import type { ReactElement } from "react";

type CarouselItemProps =
	| { type: "loader" }
	| { type: "link"; data: CarouselItemLinkProps }
	| {
			type: "handler";
			data: CarouselItemHandlerProps;
			category?: string;
	  };

const itemWrapper = (item: ReactElement): ReactElement => {
	return <li className="mr-3 last-of-type:mr-0">{item}</li>;
};

export const CarouselItem = (props: CarouselItemProps) => {
	if (props.type === "loader") {
		return itemWrapper(
			<button
				className={buttonVariants({
					intent: "skeleton",
					hoverable: false,
				})}
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
				<span
					className={buttonVariants({
						intent: "primary",
						disabled: true,
						hoverable: false,
					})}
				>
					{title}
				</span>
			);
		}

		if (link) {
			const { pathname, query } = link;

			return itemWrapper(
				<Link
					className={buttonVariants({ intent: "primary" })}
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
		const { data, category } = props;
		const { title, slug, onSelect } = data;

		const active = category === slug || (title === "All" && !category);

		return itemWrapper(
			<button
				className={buttonVariants({
					intent: "handler",
					active,
					disabledHandler: active,
				})}
				onClick={() => onSelect?.(slug)}
				disabled={active}
				aria-disabled={active}
				tabIndex={active ? -1 : undefined}
			>
				{title}
			</button>
		);
	}

	if (process.env.NODE_ENV === "development") {
		console.warn("Unhandled CarouselItemProps variant:", props);
	}

	return null;
};
